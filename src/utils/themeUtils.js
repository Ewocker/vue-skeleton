import { defaultTheme } from '@/plugins/vuetify'
import vuetifyColors from 'vuetify/es5/util/colors'

export const colors = vuetifyColors

/**
 * [updateTheme description]
 * merge new theme with existing theme
 * @param  {Object} context [Vue object, 'this']
 * @param  {Object} theme   [object theme]
 * @return {}         [description]
 */
export const updateTheme = (context, theme) => {
  try {
    for (let key of Object.keys(theme)) {
      context.$vuetify.theme[key] = theme[key]
    }
  } catch (e) {
    console.log('Fail to update theme with error:', e)
  }
}

export const useDefaultTheme = (context) => {
  updateTheme(context, defaultTheme)
}
