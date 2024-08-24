import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import AuthService from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): Promise<boolean> {
    return this.checkAuth();
  }

  private async checkAuth(): Promise<boolean> {
    if (!this.authService.isAuthenticatedUser()) {
      return true;
    }
    await this.authService.navigateToHome();
    return false;
  }
}
