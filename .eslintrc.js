module.exports = {
  extends: [
    'ryansobol/es6',
    'ryansobol/node'
  ],

  rules: {
    'id-length': [2, { exceptions: ['a', 'b', 'i', 'j', 't'] }],
    'no-console': 0
  }
};
