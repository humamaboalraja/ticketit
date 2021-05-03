module.exports = {
   root: true,
   plugins: ['eslint-plugin-cypress'],
   extends: ['plugin:cypress/recommanded'],
   env: {'cypress/globals': true },
}