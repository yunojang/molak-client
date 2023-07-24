/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */

const path = require('path');
const fs = require('fs');

// If the resolve function meets the absolute path, the previous path is ignored
const featureDir = path.resolve(process.cwd(), 'src/features');
const features = fs.readdirSync(featureDir);

// exports.generator = () => {};

const GLOBAL_STR = 'Global Element';
module.exports = {
  decription: 'UI Component Generator',
  prompts: [
    { type: 'input', name: 'name', message: 'Component Name:' },
    {
      type: 'list',
      name: 'root',
      message: 'What kind of Feature UI will you make?',
      choices: [GLOBAL_STR, ...features],
    },
  ],
  actions: answer => {
    const isGlobal = answer.root === GLOBAL_STR;
    const componentPath = isGlobal
      ? 'src/components/Elements/{{pascalCase name}}'
      : 'src/features/{{pascalCase root}}/components/{{pascalCase name}}';

    const testPath = isGlobal
      ? componentPath
      : `src/features/{{pascalCase root}}/components/__test__`;

    return [
      // index export
      {
        type: 'add',
        path: componentPath + '/index.ts',
        templateFile: 'generator/component/index.ts.hbs',
      },
      // component
      {
        type: 'add',
        path: componentPath + '/{{pascalCase name}}.tsx',
        // data: { test: "plop data" },
        templateFile: 'generator/component/component.tsx.hbs',
      },
      // RTL test
      {
        type: 'add',
        path: testPath + '/{{pascalCase name}}.test.tsx',
        data: { directory: isGlobal ? './' : '../' },
        templateFile: 'generator/component/component.test.tsx.hbs',
      },
      // storybook
      {
        type: 'add',
        path: componentPath + '/{{pascalCase name}}.stories.tsx',
        data: { root: isGlobal ? 'Component' : answer.root },
        templateFile: 'generator/component/component.stories.tsx.hbs',
      },
    ];
  },
};
