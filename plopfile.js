const componentGenerator = require('./generator/component');
const featureGenerator = require('./generator/feature');
const queryGenerator = require('./generator/query');

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */

module.exports = function (plop) {
  plop.setGenerator('Component', componentGenerator);
  plop.setGenerator('Feature', featureGenerator);
  plop.setGenerator('Query', queryGenerator);
};
