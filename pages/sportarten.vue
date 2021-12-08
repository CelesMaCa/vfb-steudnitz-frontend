<template>
  <div>
    <div v-for="sportarten in sportartens" v-bind:key="sportarten.id">
      <b-card no-body>
        <b-card-body>
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img v-bind:src="'http://localhost:1337' + sportarten.Cover.url"
                v-bind:alt="sportarten.Cover.caption" img-left></b-card-img>
            </b-col>
            <b-col md="10">
              <b-link :to="{ path: sportarten.hauptseiten.HName, params: {STitel: sportarten.SName} }">
                <h2>{{ sportarten.STitel }}</h2>
              </b-link>
              <b-card-text>
                {{ sportarten.Kurzbeschreibung }}
              </b-card-text>
            </b-col>
          </b-row>
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