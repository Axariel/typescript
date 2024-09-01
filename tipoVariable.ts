let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: String = "T rex"
let extintos = true

let animales: String[] = ['chanchito','feliz','Axariel'] // arreglo de string
let number: number[] = [1,2,3] // arreglo de numeros
let checks: boolean[] = []


const chica = 's'
const mediana = 'm'
const grande = 'l'

enum Talla {Chica = 's', Mediana = 'm', Grande = 'g', ExtraGrande = 'xl' }
const variable1 = Talla.Grande
console.log(variable1)

type Direccion = {  //con el type defino los atributos de la clase.
    numero: number,
    calle: string,
    pais: string

}

type Persona = {  //con el type defino los atributos de la clase.
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion

}



const objeto: Persona ={  //aqui estamos identando el objeto persona , 
    id:1 , 
    nombre: "adrian",
    talla: Talla.Grande,
    direccion : {
        numero: 1,
        calle: "Agueda",
        pais: "RD"

    }
   
} 

console.log(objeto)

