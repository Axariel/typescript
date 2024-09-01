"use strict";
function validaEdad(edad) {
    if (edad > 17) {
        return 'puedes ingresar';
    }
    else {
        return 'no puedes ingresar';
    }
}
console.log(validaEdad(12));
let animal = { id: 1, estado: 'barinas' };
function sumaDos(n) {
    if (typeof n == 'number') {
        return n + 2;
    }
    else {
        return parseInt(n) + 2;
    }
}
console.log(sumaDos('22'));
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'Felipe',
        create_at: new Date()
    };
}
const user = getUser(1);
console.log('usuario ', user === null || user === void 0 ? void 0 : user.name, 'Creacion ', user === null || user === void 0 ? void 0 : user.create_at);
//# sourceMappingURL=funciones.js.map