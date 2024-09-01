function validaEdad(edad: number): string{

    if (edad > 17){
        return 'puedes ingresar' 


    }else{
        return 'no puedes ingresar'
    }
}

console.log(validaEdad(12))

type Animal = {
    id: number,
    estado: string
}

type usuario = {
    id:number,
    name:string 
}

let animal: Animal | usuario = {id:1,estado:'barinas'} // a la variabl de tipo animal puede usar atributos del type usuario y del tipo animal


function sumaDos (n:number | string):number {  //esta es una funcion cuyo parametro puede ser numero o string y lo que retorna es de tipo numero
    if (typeof n == 'number'){
        return n + 2

    }else{
        return parseInt(n)+2
    }

}

console.log(sumaDos('22'))

function getUser (id:number) {
    if (id<0){
        return null
    }
    return {
        id: 1,
        name: 'Felipe',
        create_at: new Date()
            }
    }

const user = getUser(1)

console.log('usuario ',user?.name,'Creacion ',user?.create_at)

