import {FormGroup, ValidationErrors} from '@angular/forms';

export const gameOptionsValidator = (control: FormGroup): ValidationErrors | null => {
  const size = +control.get('size').value;
  const mines = +control.get('mines').value;
  return size && mines && (size * size > mines) ? null : {gameOptions: true};
};
