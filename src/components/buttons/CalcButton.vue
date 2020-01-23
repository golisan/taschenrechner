<template>
  <button class="button" @click="onClick($event)">{{ text }}</button>
</template>

<script>
export default {
  name: "CalcButton",
  props: { text: String },
  methods: {
    onClick(event) {
      this.$emit("calc-button-click", event);
    }
  }
};
</script>

<style scoped>
.button {
  display: inline-block;
  text-align: center;
  padding: 10px;
  background: grey;
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  font-family: "Quicksand", sans-serif;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  height: 99%;
}

.button:hover {
  background: lightgray;
  color: #fff;
}
</style>
