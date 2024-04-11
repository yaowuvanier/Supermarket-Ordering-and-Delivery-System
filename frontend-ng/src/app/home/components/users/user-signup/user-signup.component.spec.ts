import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { UserSignupComponent } from './user-signup.component';
import { UserService } from '../services/user-service.service';
import { UserServiceMock } from 'src/app/shared/mocks/user-service.service.mock';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientMock } from 'src/app/shared/mocks/HttpClientMock.mock';

fdescribe('UserRegistrationComponent', () => {
  let component: UserSignupComponent;
  let fixture: ComponentFixture<UserSignupComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSignupComponent],
      providers: [
        { provide: HttpClient, useClass: HttpClientMock } ,// Provide HttpClientMock
        { provide: UserService, useClass: UserServiceMock }
      ],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserSignupComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require value in firstName field', () => {
    component.firstName?.patchValue('');
    fixture.detectChanges();
    expect(component.firstName?.valid).toBeFalse();

    component.firstName?.patchValue('Tom');
    fixture.detectChanges();
    expect(component.firstName?.valid).toBeTrue();
  });

  it('should require valid value in Email field', () => {
    component.email?.patchValue('');
    fixture.detectChanges();
    expect(component.email?.valid).toBeFalse();

    component.email?.patchValue('Tom');
    fixture.detectChanges();
    expect(component.email?.valid).toBeFalse();

    component.email?.patchValue('tom@email.com');
    fixture.detectChanges();
    expect(component.email?.valid).toBeTrue();
  });

  it('should match password and confirm password fields', () => {
    component.password?.patchValue('pass1');
    component.confirmPassword?.patchValue('pass2');
    fixture.detectChanges();
    expect(component.userSignupForm.errors?.['passwordMismatch']).toBeTrue();

    component.password?.patchValue('pass1');
    component.confirmPassword?.patchValue('pass1');
    fixture.detectChanges();
    expect(
      component.userSignupForm.errors?.['passwordMismatch']
    ).toBeUndefined();
  });


});
