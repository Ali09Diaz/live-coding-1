// Escribe tu código aquí.


  const arrayNombres=["Alicia", "Gustavo", "Roy", "Lalo", "Monica", "Alfredo", "Itachi" ];  //Elementos de mi arreglo 

  const letras = "Lili"; //Nombre de persona que quiero usar para comparar el numero de letras, con las de los nombres de mi arreglo

  const newArray= arrayNombres.filter((arrayNombres)=> arrayNombres.length >letras.length) //Se crea un nuevo arreglo que mas tarde lo imprimiremos. Se filtra mi arrayNombre, con los siguientes parametros, dentro de los elementos del arreglo se van a estar midiendo la longitud de los nombres y estos tiene que ser mayores a 4, que corresponde al nombre Lili

  console.log(newArray); //"Alicia", "Gustavo", "Monica", "Alfredo", "Itachi"

  /*
  FEEDBACK de la actividad

  + inicio leyendo con mayor detenimiento los requerimientos
  +enlazar los js y html desde el inicio 
  +inicia bastante bien declarando la variable

  - te falto realizar un cuerpo para la resolución del problema, algun loop. o explicar al entrevistador de que manería resolverías el problema desde el inicio, asi si te vuelve a pasar lo del internet los dejas con la impresion de que tenías idea de como resolverlo
  
  */
  


