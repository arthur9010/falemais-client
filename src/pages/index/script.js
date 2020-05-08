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
    originRegion: '',
    destinationRegion: '',
    minutes: 0,
    prices: [],
    error: ''
  }),
  created() {
    this.getRegions()
  },
  methods: {
    async calculate() {
      let query = `origin=${this.originRegion['ddd']}&destination=${this.destinationRegion['ddd']}&time=${this.minutes}`
      let resultCalculation = await this.$axios.get('http://localhost:3000/api/plan/calculate?'+query)
      if(resultCalculation.data.error) {
        this.error = resultCalculation.data.message
      } else {
        this.prices = resultCalculation.data.data
        this.error = ''
      }
    },
    async getRegions() {
          let regions = await this.$axios.get('http://localhost:3000/api/region')
          .then(res => res.data)
          .catch(error => console.error(error))
      regions.forEach(region => {
        region['name'] = `${region['name']} (${region['ddd']})`
      })
      this.regions = regions
    }
  },
}