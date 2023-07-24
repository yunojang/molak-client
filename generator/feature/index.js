/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */

// const path = require("path");
// const fs = require("fs");

// // If the resolve function meets the absolute path, the previous path is ignored
// const featureDir = path.resolve(process.cwd(), "src/features");
// const features = fs.readdirSync(featureDir);

const feature_type = {
  default: 'Default',
  query: 'Query',
};

const makeAddAction = ({ templateFile, path, ...config }) => {
  const templateDir = 'generator/feature';
  templateFile = templateFile[0] === '/' ? templateFile : `/${templateFile}`;

  const featureDir = 'src/features/{{camelCase name}}';
  path = path[0] === '/' ? path : `/${path}`;

  return {
    ...config,
    type: 'add',
    path: featureDir + path,
    templateFile: templateDir + templateFile,
  };
};

module.exports = {
  decription: 'New feature generator',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select your feature template type',
      choices: [...Object.values(feature_type)],
    },
    { type: 'input', name: 'name', message: 'Feature Name:' },
  ],
  actions: answers => {
    // const routeName = "{{pascalCase name}}Route";
    // const hookName = "use{{pascalCase name}}";
    let actions = [
      makeAddAction({
        templateFile: 'index.ts.hbs',
        path: '/index.ts',
      }),
      makeAddAction({
        templateFile: 'route-index.tsx.hbs',
        path: '/routes/index.tsx',
      }),
      makeAddAction({
        templateFile: 'Home.tsx.hbs',
        path: '/routes/Home.tsx',
      }),
      makeAddAction({
        templateFile: 'component.tsx.hbs',
        path: '/components/{{pascalCase name}}.tsx',
      }),
    ];

    if (answers.type === feature_type.query) {
      actions = [
        ...actions,
        makeAddAction({
          templateFile: 'types.ts.hbs',
          path: '/types/index.ts',
        }),
        makeAddAction({
          templateFile: 'query.ts.hbs',
          path: '/api/get{{pascalCase name}}.ts',
        }),
      ];
    }

    return actions;
  },
};
