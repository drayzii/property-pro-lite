/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import App from './App';

it('Should render', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
