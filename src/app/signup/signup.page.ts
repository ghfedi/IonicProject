import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder ,FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(private route:Router ,private service:DataService ) { }
 
    name!:any
    email!:any
    password!:any
    contact!:any
    sexe!:any
  
  ngOnInit() {
 
  }
onSubmit() {
  let body={
    name: this.name,
    email: this.email,
    password: this.password,
    contact: this.contact,
    sexe: this.sexe
  }
  console.log(this.service.register(body))
this.route.navigate(['/login']) 
}




}
