/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'utility',
          'layer',
          'apply',
          'plugin',
          'custom-variant',
          'theme',
        ],
      },
    ],
    'no-descending-specificity': null,
    'at-rule-no-deprecated': null,
  },
};
