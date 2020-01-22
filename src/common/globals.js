export const globals = Object.freeze({
  OP: { NOOP: 0, MAL: 1, GETEILT: 2, PLUS: 3, MINUS: 4, C: 5, CE: 6, B: 7, POINT: 8, EQUALS: 9, MINUSSIGN:10  },
  BTNTYPE: { NOTYPE: 0, ZAHL: 1, FUNKTION: 2 }
});
export var globalStore = Object.freeze({
  data: {
    gErgebnis: "0",
    gRechnung: "",
    gZahl: "0",
    gOp: globals.OP.NOOP,
    gButtonType: globals.BTNTYPE.NOTYPE
  }
});
