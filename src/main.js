import Vue from "vue";
import App from "./App.vue";
import { globals } from "src/common/globals.js";

Vue.config.productionTip = false;

export var globalStore = new Vue({
  data: {
    gErgebnis: "0",
    gRechnung: "",
    gZahl: "0",
    gOp: globals.OP.NOOP,
    gButtonType: globals.BTNTYPE.NOTYPE
  }
});
new Vue({
  render: h => h(App)
}).$mount("#app");
