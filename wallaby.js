export default function () {
  return {
    files: [
      'package.json',
      'src/**/*.js',
			'test/setup.js',
    ],
    tests: [
      'test/**/*.spec.js'
    ],
    env: {
      type: 'node'
    },
		setup (w) {
      console.log('setup');
			const path = require('path');
			w.testFramework.addFile(path.resolve(process.cwd(), 'test/setup.js'));
		},
    workers: { restart: true }
  };
};
