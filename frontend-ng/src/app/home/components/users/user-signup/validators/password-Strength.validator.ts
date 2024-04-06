import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator function to enforce password strength requirements
export const passwordStrength: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.value) {
    // Return null if the control value is empty (no validation error)
    return null;
  }

  // Define a regular expression pattern for password strength requirements
  /*
    At least 8 characters
    At least one lowercase letter ((?=.*[a-z]))
    At least one uppercase letter ((?=.*[A-Z]))
    At least one digit ((?=.*\d))
    At least one special character ((?=.*[@$!%*?&]))
  */
  const passwordStrengthPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Test the control value against the regular expression pattern
  if (!passwordStrengthPattern.test(control.value)) {
    // Return a validation error object if the pattern doesn't match
    return { passwordStrength: true };
  }

  // Return null if the control value meets the password strength requirements
  return null;
};
