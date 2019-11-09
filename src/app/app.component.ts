import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piping';
  price='113';
  somedate="10-02-2018";

  //custom piping variables
  firstname="tops";
  lastname="tech";
  address="surat";
  newstr="Good Morning";
}
