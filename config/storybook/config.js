import { configure } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
require('vuetify/dist/vuetify.min.css')

const req = require.context(`../../src/components`, true, /\.stories\.js$/)
const loadStories = () => req.keys().map(path => req(path))

configure(loadStories, module)
