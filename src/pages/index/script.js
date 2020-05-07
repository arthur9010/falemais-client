import SelectRegion from '../../components/select'
import InputMinutes from '../../components/input'
export default {
  components: {
    SelectRegion,
    InputMinutes
  },
  data: () => ({
    show: false,
    regions: [],
    originSelected: {},
    destinationRegion: {},
    minutes: 0,
  }),
  created() {
    this.getRegions()
  },
  methods: {
    calculate() {
        console.log(this.reg)
    },
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