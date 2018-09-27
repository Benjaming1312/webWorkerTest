console.log('my worker')
var myWorker = new Worker("worker.js");
myWorker.postMessage('hello world')
myWorker.onmessage = function(e) {
  console.log('Message received from worker', e);
};