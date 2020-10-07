console.log('app is loading');

process.on('SIGINT', () => {
    console.log('Received SIGINT. Press Control-D to exit.');
  });

setInterval(() => console.log(new Date()),1000)