import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SplitsmolenGame } from '../splitsmolen-game';

@Component({
  selector: 'app-splitsmolens-start',
  templateUrl: './splitsmolens-start.component.html',
  styleUrls: ['./splitsmolens-start.component.css']
})
export class SplitsmolensStartComponent implements OnInit {

  public form: FormGroup;
  @Input() splitsmolenGame: SplitsmolenGame;
  @Output() formCompleted = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.form = this.fb.group({
      gebruiker: [this.splitsmolenGame.getGebruiker()!==""?this.splitsmolenGame.getGebruiker():"", [
        Validators.required
      ]],
      shuffle:[true],
      ondergrens: [this.splitsmolenGame.getOndergrens()?this.splitsmolenGame.getOndergrens():2, [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]],
      bovengrens: [this.splitsmolenGame.getBovengrens()?this.splitsmolenGame.getBovengrens():5, [
        Validators.required,
        Validators.min(1),
        Validators.max(20)
      ]],
      aantalPerNiveau: [this.splitsmolenGame.getAantalPerNiveau()?this.splitsmolenGame.getAantalPerNiveau():3, [
        Validators.required,
        Validators.min(1)
      ]]
    }, {validator: validateGrenzen});
  }
  startOefening(){
    if(this.form.valid){
      this.splitsmolenGame.setGebruiker(this.form.get("gebruiker").value);
      this.splitsmolenGame.setOndergrens(this.form.get("ondergrens").value);
      this.splitsmolenGame.setBovengrens(this.form.get("bovengrens").value);
      this.splitsmolenGame.setAantalPerNiveau(this.form.get("aantalPerNiveau").value);
      this.splitsmolenGame.generateSplitsmolens();
      if(this.form.get("shuffle").value){
        this.splitsmolenGame.shuffleSplitsmolens();
      }
      this.formCompleted.emit(true);
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
      max: `Maximum is ${errorValue.max}`,
      min: `Minimum is ${errorValue.min}`,
      ondergrensInvalid: `'Splitsmolens vanaf' mag niet groter zijn dan 'tot splitsmolens'`,
      aantalPerNiveauInvalid: `'Aantal per splitsmolenlevel' mag maximaal 1 eenheid groter zijn dan 'Splitsmolens vanaf'`
    };
    return errors[errorName];
  }
}
export const validateGrenzen: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
     let ondergrensControl = control.get("ondergrens");
     let bovengrensControl = control.get("bovengrens");
     let aantalPerNiveauControl = control.get("aantalPerNiveau");
      if(ondergrensControl.value > bovengrensControl.value){
        return { ondergrensInvalid: true};
      }
      if(aantalPerNiveauControl.value > (ondergrensControl.value+1)){
        return { aantalPerNiveauInvalid: true};
      }
      return null;
}