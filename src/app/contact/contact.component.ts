import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  username:any;
  lastname:any;
  email:any;
  message:any;
  list:any;

  constructor(private firebase:AngularFirestore)
  {

  }

  insertrecord()
  {
    const collection_name = "contactus";
    var data = {
      "UserName":this.username,
      "LastName":this.lastname,
      "Email":this.email,
      "Message":this.message,
      "Purpose":this.list
    }
    this.firebase.collection(collection_name).add(data).then(docRef =>{
      alert("Data has been inserted to firebase");
      // window.location.href="/";
    })
    .catch(error =>{
      console.log("Error Occured"+error)
    })
  }

}
