import { Link } from 'react-router-dom';
import React from 'react';
import { useStore } from 'effector-react';

import { AuthPage } from './auth-page';
import { InputFiled } from '../components/input-field';
import { SubmitBtn } from '../components/submit-btn';

import {
  $username,
  $email,
  $password,
  asyncSignUp,
  onChangeUserName,
  onChangeEmail,
  onChangePassword,
} from './model';

const handleSubmit = (username, email, password) => (e) => {
  e.preventDefault();
  asyncSignUp({ username, email, password });
};

export const SignUp = () => {
  const username = useStore($username);
  const email = useStore($email);
  const password = useStore($password);
  const isLoading = useStore(asyncSignUp.pending);

  return (
    <AuthPage title="Sign Up">
      <p className="text-xs-center">
        <Link to="/login">Have an account?</Link>
      </p>

      <form onSubmit={handleSubmit(username, email, password)}>
        <fieldset>
          <InputFiled
            placeholder="Username"
            value={username}
            onChange={onChangeUserName}
          />

          <InputFiled
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />

          <InputFiled
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />

          <SubmitBtn disabled={isLoading}>Sign in</SubmitBtn>
        </fieldset>
      </form>
    </AuthPage>
  );
};
