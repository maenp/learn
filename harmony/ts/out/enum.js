"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color["Blue"] = "\u84DD\u8272";
})(Color || (Color = {}));
console.log(Color.Red);
