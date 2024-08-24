import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { catchError, lastValueFrom, of } from 'rxjs';
import { HttpLoginResponse, ServerError } from '../models/server';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private readonly apiUrl = '/api';

  private isAuthenticated = false;

  private userStatus = 'guest';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isAuthenticated = !!localStorage.getItem('authToken');
      if (this.isAuthenticatedUser()) {
        this.userStatus = 'user';
      }
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  public async login(
    email: string,
    password: string,
    form: FormGroup,
    onFinish: () => void,
  ): Promise<void> {
    const data = { email, password };

    try {
      const response = await lastValueFrom(
        this.http
          .post(`${this.apiUrl}/signin`, data, { observe: 'response' })
          .pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status === 400) {
                const serverError = error.error as ServerError;
                const errorMessage = serverError.message;

                if (errorMessage === 'User is not found') {
                  form.setErrors({ UserIsNotFound: true });
                }
              }
              return of(null);
            }),
          ),
      );

      if (response && response.status === 201) {
        const { token } = response.body as HttpLoginResponse;
        localStorage.setItem('authToken', token);
        this.isAuthenticated = true;
        this.userStatus = 'user';
        await this.navigateToHome();
      }
    } catch (error) {
      console.error('Error while making POST request', error);
    } finally {
      onFinish();
    }
  }

  public async register(
    email: string,
    password: string,
    form: FormGroup,
    onFinish: () => void,
  ): Promise<void> {
    const data = { email, password };

    try {
      const response = await lastValueFrom(
        this.http
          .post(`${this.apiUrl}/signup`, data, { observe: 'response' })
          .pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status === 400) {
                const serverError = error.error as ServerError;
                const errorMessage = serverError.message;

                if (errorMessage === 'User already exists') {
                  form.get('email')?.setErrors({ emailExists: true });
                }
              }
              return of(null);
            }),
          ),
      );

      if (response && response.status === 201) {
        await this.navigateToLogin();
      }
    } catch (error) {
      console.error('Error while making POST request', error);
    } finally {
      onFinish();
    }
  }

  public async navigateToLogin(): Promise<void> {
    await this.router.navigateByUrl('/signin');
  }

  public async navigateToHome(): Promise<void> {
    await this.router.navigateByUrl('/');
  }
}
