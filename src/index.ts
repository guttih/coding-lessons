import app from './App';


const PORT = 7777;

app.listen(PORT, () => {
    /* tslint:disable */
    console.info(`Express server listening on http://localhost:${PORT}`);
    console.info(`Available api calls can be found here: http://localhost:${PORT}/api`);
    /* tslint:enable */
});