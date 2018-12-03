<template>
<main :class="identifier">
  <st-article></st-article>
</main>
</template>

<script>
import {
  mapState
} from 'vuex'

import stArticle from './article/st-article.vue'

export default {
  components: {
    'st-article': stArticle
  },
  computed: mapState(['identifier'])
}
</script>
