"use strict";
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T rex";
let extintos = true;
let animales = ['chanchito', 'feliz', 'Axariel'];
let number = [1, 2, 3];
let checks = [];
const chica = 's';
const mediana = 'm';
const grande = 'l';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "g";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const objeto = {
    id: 1,
    nombre: "adrian",
    talla: Talla.Grande,
    direccion: {
        numero: 1,
        calle: "Agueda",
        pais: "RD"
    }
};
console.log(objeto);
//# sourceMappingURL=tipoVariable.js.map