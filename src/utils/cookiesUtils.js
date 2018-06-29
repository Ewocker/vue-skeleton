import Cookies from 'js-cookie'

/**
 * [apiToken description]
 * @type {String}
 */
export const apiToken = Cookies.get('api_token')

/**
 * [askApiToken description]
 * @return {none} [description]
 */
export function askApiToken() {
  Cookies.set('api_token', prompt(), {expires: 1 / (24)})
}

/**
 * [setApiToken description]
 * @param {String} token    [description]
 * @param {} duration [description]
 */
export function setApiToken(token, day) {
  Cookies.set('api_token', token, {expires: day})
}
