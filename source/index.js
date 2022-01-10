// Core
import dg from 'debug';

// Instruments
import { app } from './server';
import { getServerPort } from './helpers';

const port = getServerPort();
const debug = dg('server');

app.listen(port, () => {
    debug(`Server is up on port ${port}`);
});
