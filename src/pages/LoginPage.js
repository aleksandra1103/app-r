import React, { Component } from 'react';

const LoginPage = () => {
  return (
    <div>
      <label htmlForm=''>Podaj login<input type='text' /></label>
      <label htmlForm=''>Podaj hasło<input type='password' /></label>
      <button>Zaloguj</button>
    </div>

  );
}

export default LoginPage;