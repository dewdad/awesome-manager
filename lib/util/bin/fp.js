"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
exports.TICK = 350;
exports.LENGTH = 25;
function gaussian(i) {
    var variance = 0.6;
    var shift = 2;
    var x = (shift * 2 * i) / (exports.LENGTH - 1) - shift;
    return Math.exp(-Math.pow(x, 2) / (2 * variance)) / Math.sqrt(2 * Math.PI * variance);
}
exports.gaussian = gaussian;
var draw = function (brush) {
    return rxjs_1.pipe(operators_1.map(function (num) { return brush.repeat(Math.floor(num * 65)); }), operators_1.take(25));
};
var gaussian_stream = rxjs_1.interval(350).pipe(operators_1.map(gaussian), draw("-"), operators_1.map(function (v) { return "|" + v + v.length; }));
var subscribe = gaussian_stream.subscribe(function (v) { return console.log(v); });
//# sourceMappingURL=fp.js.map