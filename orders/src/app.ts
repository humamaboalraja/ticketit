import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

// Routers
import { deleteOrderRouter } from './routes/delete';
import { showOrderRouter } from './routes/show';
import { indexOrderRouter } from './routes/index';
import { newOrderRouter } from './routes/new';

// Error handler
import { errorHandler, NotFoundError, currentUser } from "@ticketit/common";

const app = express();

// Trust traffic as being secured even if it is coming a proxy
app.set('trust proxy', true);
app.use(json());

app.use(
   cookieSession({
      signed: false,
      secure: process.env.NODE_ENV !== 'test'
   })
);

// Auth middleware protection
app.use(currentUser);

// Adding Routers
app.use(newOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);


app.all('*', async (req, res) => {
   throw new NotFoundError();
});

app.use(errorHandler);

export { app }