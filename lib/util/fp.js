var map = require("lodash/fp/map"),
  split = require("lodash/fp/split"),
  join = require("lodash/fp/join"),
  concat = require("lodash/fp/concat");

const s = "field1, field2, field3";
const answer = { "field1.type": "xxx", "field2.type": "yyy" };

s1 = map(v => {
  return answer[v + ".type"];
}, split(",", s));
s1;
