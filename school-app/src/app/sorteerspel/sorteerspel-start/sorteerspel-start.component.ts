import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SorteerGame } from '../sorteer-game';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { SorteerWijze } from '../sorteer-wijze.enum';

@Component({
  selector: 'app-sorteerspel-start',
  templateUrl: './sorteerspel-start.component.html',
  styleUrls: ['./sorteerspel-start.component.css']
})
export class SorteerspelStartComponent implements OnInit {

  @Input() sorteerGame: SorteerGame;
  @Output() startCompleted = new EventEmitter<boolean>();
  public  form: FormGroup;
  sorteerWijzen = Object.values(SorteerWijze);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      gebruiker: [, [
        Validators.required
      ]],
      ondergrens: [, [
        Validators.required,
        Validators.min(0),
      ]],
      bovengrens: [, [
        Validators.required,
        Validators.min(1),
      ]],
      aantalGetallenPerOefening: [, [
        Validators.required,
        Validators.min(1),
        Validators.max(7)
      ]],
      aantalOefeningen: [, [
        Validators.required,
        Validators.min(1),
        Validators.max(20)
      ]],
      sorteerwijze: [SorteerWijze.RANDOM,[
        Validators.required
      ]]
    }, {validator: validateForm});
  }
  startOefening(){
    
    if(this.form.valid){
      this.sorteerGame.setGebruiker(this.form.get("gebruiker").value);
      this.sorteerGame.setOndergrens(this.form.get("ondergrens").value);
      this.sorteerGame.setBovengrens(this.form.get("bovengrens").value);
      this.sorteerGame.setAantalGetallenPerOefening(this.form.get("aantalGetallenPerOefening").value);
      this.sorteerGame.setAantalOefeningen(this.form.get("aantalOefeningen").value);
      let keys = Object.keys(SorteerWijze).filter(x => SorteerWijze[x] === this.form.get("sorteerwijze").value);
      this.sorteerGame.setSorteerWijze(SorteerWijze[keys[0]]);
      this.sorteerGame.generateOefeningen();
      this.startCompleted.emit(true);
    }
  }
  getErrorMessage(control: AbstractControl) {
    for (const err in control.errors) {
      if (control.touched && control.errors.hasOwnProperty(err)) {
        return this.getErrorMessageText(err, control.errors[err]);
      }
    }
  }

  getErrorMessageText(errorName: string, errorValue?: any) {
    const errors = {
      required: "Dit is verplicht",
      min: `Minimum is ${errorValue.min}`,
      max: `Maximum is ${errorValue.max}`,
      ondergrensInvalid: `'Laagste getal' mag niet hoger zijn dan 'hoogste getal'`,
      aantalGetallenInvalid: `Aantal getallen per oefening kan niet groter zijn dan het verschil tussen het hoogste en laagste getal.`
    };
    return errors[errorName];
  }
}
export const validateForm: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
     let ondergrensControl = control.get("ondergrens");
     let bovengrensControl = control.get("bovengrens");
     let aantalGetallenPerOefeningControl = control.get("aantalGetallenPerOefening");
      if(ondergrensControl.value > bovengrensControl.value){
        return { ondergrensInvalid: true};
      }
      if(aantalGetallenPerOefeningControl.value > (bovengrensControl.value-ondergrensControl.value)){
        return { aantalGetallenInvalid: true};
      }
      return null;
}
