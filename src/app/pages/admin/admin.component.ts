import { Component } from '@angular/core';
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

  someAdminLogic(): void {
    console.log('Admin logic triggered!');
    // Add any specific logic for the admin component here
  }

  onSubmit(): void {
    const credentials = {
      username: this.username,
      password: this.password
    };
    console.log('Submitted credentials:', credentials);
  }
}
