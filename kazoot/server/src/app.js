// @flow

import express from 'express';
import taskRouter from './kazoot-router';

/**
 * 
 * Express application.
 */
const app: express$Application<> = express();

app.use(express.json());

// Since API is not compatible with v1, API version is increased to v2
app.use('/api/v2', taskRouter);

app.get('/api/v2/1', (req, res) => {
    res.send('Hello');
})

export default app;
