function callback(message, callback) {
    callback(message);
  setTimeout(() => {
    callback(`Callback: ${message}`);
  }, 1000);
}

callback('Hello, World!', (result) => {
  console.log(result);
  return result
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise: Hello, World!');
  }, 1000);
});