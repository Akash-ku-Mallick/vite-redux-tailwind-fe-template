import React from 'react';
import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterFormValues } from '../../../schemas/register.schema';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Register Data:', data);
    // Submit to API here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email')}
          className="form-control"
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password')}
          className="form-control"
        />
        {errors.password && <p className="text-danger">{errors.password.message}</p>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword')}
          className="form-control"
        />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          {...register('terms')}
          className="form-check-input"
          id="terms"
        />
        <label htmlFor="terms" className="form-check-label">
          I agree to the Terms and Conditions
        </label>
        {errors.terms && <p className="text-danger">{errors.terms.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
