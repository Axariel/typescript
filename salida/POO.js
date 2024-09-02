"use strict";
class Personaje {
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHp(cantidad) {
        this.hp = this.hp + cantidad;
        return this.hp;
    }
    get hpf() {
        return this.hp;
    }
    set hpf2(cantidad) {
        this.hp = this.hp + cantidad;
    }
}
const player = new Personaje(1, 'adrian', 1, 100);
console.log(player);
player.hpf2 = 20;
player.subirNivel();
player.cambiarHp(+10);
const laVida = player.hpf;
console.log(player, laVida);
//# sourceMappingURL=POO.js.map