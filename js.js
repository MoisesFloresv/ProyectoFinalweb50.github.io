//Autor: Flores Ventura Moises

//Esta es la parte donde ponermos la configuración de nuestra base de datos en Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB63VZApYCI65TwFn0gKLNzLrcS-g-4oRY",
    authDomain: "proyectofinalweb50-fd251.firebaseapp.com",
    databaseURL: "https://proyectofinalweb50-fd251-default-rtdb.firebaseio.com",
    projectId: "proyectofinalweb50-fd251",
    storageBucket: "proyectofinalweb50-fd251.appspot.com",
    messagingSenderId: "27360742093",
    appId: "1:27360742093:web:f9073fff24e5e9f2717784",
    measurementId: "G-EGBVW9R2TQ"
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
