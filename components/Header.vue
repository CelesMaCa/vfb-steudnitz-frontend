<template>
  <div class="container">
    <table broder="0">
      <tr>
        <td><Logo /></td>
        <div v-for="hauptseiten in hauptseitens" v-bind:key="hauptseiten.id">
          <td>
            {{ hauptseiten.HTitel }}
            <div v-if="hauptseiten.HTitel === 'Sportarten'">
              <div v-for="sportarten in sportartens" v-bind:key="sportarten.id">
                {{ sportarten.STitel}}
                <div v-for="mannschaft in sportarten.mannschafts" v-bind:key="mannschaft.id">
                {{ mannschaft.MTitel}}
                </div> <!-- End v-for Mannschaften -->
              </div> <!-- End v-for Sportarten -->
            </div> <!-- End v-if -->
          </td>
        </div> <!-- End v-for Hauptseiten -->
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { hauptseitenQuery, sportartenQuery } from '../graphql/query.js'

export default {
  data() {
    return {
      hauptseitens:[],
      sportartens:[],
    }
  },
  apollo: {
    hauptseitens: {
      query: hauptseitenQuery
    },
    sportartens: {
      query: sportartenQuery
    }
  }

}
</script>
