const getHash = () =>
  location.hash.slice(1).toLowerCase().split('/')[1] || "/"
  
export default getHash;
  
  /*
    Ejemplo:
      location.hash = "#/1/"  
      location.hash.slice(1) = "1"  //Elimina el primer caracter.  
      location.hash.slice(1).toLowerCase() //Para ponerlo en minusculas                       
      location.hash.slice(1).toLowerCase().split("/") //Para dividirlo por los "/", el resultado es ["","1",""]                       
      location.hash.slice(1).toLowerCase().split("/")[1] //Para acceder al elemento de en medio 1                      
  */