import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
const OP = { NOOP: 0, MAL: 1, GETEILT: 2, PLUS: 3, MINUS: 4 };
const TYPE = { NOTYPE: 0, ZAHL: 1, FUNKTION: 2 };

export var globalStore = new Vue({
  data: {
    gErgebnis: "0",
    gRechnung: "",
    gZahl: "0",
    gOp: OP.NOOP,
    gButtonType : TYPE.NOTYPE

  }
});
new Vue({
  render: h => h(App)
}).$mount("#app");



