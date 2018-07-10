import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

export const defaultTheme = {
  primary: colors.teal.lighten2,
  secondary: colors.grey.darken1,
  accent: colors.shades.black,
  error: colors.red.accent3,
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
  // main is used as a replacement of primary since vuetify default use primary
  // as selected color for navigation drawer
  main: colors.blue.lighten2,
  other: '#f0c2c2'
}

const register = () => {
  Vue.use(Vuetify, {
    theme: defaultTheme
  })
}

export default register
