import app from './app';

const port = process.env.PORT || 9080;

app.listen(port);
console.log('Server started successfully! app running on port ', port);