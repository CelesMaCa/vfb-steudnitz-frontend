<template>
<div class="container"  v-if="!$apollo.loading">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <NuxtLink to="/"><b-navbar-brand>VfB Steunditz</b-navbar-brand></NuxtLink>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <div v-for="hauptseiten in hauptseitens" v-bind:key="hauptseiten.id">
          <div v-if="hauptseiten.HTitel === 'Sportarten'">
          <!-- TODO: Integration Sportarten-Hauptseiten-Link -->
            <b-nav-item-dropdown v-bind:text="hauptseiten.HTitel" right>
              <div v-for="sportarten in sportartens" v-bind:key="sportarten.id">
                <div v-if="sportarten.mannschafts.length > 1">
                  <b-dropdown-item :to="{ path: '/' + hauptseiten.HName + '/' + sportarten.SName }">
                    {{ sportarten.STitel}}
                  </b-dropdown-item>
                </div>
                <div v-else>
                  <b-dropdown-item 
                    :to="{ path: hauptseiten.HName + '/' + sportarten.SName + '/' + sportarten.mannschafts[0].MName }">
                    {{ sportarten.STitel}}
                  </b-dropdown-item>
                </div>
              </div>
            </b-nav-item-dropdown>
          </div>
          <div v-else>
            <b-nav-item :to="'/' + hauptseiten.HName">{{ hauptseiten.HTitel }}</b-nav-item>
          </div>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script lang="ts">
import { hauptseitenHeaderQuery, sportartenHeaderQuery } from '../graphql/query.js'

export default {
  data() {
    return {
      hauptseitens:[],
      sportartens:[],
    }
  },
  apollo: {
    hauptseitens: {
      query: hauptseitenHeaderQuery
    },
    sportartens: {
      query: sportartenHeaderQuery
    }
  }

}
</script>