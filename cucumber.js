const environment = process.env.ENVIRONMENT?.toLowerCase() ?? 'staging';
const worldParameters = require(`./world-params.${environment}.json`);

module.exports = {
    default: {
        publishQuiet: true,
        requireModule: ['ts-node/register'],
        require: ['features/**/*.ts', 'helpers/**/*.ts'],
        worldParameters,
    },
};
