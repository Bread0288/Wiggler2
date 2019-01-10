/* [Routing]: make response on request ======== */
module.exports = (app) => {
        
    app.get('/', () => {
        console.log('loaded index.js');
    });
}
