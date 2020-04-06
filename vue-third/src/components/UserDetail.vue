<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name {{ name }}</p>
    <button @click="resetName">Reset name</button>
    <button @click="resetNameProp">Reset name</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    resetNameProp: Function
  },
  computed: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    resetName() {
      this.name = "Max";
      this.$emit("nameWasReset", this.name);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
