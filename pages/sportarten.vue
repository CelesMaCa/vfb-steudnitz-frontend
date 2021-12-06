<template>
  <div>
    <div v-for="sportarten in sportartens" v-bind:key="sportarten.id">
      <b-card v-bind:title="sportarten.STitel">
        <b-card-text>
        {{ sportarten.Kurzbeschreibung }}
        </b-card-text>

        <!-- <b-link href="#" class="card-link">Another link</b-link> -->
      </b-card>
    </div>  
  </div>
</template>
<script lang="ts">
import { sportartenQuery } from '../graphql/query.js'

export default {
  data() {
    return {
      sportartens:[],
    }
  },
  apollo: {
    sportartens: {
      query: sportartenQuery
    }
  }

}
</script>