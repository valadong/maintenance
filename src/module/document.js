// function Oq(select) {
//   this._select = select;
// }
// Oq.prototype = {
//   div() {
//     const selector = document.querySelector(this._select);
//     return console.log(selector);
//   },
// };

const QQ = (function () {
  function QQ(select) {
    if (!new.target) {
      return new QQ(select);
    }
    // function WHatuGot(selector) {
    //   let sS;
    //   if (selector === "string") {
    //     sS = document.querySelector(selector);
    //   }
    //   return sS;
    // }
    // const WWW = WHatuGot(select);
    this._select = select;
    this._result = "12";
    this._arr = [];
  }

  QQ.prototype = {
    div(show) {
      return console.log(show);
    },
    css(style, color) {
      this._select.setAttribute(style, color);
      return this;
    },
    setattribute(classa, name) {
      if (this._select !== null) {
        this._select.setAttribute(classa, name);
      }
      return this;
    },
    mapP(fnc) {
      if (Array.isArray(this._select)) {
        const object = {};
        let T = this._select;
        let len = object.length >>> 0;
        let a = new Array(len),
          k = 0;
        for (let k of this._select) {
          let kValue, mappedValue;
          mappedValue = fnc.call(this._select);
        }
      }
      return this;
    },
  };
  return QQ;
})();

const SS = document.querySelector("h6");
const isSS = SS !== null;

module.exports = QQ;
