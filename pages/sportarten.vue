<template>
  <div>
    <div v-for="sportarten in sportartens" v-bind:key="sportarten.id">
      <b-card no-body>
        <b-card-body>
          <b-link :to="{ path: sportarten.hauptseiten.HName, params: {STitel: sportarten.SName} }">
            <h2>{{ sportarten.STitel }}</h2>
          </b-link>
          <b-card-text>
            {{ sportarten.Kurzbeschreibung }}
          </b-card-text>
        </b-card-body>
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