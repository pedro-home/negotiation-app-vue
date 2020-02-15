<template>
  <b-tabs type="is-toggle" expanded>
    <b-tab-item label="Employer-Tab">
      <Offer
        :text="textEmployer"
        :is-active="valueEmployer === null"
        :on-submit="saveEmployerOffer"
      />
    </b-tab-item>
    <b-tab-item label="Employee-Tab">
      <Offer
        :text="textEmployee"
        :is-active="valueEmployee === null"
        :on-submit="saveEmployeeOffer"
      />
    </b-tab-item>
  </b-tabs>
</template>

<script>
import Offer from '../../components/Offer'
import { WEATHER_API } from './constants'

export default {
  data: () => {
    return {
      textEmployer: 'Enter maximum salary',
      textEmployee: 'Enter minimum salary',
      valueEmployer: null,
      valueEmployee: null,
    }
  },
  methods: {
    saveEmployerOffer(value) {
      this.valueEmployer = parseFloat(value)
      this.validateResult()
    },
    saveEmployeeOffer(value) {
      this.valueEmployee = parseFloat(value)
      this.validateResult()
    },
    validateResult() {
      if (!this.valueEmployer || !this.valueEmployee) {
        // Still waiting for both to answer
        return
      }

      // Fetch temperature from API
      this.fetchTemperature().then((temperature) => {
        const message = `Maximum offer was: ${this.valueEmployer}<br>Minimum expected salary was: ${this.valueEmployee}<br>Current temperature: ${temperature} °C`

        if (this.valueEmployee <= this.valueEmployer) {
          // Show success dialog
          this.$buefy.dialog.alert({ title: 'Success!', message })
          return
        }

        // Show failure dialog
        this.$buefy.dialog.alert({ title: 'Failure!', message })
      })
    },
    async fetchTemperature() {
      let temperature
      try {
        temperature = await fetch(WEATHER_API)
          .then((resp) => {
            // Validate response
            if (!resp.ok) {
              return Promise.reject(new Error(resp.statusText))
            }

            return resp.json()
          })
          .then(({ main: { temp } }) => temp)
      } catch (e) {
        temperature = 'Error'
      }

      return temperature
    },
  },
  components: {
    Offer,
  },
}
</script>
