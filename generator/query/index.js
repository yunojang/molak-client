/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */

const path = require('path');
const fs = require('fs');

// // If the resolve function meets the absolute path, the previous path is ignored
const featureDir = path.resolve(process.cwd(), 'src/features');
const features = fs.readdirSync(featureDir);

const queryType = {
  query: 'Query',
  mutate: 'Mutate',
  optimical: 'Optimical Mutate',
};

const methodName = {
  get: 'get',
  create: 'post',
  update: 'put',
  delete: 'delete',
};

const GLOBAL_STR = 'Global Query';

module.exports = {
  description: 'Query Generator',
  prompts: [
    {
      type: 'list',
      name: 'feature',
      message: 'What kind of feature?',
      choices: [GLOBAL_STR, ...features],
    },
    {
      type: 'list',
      name: 'queryType',
      message: 'Select your query type',
      choices: [...Object.values(queryType)],
    },
    {
      type: 'list',
      name: 'action',
      message: 'Select your action type',
      choices: ['get', 'create', 'update', 'delete'],
    },
    { type: 'input', name: 'name', message: 'Data Name:' },
  ],
  actions(answer) {
    const isGlobal = answer.feature === GLOBAL_STR;

    const hookName = '{{lowerCase action}}{{pascalCase name}}';
    const path = `src/${
      isGlobal ? '' : 'features/' + answer.feature + '/'
    }api/${hookName}.ts`;

    const makeAddAction = (templateFilename, data = {}) => {
      return {
        type: 'add',
        path,
        templateFile: `generator/query/${templateFilename}`,
        data,
      };
    };

    const actions = [];

    switch (answer.queryType) {
      case queryType.query:
        actions.push(makeAddAction('useGet.hbs'));
        break;
      case queryType.mutate:
        actions.push(
          makeAddAction('useUpdate.hbs', { method: methodName[answer.action] }),
        );
        break;
      case queryType.optimical:
        actions.push(
          makeAddAction('useOptimicalUpdate.hbs', {
            method: methodName[answer.action],
          }),
        );
        break;
      default:
        break;
    }

    return actions;
  },
};
