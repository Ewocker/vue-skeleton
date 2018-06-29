// Deprecate in vuex-loading see https://www.npmjs.com/package/vuex-loading
// import { createActionHelpers } from 'vuex-loading'
// export const { startLoading, endLoading } = createActionHelpers({ moduleName: 'loading' })

// This is a re-implementation of  old vuex-loading (vue-wait) func startLoading
export const wait = async (dispatch, type, fn) => {
  dispatch('wait/start', type, { root: true })
  const result = await fn()
  dispatch('wait/end', type, { root: true })
  return result
}
