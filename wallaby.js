export default function () {
  return {
    files: [
      'package.json',   // IMPORTANT
      'src/**/*.js' // adjust if required
    ],

    tests: [
      'test/**/*.spec.js' // adjust if required
    ],

    env: {
      type: 'node'
    },
    
    workers: { restart: true }  // IMPORTANT
  };
};
