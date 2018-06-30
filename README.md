# Vue-Skeleton

> A basic [Vue.js](https://vuejs.org/) skeleton frontend application using [Vuetify.js](https://vuetifyjs.com/) with simple server with express. Build on top of [vue-pwa-boilerplate](https://github.com/vuejs-templates/pwa).

Vue-Skeleton [Demo](https://vue-skeleton.herokuapp.com/).

---

## Service Worker
> For base feature, see [vue-pwa-boilerplate](https://github.com/vuejs-templates/pwa).
* Service worker web-push notification subscription.
* Simple endpoint for sending notification

---

## Integration with Heroku
Just fork/clone it and connect to a new Heroku project and your application is ready.

---

## Babel Configuration
The babel configuration for this app should transform all the latest ES6 syntax to browser readable ES5 syntax. (see babel preset env and so on)

---

## Basic Tree View
> Only show the one that I think it's important here.
```
├── src
│   ├── App.vue
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── createVue.js
│   ├── data/
│   ├── main.js
│   ├── pages/
│   ├── plugins/
│   ├── router/
│   ├── services/
│   ├── store/
│   ├── styles/
│   └── utils/
└── server.js
```

## Structure
Here are the basic usage and structure of the skeleton

##### src
> src folder contains all the frontend application code.

##### main.js
> This is the entry point for the code where you can check if a user is authenticated to use the application and build the Vue object.

##### createVue.js
> This where the actual Vue object is built. Extracting the logic here so that main.js is only for entry flow control.

##### App.vue
> This is the base UI layout where the highest level components are defined. (Ex. TopBar, NavBar, RouterView, Footer)

##### assets/
> This is the directory where static assets should be placed.

##### components/
> This is the directory where all the single-file-components are placed.

##### config/
> This is the directory where all the in app configurations are stored.

##### data/
> This is the directory where the sample data is store.

##### plugins/
> This is the directory where all the plugins are being defined and configured. It exposes a function to register all plugins which is being called before Vue object creation.

##### router/
> This is the directory where vue-router configuration is store. The router data in this file is formatted to be used for the custom NavDrawer component in src/components/app/NavDrawer. The sample router data there should have enough information for usage.

##### services/
> This is the directory where the external services such as your application backend API should be placed.

[Vuex](https://github.com/vuejs/vuex) with [vue-wait](https://github.com/f/vue-wait) for loading.

##### store/
> This is where VueX store is configured.

##### styles/
> This is where all none component specific style sheet should be place in. Ex

#### Build Setup

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
