<template>
  <q-page class="flex flex-center">
    <select-region
      @input="regionSelected = $event"
      :options="regions"
      option-label="name"
      label="trest"
    />
  </q-page>
</template>

<script>
import SelectRegion from '../components/select'
export default {
  components: {
    SelectRegion
  },
  data: () => ({
    regions: [],
    regionSelected: 'null'
  }),
  created() {
    this.getRegions()
  },
  methods: {
    async getRegions() {
      let regions = await this.$axios.get('http://localhost:3000/region')
      .then(res => res.data)
      .catch(error => console.error(error))
      regions.forEach(region => {
        region['name'] = `${region['name']} (${region['ddd']})`
      })
      this.regions = regions
    }
  },
}
</script>
