/*
babel-preset-google-apps-script is a Babel preset for the
Google Apps Script environment.
Copyright (C) 2018  Andrew Miller

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

You can contact me via email at andrew@andrewmiller.business.
*/

module.exports = function() {
  return {
    plugins: [


      // ES3

      '@babel/transform-member-expression-literals',
      '@babel/transform-property-literals',
      '@babel/transform-reserved-words',


      // // ES5

      '@babel/transform-property-mutators',


      // // ES2015

      '@babel/transform-arrow-functions',
      '@babel/transform-block-scoped-functions',
      '@babel/transform-block-scoping',
      '@babel/transform-classes',
      '@babel/transform-computed-properties',
      '@babel/transform-destructuring',
      '@babel/transform-duplicate-keys',
      '@babel/transform-for-of',
      '@babel/transform-function-name',
      '@babel/transform-instanceof',
      '@babel/transform-literals',
      '@babel/transform-new-target',
      '@babel/transform-object-super',
      '@babel/transform-parameters',
      '@babel/transform-shorthand-properties',
      '@babel/transform-spread',
      '@babel/transform-sticky-regex',
      '@babel/transform-template-literals',
      '@babel/transform-typeof-symbol',
      '@babel/transform-unicode-regex',


      // ES2016

      '@babel/transform-exponentiation-operator',


      // // ES2017

      '@babel/transform-async-to-generator',


      // // ES2018

      '@babel/proposal-async-generator-functions',
      '@babel/transform-dotall-regex',
      '@babel/proposal-object-rest-spread',
      '@babel/proposal-optional-catch-binding',
      '@babel/proposal-unicode-property-regex',


      // // Modules

      // '@babel/transform-modules-amd',
      '@babel/transform-modules-commonjs',
      // '@babel/transform-modules-systemjs',
      // '@babel/transform-modules-umd',


      // // Experimental

      '@babel/proposal-class-properties',
      ['@babel/proposal-decorators',{ decoratorsBeforeExport: true }],
      '@babel/proposal-do-expressions',
      '@babel/proposal-export-default-from',
      '@babel/proposal-export-namespace-from',
      '@babel/proposal-function-bind',
      '@babel/proposal-function-sent',
      '@babel/proposal-logical-assignment-operators',
      '@babel/proposal-nullish-coalescing-operator',
      '@babel/proposal-numeric-separator',
      '@babel/proposal-optional-chaining',
      ['@babel/proposal-pipeline-operator',{ proposal: 'minimal' }],
      '@babel/proposal-throw-expressions',
      

      // Other

      '@babel/transform-regenerator'
    ].reverse()
  };
};
