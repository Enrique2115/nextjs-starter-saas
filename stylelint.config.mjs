/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['utility', 'layer', 'apply'],
      },
    ],
    'no-descending-specificity': null,
  },
};
