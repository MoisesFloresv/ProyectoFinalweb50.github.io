

//Esta es la parte donde ponermos la configuración de nuestra base de datos en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD79EiNvJoMGUukG-kfXRhw8yL4Xh9UY_c",
  authDomain: "erparc-b85c3.firebaseapp.com",
  projectId: "erparc-b85c3",
  storageBucket: "erparc-b85c3.appspot.com",
  messagingSenderId: "811209969592",
  appId: "1:811209969592:web:f4945634467a7da295494d"
};
  // Aquí arrancamos nuestro Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


let array1 = []

    db.collection("Medicinas").get().then((querySnapshot) => {
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

db.collection("Medicinas").add({
    Nombre:nombre,
    Marca:marca,
    Cantidad:cantidad
})
.then(function(docRef) {
    console.log("El medicamento se guardo correctamente en la base de datos con el ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error al guardar el medicamento: ", error);
});	
}

function eliminar(){
	var id = document.getElementById("tercero").value

	db.collection("Medicinas").doc(id).delete().then(function() {
    console.log("registro se ha eliminado correctamente!");
}).catch(function(error) {
    console.error("Error al eliminar un documento: ", error);
});
}
  
function editar(){

	var id = document.getElementById("cuarto").value

	// To update age and favorite color:
db.collection("Medicinas").doc(id).update({
    "CampoMarca": "Pziser",
    
})
.then(function() {
    console.log("Document successfully updated!");
});

}
console.log("Cargado Correctamente") 
©
