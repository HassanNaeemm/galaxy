import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AboutComponent } from './about/about.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({"projectId":"dbtest2211b-d2500","appId":"1:435927507555:web:f271627d51e614191cce56","storageBucket":"dbtest2211b-d2500.appspot.com","apiKey":"AIzaSyDpCDVSWYrh_5QxKcJTW2xkvj4OgWoW8e8","authDomain":"dbtest2211b-d2500.firebaseapp.com","messagingSenderId":"435927507555","measurementId":"G-K2MN4RS5RW"}),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
