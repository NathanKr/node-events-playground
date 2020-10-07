console.log('app is loading');

// you get SIGINT when you do pm2 stop
// SIGINT exist on linux not windows
process.on('SIGINT', () => {
    console.log('Received SIGINT');
    /*If your application does not exit by itself before 1.6s (customizable)
     it will receive a SIGKILL signal to force the process exit.*/
     process.exit(0)
  });

setInterval(() => console.log(new Date()),1000)