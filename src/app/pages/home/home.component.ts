import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  someHomeLogic(): void {
    console.log('Home logic triggered!');
    // Add any specific logic for the home component here
  }
}
