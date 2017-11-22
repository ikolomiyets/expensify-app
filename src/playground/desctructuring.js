import React from 'react';
import { createStore } from 'redux';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

import '../index.html';

const person = {
  name: 'Andrew',
  age: 26,
  location: {
      city: 'Philadelphia',
      temp: 92
  }
};

// Destructuring examples
// Default fallback value
const { name = 'Igor', age, location } = person;
// Renaming
const { city, temp: temperature } = location;

console.log(`${name} is ${age}`);
console.log(`It is ${temperature} is ${city}`);