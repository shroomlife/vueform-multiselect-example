import multiselect from '@vueform/multiselect'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('multiselect', multiselect)
})
