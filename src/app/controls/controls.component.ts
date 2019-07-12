import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {gameOptionsValidator} from './customValidators';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {

  @Output() resetBoard = new EventEmitter<{ size: number, mines: number }>();
  mineOptions: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mineOptions = this.fb.group({
      size: [20, Validators.required],
      mines: [50, [Validators.required]],
    }, {validators: gameOptionsValidator});
  }

  ngOnInit() {
  }

  reset() {
    this.resetBoard.emit(this.mineOptions.value);
  }

}
