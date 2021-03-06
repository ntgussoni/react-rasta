"use strict";

const ON = true;
const OFF = false;

module.exports = {
  extends: "tslint-sonarts",
  rules: {
    // Bugs
    "no-all-duplicated-branches": ON,
    "no-case-with-or": ON,
    "no-collection-size-mischeck": ON,
    "no-element-overwrite": ON,
    "no-empty-destructuring": ON,
    "no-identical-conditions": ON,
    "no-identical-expressions": ON,
    "no-ignored-initial-value": ON,
    "no-misleading-array-reverse": ON,
    "no-misspelled-operator": ON,
    "no-self-assignment": ON,
    "no-unthrown-error": ON,
    "no-use-of-empty-return-value": ON,
    "no-useless-increment": ON,
    "no-useless-intersection": ON,

    // Code Smell
    "cognitive-complexity": ON,
    "mccabe-complexity": OFF,
    "no-accessor-field-mismatch": ON,
    "no-array-delete": ON,
    "no-big-function": [ON, 300],
    "no-commented-code": ON,
    "no-dead-store": ON,
    "no-duplicate-string": ON,
    "no-duplicated-branches": ON,
    "no-empty-nested-blocks": ON,
    "no-extra-semicolon": ON,
    "no-gratuitous-expressions": ON,
    "no-hardcoded-credentials": ON,
    "no-identical-functions": ON,
    "no-ignored-return": ON,
    "no-inconsistent-return": OFF,
    "no-multiline-string-literals": ON,
    "no-nested-incdec": ON,
    "no-redundant-boolean": ON,
    "no-redundant-parentheses": ON,
    "no-return-type-any": ON,
    "no-same-line-conditional": ON,
    "no-small-switch": ON,
    "no-statements-same-line": ON,
    "no-unconditional-jump": ON,
    "no-unenclosed-multiline-block": ON,
    "no-unused-array": ON,
    "no-useless-cast": ON,
    "no-variable-usage-before-declaration": ON,
    "parameters-max-number": ON,
    "prefer-immediate-return": ON,
    "use-primitive-type": ON,
    "use-type-alias": ON,
  },
};
