const createApp = require('./app');

(async () => {
  const port = process.env.PORT || 3000;
  const app = createApp();
  (await app).listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
  });
})();
