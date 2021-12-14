<template>
  <div v-if="!$apollo.loading">
    <h1>{{ sportartens[0].STitel }}</h1>
    <div v-for="mannschaften in sportartens[0].mannschafts" v-bind:key="mannschaften.id">
      <b-card no-body>
        <b-card-body>
          <b-row no-gutters>
            <b-col md="2">
              <!-- TODO: URL-Adresse als Variable hinterlegen -->
              <b-card-img v-bind:src="'http://localhost:1337' + mannschaften.Cover.url"
                v-bind:alt="mannschaften.Cover.caption" img-left></b-card-img>
            </b-col>
            <b-col md="10">
              <div>
                <b-link :to="{ path: '/' + sportartens[0].hauptseiten.HName + '/' + sportartens[0].SName + '/' + mannschaften.MName }">
                  <h2>{{ mannschaften.MTitel }}</h2>
                </b-link>
              </div>
              <b-card-text>
                {{ mannschaften.Kurzbeschreibung }}
              </b-card-text>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </div>
  </div>  
</template>
<script lang="ts">
import { sportartenMannschaftenQuery } from '../../graphql/query.js'

export default {
  data() {
    return {
      routeSName: this.$route.params.SName,
      sportartens:[],
    }
  },
  apollo: {
    sportartens: {
      query: sportartenMannschaftenQuery,
      variables() {
        return{
          name: this.routeSName || '',
        }
      }
    }
  }

}
</script>