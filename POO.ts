class Personaje {
    readonly id: number // solo es lectura 
    name: string
    nivel: number
    private hp: number
    profesion?:string //estoy indicando que esta propiedad es opcional
    constructor(id:number,name:string,nivel:number,hp:number){
        this.id=id
        this.name=name
        this.nivel=nivel
        this.hp=hp
    }
    subirNivel(): number {  // metodo para subir de nivel dentro de la clase

        this.nivel=this.nivel + 1

        return this.nivel
        
    }
    cambiarHp(cantidad:number): number {  // metodo para subir de nivel dentro de la clase

        this.hp=this.hp + cantidad

        return this.hp
        
    }
    get hpf(): number{
        return this.hp
    
    }
    set hpf2(cantidad:number){

        this.hp= this.hp + cantidad

    }
}

const player = new Personaje(1,'adrian',1,100)

console.log(player)
player.hpf2 = 20
player.subirNivel() // utilizando la funcion subir de nivel 
player.cambiarHp(+10) // funcion para cambiar el HP
const laVida= player.hpf



console.log(player,laVida)
