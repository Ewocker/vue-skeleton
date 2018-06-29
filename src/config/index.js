export const envConfig = {
  development: {
    backend: 'https://sproutlabs-server-dev.herokuapp.com'
  },
  production: {
    backend: 'https://sproutlabs-server-dev.herokuapp.com'
  }
}[process.env.NODE_ENV]

export const appConfig = {
  vueWaitModuleName: 'wait'
}
