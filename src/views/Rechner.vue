<template>
  <div>
    <div class="grid-container">
      <div class="grid-display">
        <input
          :value="ergebnis"
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
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.CE"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="C"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.C"
          @calc-button-click="CalcButtonClick"
        >
        </CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="<"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.B"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="/"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.GETEILT"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="7"
          :type="1"
          :op="globals.OP.NOOP"
          :value="7"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="8"
          :type="1"
          :op="globals.OP.NOOP"
          :value="8"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="9"
          :type="1"
          :oop="globals.OP.NOOP"
          :value="9"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="*"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.MAL"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="4"
          :type="1"
          :op="globals.OP.NOOP"
          :value="4"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="5"
          :type="1"
          :op="globals.OP.NOOP"
          :value="5"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="6"
          :type="1"
          :op="globals.OP.NOOP"
          :value="6"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="-"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.MINUS"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="1"
          :type="1"
          :op="globals.OP.NOOP"
          :value="1"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="2"
          :type="1"
          :op="globals.OP.NOOP"
          :value="2"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="3"
          :type="1"
          :op="globals.OP.NOOP"
          :value="3"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="+"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.PLUS"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="+/-"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.MINUSSIGN"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="0"
          :type="1"
          :op="globals.OP.NOOP"
          :value="0"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text=","
          :type="2"
          :op="globals.OP.POINT"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
      <div class="grid-item">
        <CalcButton
          text="="
          :type="2"
          :op="globals.OP.EQUALS"
          @calc-button-click="CalcButtonClick"
        ></CalcButton>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { globals } from "../common/globals.js";
// eslint-disable-next-line no-unused-vars
import { globalStore } from "../common/globals.js";
import CalcButton from "../components/buttons/CalcButton";

export default {
  name: "Rechner",
  components: { CalcButton },
  data: function() {
    return {
      globals,
      ergebnis: 0,
      rechnung: "",
      value: 0
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    CalcButtonClick(event) {
      let type = event.target.getAttribute("type");
      let op = event.target.getAttribute("op");
      if (type.toString() === globals.BTNTYPE.ZAHL.toString()) {
        this.value = event.target.getAttribute("value");
        console.log("Hole neuen Value: " + this.value)
      }

      switch (type.toString()) {
        case globals.BTNTYPE.ZAHL.toString():
          console.log("Zahl wurde gedrückt");
          if (this.ergebnis.toString() === "0") {
            this.ergebnis = this.value;
          } else {
            this.ergebnis = this.ergebnis + this.value;
          }
          break;

        case globals.BTNTYPE.FUNKTION.toString():
          console.log("Funktion wurde gedrückt");
          switch (op.toString()) {
            case globals.OP.CE.toString():
              console.log("CE");
              this.ergebnis = "0";
              this.rechnung = "";
              this.value = 0;
              break;
            case globals.OP.C.toString():
              console.log("C");
              this.ergebnis = "0";
              this.value = 0;
              break;
            default:
              break;
          }
          break;


        default:
          console.log("default");
          break;
      }

      console.log("nach/ergebnis: " + this.ergebnis);
      console.log("type: " + event.target.getAttribute("type"));
      console.log("op " + event.target.getAttribute("op"));
      console.log("value " + event.target.value);
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
