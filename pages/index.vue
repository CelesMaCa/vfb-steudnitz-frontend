<template>
  <div class="container">
    <NuxtLogo />
    <div v-for="hauptseiten in hauptseitens" v-bind:key="hauptseiten.id">
      <h1 class="title"> {{ hauptseiten.HTitel }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { hauptseitenQuery } from '../graphql/query.js'

export default {
  data() {
    return {
      hauptseitens:[],
    }
  },
  apollo: {
    hauptseitens: {
      query: hauptseitenQuery
    }
  }

}
</script>
