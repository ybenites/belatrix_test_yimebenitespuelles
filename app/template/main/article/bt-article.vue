<template>
<article class="article">
  <exchange-rates-application></exchange-rates-application>
</article>
</template>

<script>
import ExchangeRatesApplication from './exchange-rates-application.vue';


export default {
  methods: {
    url() {
      return window.location.href
    },
    isMobile() {
      return window.isMobile
    }
  },
  components: {
    'exchange-rates-application': ExchangeRatesApplication
  }
}
</script>
