import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/https';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './todo/delete-todo/delete-todo.component';
import { HeaderComponent } from './header/header.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoItemComponent } from './todo/todo-list/todo-item/todo-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    DeleteTodoComponent,
    HeaderComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
