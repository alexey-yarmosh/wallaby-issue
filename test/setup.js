import * as sinon from 'sinon';

const clock = sinon.createSandbox().useFakeTimers({
	now: Date.now(),
	shouldAdvanceTime: true,
	toFake: [ 'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'Date', 'hrtime', 'performance' ],
});
global.clock = clock;
