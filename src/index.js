const startFunc = require('./startFunc');
const initFunc = require('./init')

const params = initFunc(process.argv);
console.log('init params: ', params)

startFunc(params.count, params.message);