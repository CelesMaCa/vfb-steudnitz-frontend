<template>
  <div class="container">
    <table broder="0">
      <tr>
        <td><Logo /></td>
        <div v-for="hauptseiten in hauptseitens" v-bind:key="hauptseiten.id">
          <td> {{ hauptseiten.HTitel }}</td>
        </div>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { hauptseitenQuery } from '../graphql/query.js'

export default {
  layout: "default",
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
