import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavComponent } from "../../components/nav/nav.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, FooterComponent, NavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  email: string = '';
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

}
