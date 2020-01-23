<template>
  <div>
    <div class="grid-container">
      <div class="grid-display">
        <label>
          <input
            :value="ergebnis"
            class="result"
            type="text"
            name="Ergebnis"
            readonly
          />
        </label>
      </div>
      <div class="grid-rechnung">
        <label>
          <input v-model="rechnung" class="rechnung" name="Rechnung" readonly />
        </label>
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
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="<"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.B"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="/"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.GETEILT"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="7"
          :type="globals.BTNTYPE.ZAHL"
          :op="globals.OP.NOOP"
          :value="7"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="8"
          :type="globals.BTNTYPE.ZAHL"
          :op="globals.OP.NOOP"
          :value="8"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="9"
          :type="globals.BTNTYPE.ZAHL"
          :oop="globals.OP.NOOP"
          :value="9"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="*"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.MAL"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="4"
          :type="globals.BTNTYPE.ZAHL"
          :op="globals.OP.NOOP"
          :value="4"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="5"
          :type="globals.BTNTYPE.ZAHL"
          :op="globals.OP.NOOP"
          :value="5"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="6"
          :type="globals.BTNTYPE.ZAHL"
          :op="globals.OP.NOOP"
          :value="6"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="-"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.MINUS"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="1"
          :type="globals.BTNTYPE.ZAHL"
          :op="globals.OP.NOOP"
          :value="1"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="2"
          :type="globals.BTNTYPE.ZAHL"
          :op="globals.OP.NOOP"
          :value="2"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="3"
          :type="globals.BTNTYPE.ZAHL"
          :op="globals.OP.NOOP"
          :value="3"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="+"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.PLUS"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="+/-"
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.MINUSSIGN"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="0"
          :type="globals.BTNTYPE.ZAHL"
          :op="globals.OP.NOOP"
          :value="0"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text=","
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.POINT"
          @calc-button-click="CalcButtonClick"
        />
      </div>
      <div class="grid-item">
        <CalcButton
          text="="
          :type="globals.BTNTYPE.FUNKTION"
          :op="globals.OP.EQUALS"
          @calc-button-click="CalcButtonClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { globals } from "../common/globals.js";
import * as math from "mathjs";
import CalcButton from "../components/buttons/CalcButton";

export default {
  name: "Rechner",
  components: { CalcButton },
  data: function() {
    return {
      globals,
      ergebnis: 0,
      rechnung: "",
      value: 0,
      OpActive: false
    };
  },
  methods: {
    CalcButtonClick(event) {
      let type = parseInt(event.target.getAttribute("type"));
      let op = parseInt(event.target.getAttribute("op"));
      if (type === globals.BTNTYPE.ZAHL) {
        this.value = event.target.getAttribute("value");
        console.log("Hole neuen Value: " + this.value);
      }
      switch (type) {
        case globals.BTNTYPE.ZAHL:
          console.log("Zahl wurde gedrückt");
          if (this.ergebnis.toString() === "0") {
            this.ergebnis = this.value;
          } else {
            if (this.OpActive) {
              this.ergebnis = this.value;
              this.OpActive = false;
            } else {
              this.ergebnis = this.ergebnis + this.value;
            }
          }

          break;
        case globals.BTNTYPE.FUNKTION:
          console.log("Funktion wurde gedrückt");
          switch (op) {
            case globals.OP.CE.toString():
              console.log("CE");
              this.ergebnis = "0";
              this.value = 0;
              this.OpActive = false;
              break;
            case globals.OP.C:
              console.log("C");
              this.ergebnis = "0";
              this.rechnung = "";
              this.value = 0;
              break;
            case globals.OP.EQUALS:
              console.log("=");
              this.rechnung = this.rechnung + this.ergebnis;
              this.ergebnis = math.evaluate(this.rechnung);
              this.rechnung = "";
              this.value = 0;
              break;
            case globals.OP.PLUS:
              console.log("+");
              this.OpActive = true;
              this.rechnung = this.rechnung + this.ergebnis + "+";
              break;
            case globals.OP.MINUS:
              console.log("-");
              this.OpActive = true;
              this.rechnung = this.rechnung + this.ergebnis + "-";
              break;
            case globals.OP.MAL:
              console.log("*");
              this.OpActive = true;
              this.rechnung = this.rechnung + this.ergebnis + "*";
              break;
            case globals.OP.GETEILT:
              console.log("/");
              this.OpActive = true;
              this.rechnung = this.rechnung + this.ergebnis + "/";
              break;
            case globals.OP.MINUSSIGN:
              console.log("/");
              this.ergebnis = this.ergebnis * -1;
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
  height: 100%;
  font-size: 22px;
  font-family: monospace;
  text-align: right;
}
.rechnung {
  width: 99%;
  height: 100%;
  font-size: 11px;
  font-family: monospace;
  text-align: right;
}
</style>
