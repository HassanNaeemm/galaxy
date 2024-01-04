import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  mylist:any=[]
  constructor(private firebase:AngularFirestore)
  {
    this.getdata();
  }
  getdata()
  {
    this.firebase.collection('contactus').valueChanges().subscribe(data=>{
      this.mylist = data
    })
  }
}
