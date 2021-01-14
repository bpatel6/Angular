import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = 'Bhavik';
  getName(){
    return 'Suku'
  }
  obj = {
    name: 'Kishan',
    age: 21
  }
  arr = ['Bruce', 'Swapnil'];
  siteURL = window.location.href;
}
