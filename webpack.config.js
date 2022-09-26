const federations = require('cond-app-scripts/federations');

module.exports = federations({
    exposes: {
        './routes': './src/app/routes'
    }
});
