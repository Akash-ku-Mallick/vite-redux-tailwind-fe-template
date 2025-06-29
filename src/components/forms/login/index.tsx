import React from 'react';
import { useForm } from 'react-hook-form';
import { type LoginFormValues, loginSchema } from '../../../schemas/login.schema';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login Data:', data);
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
        {errors?.email && <p className="text-danger">{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password')}
          className="form-control"
        />
        {errors?.password && <p className="text-danger">{errors.password.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default LoginForm;
