import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    ...compat.plugins('@stylistic'),
    perfectionist.configs['recommended-natural'],
    stylistic.configs.customize({
        indent: 4,
    }),
    {
        rules: {
            'no-var': 'error',
            'yoda': 'error',
            'eqeqeq': 'error',
            'camelcase': 'error',
            'no-alert': 'error',
            'no-console': 'error',
        }
    }
]

export default eslintConfig
