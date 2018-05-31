// Fixes openpgp.js in react-native

// Tries to detect IE11 using userAgent and fails if undefined
navigator.userAgent = 'react-native';

// Uses lots of console.assert which is undefined in RN
console.assert = (assertion) => {
  if (!assertion) {
    console.log('console.assert assertion failed');
  }
};

// We need to fake the window.crypto, because the way openpgp.js detects node is by checking if window is undefined
const nodeCrypto =  require('crypto');
window.crypto = {};
window.crypto.getRandomValues = (buf) => {
  const bytes = nodeCrypto.randomBytes(buf.length);
  buf.set(bytes);
};

export default require('openpgp');
