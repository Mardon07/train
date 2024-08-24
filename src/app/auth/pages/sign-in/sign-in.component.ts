import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import AuthService from '../../services/auth.service';
import { CustomValidationService } from '../../services/custom-validation.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export default class SignInComponent {
  loginForm: FormGroup;

  isLoading = false;

  hide = signal(true);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, CustomValidationService.emailValidator()],
      ],
      password: ['', [Validators.required]],
    });
  }

  protected togglePasswordVisibility(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.hide.set(!this.hide());
  }

  protected async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const email = this.loginForm.get('email')?.value as string;
      const password = this.loginForm.get('password')?.value as string;
      await this.authService.login(email, password, this.loginForm, () => {
        this.isLoading = false;
      });
    }
  }
}
