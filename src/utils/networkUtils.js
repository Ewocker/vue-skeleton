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
