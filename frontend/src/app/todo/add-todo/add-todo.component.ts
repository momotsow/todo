import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      todo: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
  }

}
