// eslint-disable-next-line @typescript-eslint/no-var-requires
let createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      let hasModified = false;

      const newRule = {
        ...rule,
        oneOf: rule.oneOf.map((oneOfRule) => {
          if (oneOfRule.test && oneOfRule.test.toString().includes('svg')) {
            hasModified = true;
            const test = oneOfRule.test.toString().replace('|svg', '');
            return { ...oneOfRule, test: new RegExp(test) };
          } else {
            return oneOfRule;
          }
        }),
      };

      if (hasModified) {
        newRule.oneOf.unshift({
          test: /\.svg$/,
          exclude: /node_modules/,
          use: [
            {
              loader: '@svgr/webpack',
            },
          ],
        });
      }

      return newRule;
    } else {
      return rule;
    }
  });

  return config;
};
