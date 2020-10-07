console.log('app is loading');

// you get SIGINT when you do pm2 stop
process.on('SIGINT', () => {
    console.log('Received SIGINT');
    process.exit(0);
  });

setInterval(() => console.log(new Date()),1000)