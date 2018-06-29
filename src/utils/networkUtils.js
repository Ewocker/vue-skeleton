/**
 * [isOnLine description]
 * @type {Boolean}
 */
export const isOnLine = navigator.onLine

/**
 * [watchOnLineUpdate description]
 * @param  {fuction} onLineStatusAction  []
 * @param  {fuction} offLineStatusAction []
 * @return {none}                        []
 */
export const watchOnLineUpdate = (onLineStatusAction, offLineStatusAction) => {
  window.addEventListener('online', onLineStatusAction)
  window.addEventListener('offline', offLineStatusAction)
}

/**
 * [to description]
 * @param  {Promise} promise [description]
 * @return {Object}         [description]
 */
export const to = (promise) => {
  return promise.then(data => {
    return {
      e: null,
      data
    }
  }).catch(e => {
    return {
      e,
      data: null
    }
  })
}
