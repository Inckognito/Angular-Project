import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDh3gMGuTglLnrmDAjt0mfc4Rth0ugEtik",
      authDomain: "memes-96dcc.firebaseapp.com"
    })
  }

}
