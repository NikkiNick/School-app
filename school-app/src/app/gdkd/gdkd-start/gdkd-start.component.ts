import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GdkdGame } from '../gdkd-game';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-gdkd-start',
  templateUrl: './gdkd-start.component.html',
  styleUrls: ['./gdkd-start.component.css']
})
export class GdkdStartComponent implements OnInit {

  @Input() gdkdGame: GdkdGame;
  @Output() startCompleted = new EventEmitter<boolean>();
  public  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      gebruiker: [, [
        Validators.required
      ]],
      shuffle:[true],
      ondergrens: [, [
        Validators.required,
        Validators.min(0),
      ]],
      bovengrens: [, [
        Validators.required,
        Validators.min(1),
      ]],
      aantal: [, [
        Validators.required,
        Validators.min(1)
      ]]
    }, {validator: validateForm});
  }
  startOefening(){
    
    if(this.form.valid){
      this.gdkdGame.setGebruiker(this.form.get("gebruiker").value);
      this.gdkdGame.setOndergrens(this.form.get("ondergrens").value);
      this.gdkdGame.setBovengrens(this.form.get("bovengrens").value);
      this.gdkdGame.setAantal(this.form.get("aantal").value);
      this.gdkdGame.generateOefeningen();
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
      ondergrensInvalid: `'Laagste level' mag niet hoger zijn dan 'hoogste level'`
    };
    return errors[errorName];
  }
}
export const validateForm: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
     let ondergrensControl = control.get("ondergrens");
     let bovengrensControl = control.get("bovengrens");
      if(ondergrensControl.value > bovengrensControl.value){
        return { ondergrensInvalid: true};
      }
      return null;
}