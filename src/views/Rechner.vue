<template>
  <div>
    <div class="grid-container">
      <div class="grid-display">
        <input
          v-model="ergebnis"
          class="result"
          type="text"
          name="Ergebnis"
          readonly
        />
      </div>
      <div class="grid-rechnung">
        <input v-model="rechnung" class="rechnung" name="Rechnung" readonly />
      </div>
      <div class="grid-item">
        <CalcButton
          text="CE"
          :btntype="globals.BTNTYPE.FUNKTION"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="C" @calc-button-click="CalcButtonClick"> </CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="<" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="/" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="7" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="8" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="9" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="*" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="4" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="5" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="6" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="-" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="1" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="2" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="3" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="+" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="+/-"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="0" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="," @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton text="=" @calc-button-click="CalcButtonClick"></CalcButton>
      </div>
    </div>
  </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
import { globals } from "../common/globals.js";
import { globalStore } from "../main.js";
import CalcButton from "../components/buttons/CalcButton";

export default {
  name: "Rechner",
  components: { CalcButton },
  data: function() {
      return {
          ergebnis: globalStore.gErgebnis,
          zahl: globalStore.gZahl,
          op: globalStore.gOp,
          rechnung: globalStore.gRechnung,
          test : globals.BTNTYPE.FUNKTION
      };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    CalcButtonClick(event) {
      console.log("Rechner.vue");
      console.log(event.target.value);
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: blue;
  padding: 5px;
  width: fit-content;
}
.grid-display {
  background-color: white;
  border: 3px solid black;
  grid-column: 1 / 5;
  grid-row: 1;
  padding: 1px;
}
.grid-rechnung {
  background-color: white;
  border: 3px solid black;
  grid-column: 1 / 5;
  grid-row: 2;
  padding: 1px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 2px;
  font-size: 30px;
  text-align: center;
}
.result {
  width: 99%;
  heigth: 100%;
  font-size: 24px;
  font-family: monospace;
  text-align: right;
}
.rechnung {
  width: 99%;
  heigth: 100%;
  font-size: 12px;
  font-family: monospace;
  text-align: right;
}
</style>
