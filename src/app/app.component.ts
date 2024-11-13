import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven-form';
  @ViewChild('registrationForm') form: NgForm;
  genders = [
    { id: 'check-male', value: 'male', display: 'Male' },
    { id: 'check-female', value: 'femail', display: 'FeMale' },
    { id: 'check-other', value: 'other', display: 'Others' }
  ]

  //to add two way data binding
  firstName: string = '';
  lastName: string = '';
  emailAddress: string = '';
  Dob: string = '';
  ischecked:boolean =false;


  onFormSubmitted() {
    console.log('Form submitted', this.form);
    // console.log(this.form.controls['firstname'].value);
    // console.log(this.form.controls['lastname'].value);
    // console.log(this.form.controls['email'].value);
    // console.log(this.form.value.gender);

    // console.log(this.form.value.address.country)
    // console.log(this.form.value.address.cit

    this.form.reset();  // all the form controlles are reseting
    this.form.form.patchValue({
      gender:'male',
      address:{
        country:'India'
      }
    })

  }
  GenarateUserName() {
    //need to calculate user name:
    let username = '';
    if (this.firstName.length >= 3) {
      username += this.firstName.slice(0, 3)
    }
    else {
      username += this.firstName;
    }
    if (this.lastName.length >= 3) {
      username += this.lastName.slice(0, 3)
    }
    else {
      username += this.lastName;
    }

    let datetime = new Date(this.Dob);
    username += datetime.getFullYear();
    username = username.toLowerCase();
   
    // this.form.value.username = username;
    // this.form.controls['username'].value=username // we cant update thevalue property 

    //er are using set value
    // console.log('UserName is',  this.form.value.username);
    // this.form.setValue({
    //   firstname:this.form.value.firstname,
    //   lastname:this.form.value.lastname,
    //   email:this.form.value.email,
    //   phone:this.form.value.phone,
    //   dob:this.form.value.dob,
    //   gender:this.form.value.gender,
    //   username:username,
    //   address:{
    //     street1:this.form.value.address.street1,
    //     street2:this.form.value.address.street2,
    //     country:this.form.value.address.country,
    //     city:this.form.value.address.city,
    //     region:this.form.value.address.region,
    //     postal:this.form.value.address.postal
    //   }
    // })

    this.form.form.patchValue({
      username:username,
      // address:{
      //   country:'Jappan'
      // }
    })

  }
}
