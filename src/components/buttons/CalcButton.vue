<template>
  <button @click="ClickButton($event)" class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "CalcButton",
  props: { text: String, btntype: String },
  methods: {
    ClickButton(event) {
      console.log(event.currentTarget.text);

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
  heigth: 100%;
}

.button:hover {
  background: lightgray;
  color: #fff;
}
</style>
