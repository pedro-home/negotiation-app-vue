<template>
  <div v-if="isActive">
    <b-field>
      <b-input
        v-model="inputValue"
        type="number"
        :placeholder="text"
        required
        validation-message="Invalid number"
      ></b-input>
    </b-field>
    <b-button :disabled="inputValue===''" @click="() => onSubmit(inputValue)">Submit</b-button>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    text: {
      type: String,
      required: true,
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    inputValue: '',
  }),
}
</script>
