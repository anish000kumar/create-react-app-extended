'use strict';

const packageJson = require('../package.json');
const definedAliases = packageJson.alias || [];
if (!Array.isArray(definedAliases)) {
  throw new Error('Your aliases declaraction must be an array');
}
const alias = definedAliases.reduce((accum, current) => {
  accum[current.expose] = current.source;
  return accum;
}, {});
module.exports = alias;
