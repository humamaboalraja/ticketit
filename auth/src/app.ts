import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

// Route handlers
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signupRouter } from './routes/signup';
import { signoutRouter } from './routes/signout';

// Error handler
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();

// Trust traffic as being secured even if it is coming a proxy
app.set('trust proxy', true);
app.use(json());

app.use(
   cookieSession({
      signed: false,
      secure: true
   })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.all('*', async (req, res) => {
   throw new NotFoundError();
});

app.use(errorHandler);

export { app }