<template>
  <div v-if="!$apollo.loading">
    <div v-for="sportarten in sportartens" v-bind:key="sportarten.id">
      <b-card no-body>
        <b-card-body>
          <b-row no-gutters>
            <b-col md="2">
              <!-- TODO: URL-Adresse als Variable hinterlegen -->
              <b-card-img v-bind:src="'http://localhost:1337' + sportarten.Cover.url"
                v-bind:alt="sportarten.Cover.caption" img-left></b-card-img>
            </b-col>
            <b-col md="10">
              <div v-if="sportarten.mannschafts.length > 1">
                <b-link :to="{ path: '/' + sportarten.hauptseiten.HName + '/' + sportarten.SName }">
                  <h2>{{ sportarten.STitel }}</h2>
                </b-link>
              </div>
              <div v-else>
                <b-link :to="{ path: '/' + sportarten.hauptseiten.HName + '/' + sportarten.SName + '/' + sportarten.mannschafts[0].MName }">
                  <h2>{{ sportarten.STitel }}</h2>
                </b-link>
              </div>
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
import { sportartenQuery } from '../../graphql/query.js'

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