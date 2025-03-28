import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-navbar',
  imports: [], // Fixed typo: 'import' to 'imports'
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Fixed typo
})
export class NavbarComponent {
  // Add any navbar logic here
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
