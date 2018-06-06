// Fixes openpgp.js in react-native

// Tries to detect IE11 using userAgent and fails if undefined
navigator.userAgent = 'react-native';

// Uses lots of console.assert which is undefined in RN
console.assert = (assertion) => {
  if (!assertion) {
    console.log('console.assert assertion failed');
  }
};

export default require('openpgp');
