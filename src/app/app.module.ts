import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";
import { AppComponent } from './app.component';
const firebaseConfig={
apiKey: "AIzaSyB8k_kjCZIM7bvyrm7RjcLyyqSILGlCVic",
    authDomain: "fir-auth-63c46.firebaseapp.com",
    databaseURL: "https://fir-auth-63c46.firebaseio.com",
    storageBucket: "fir-auth-63c46.appspot.com",
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider:AuthProviders.Google,
      method:AuthMethods.Popup
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    BrowserModule,
  ]
})
export class AppModule { }
