# new-webapp
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


> sproutlabs

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## adding service-worker-entry.js
(Man... I know it's a pain... it took me a while... Webpack is a blackbox)
make sure not to let some plugin do stuff on it add option: exclude: /^service-worker/
don't use chunks.
copy file directly to target folder using copy file plugins.
it will be cached as long as sw preach plugins specific location covers it.
