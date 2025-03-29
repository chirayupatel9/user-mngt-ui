import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [ FormsModule ], // Import FormsModule for template-driven forms
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  username: string = '';
  password: string = '';

  constructor(private adminService: AdminService) {}

  onSubmit(): void {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.adminService.authenticate(credentials).subscribe(
      (response) => {
        console.log('Authentication successful:', response);
        // Handle successful authentication (e.g., navigate to another page)
      },
      (error) => {
        console.error('Authentication failed:', error);
        // Handle authentication failure (e.g., show an error message)
      }
    );
  }
}
