// @ts-check
import js from '@eslint/js';
import {
    configs as tsEslintConfigs,
    config as tsEslintConfig,
} from 'typescript-eslint';
import {
    configs as angularConfigs,
    processInlineTemplates,
} from 'angular-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tsEslintConfig(
    {
        files: ['**/*.ts'],
        extends: [
            js.configs.recommended,
            ...tsEslintConfigs.recommended,
            ...tsEslintConfigs.stylistic,
            ...angularConfigs.tsRecommended,
            eslintPluginPrettierRecommended,
        ],
        processor: processInlineTemplates,
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        extends: [
            ...angularConfigs.templateRecommended,
            ...angularConfigs.templateAccessibility,
        ],
        rules: {},
    },
);
