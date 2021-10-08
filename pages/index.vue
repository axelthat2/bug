<template>
  <Tutorial />
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      blog: {
        title: ""
      }
    }
  },
  head() {
    return {
      title: this.blog.title
    }
  }
})
</script>
