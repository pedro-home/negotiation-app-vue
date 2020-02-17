<template>
  <div>
    <b-field>
      <b-input v-model="inputValue" :placeholder="text" @input="validate"></b-input>
    </b-field>
    <b-button :disabled="isDisabled" @click="() => onSubmit(inputValue)">Submit</b-button>
  </div>
</template>

<script>
import { VALIDATE_NUMBER_REGEX } from './constants'

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  methods: {
    validate: function() {
      // Enables submit button according to the input value validation
      this.isDisabled = !this.inputValue.match(VALIDATE_NUMBER_REGEX)
    },
  },
  data: () => ({
    inputValue: '',
    isDisabled: true,
  }),
}
</script>
