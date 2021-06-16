//Autor: Flores Ventura Moises

//Esta es la parte donde ponermos la configuración de nuestra base de datos en Firebase
const firebaseConfig = 
{
  
};
  // Aquí arrancamos nuestro Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


let array1 = []

    db.collection("Productos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        array1.push(doc.data())
    });
    console.log(array1)

  });

let array2 = []

    db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        array2.push(doc.data())
    });
    console.log(array2)

  });

function guardarEnBD(){
var nombre = document.getElementById("pri").value
var marca = document.getElementById("seg").value
var cantidad = document.getElementById("ter").value
console.log(nombre)
console.log(marca)
console.log(cantidad)

db.collection("Productos").add({
    Nombre:nombre,
    Marca:marca,
    Cantidad:cantidad
})
.then(function(docRef) {
    console.log("Se guardó correctamente en la base de datos con el ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Se produjo un error al guardar: ", error);
});	
}

function eliminar(){
	var id = document.getElementById("tercero").value

	db.collection("Productos").doc(id).delete().then(function() {
    console.log("El registro se ha eliminado correctamente!");
}).catch(function(error) {
    console.error("Error al eliminar un documento: ", error);
});
}
  
function editar(){

	var id = document.getElementById("cuarto").value

	// To update age and favorite color:
db.collection("Productos").doc(id).update({
    "CampoMarca": "Pziser",
    
})
.then(function() {
    console.log("Document successfully updated!");
});

}
console.log("Cargado Exitosamente") 
