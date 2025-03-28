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

  onSubmit(): void {
    const credentials = {
      username: this.username,
      password: this.password
    };
    console.log('Submitted credentials:', credentials);
  }
}
