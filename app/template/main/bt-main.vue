<template>
<main :class="identifier">
  <bt-header></bt-header>
  <bt-article></bt-article>
</main>
</template>

<script>
import {
  mapState
} from 'vuex'

import btHeader from "./header/bt-header.vue";
import btArticle from './article/bt-article.vue'

export default {
  components: {
    'bt-header': btHeader,
    "bt-article": btArticle
  },
  computed: mapState(['identifier'])
}
</script>
