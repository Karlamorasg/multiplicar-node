
const fs = require('fs') // archivos


crearArchivo = (base) =>{
    return new Promise ((resolve, reject) =>{
        if(!Number(base)){
            reject('la base no contiene un numero, verificar dato')
            return
        }
        let data = ''
        for(let i=1; i <= 10; i++){
            data += (`${base} * ${i} = ${base*i} \n`)
          }

          fs.writeFile(`Tablas/tabla- ${base}.txt`, data, (err) => { // le digo primero donde quiero gaurdar el archivo y luefo cual archivo cquiero crear, lugo los datos que le voy a poner y luego el callback para verificar que todo sale
            if (err) {
              reject (err)}
            else{
            resolve (`tabla-${base}.txt`)}
        });
        
      
    })
  

  }

  module.exports ={
      crearArchivo
  }







