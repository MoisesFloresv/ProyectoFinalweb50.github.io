//Autor: Flores Ventura Moisés	

// Esta es la parte donde ponemos la configurción de nuestra base de datos en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB63VZApYCI65TwFn0gKLNzLrcS-g-4oRY",
  authDomain: "proyectofinalweb50-fd251.firebaseapp.com",
  databaseURL: "https://proyectofinalweb50-fd251-default-rtdb.firebaseio.com",
  projectId: "proyectofinalweb50-fd251",
  storageBucket: "proyectofinalweb50-fd251.appspot.com",
  messagingSenderId: "27360742093",
  appId: "1:27360742093:web:f9073fff24e5e9f2717784",
  measurementId: "G-EGBVW9R2TQ"
};

//Aquí arrancamos nuestro Firebase
Firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

let array1 = []

	db.collection("PRODUCTOS").get().then((querySnapshot) =>
	{
		querrySnapshot.Each((doc) =>
		{
			console.log(`${doc.id} => ${doc.data()}`);
			array1.push(doc.data())
		});
		console.log(array1)
	});

	let array2 =[]

		db.collection("users").get().then((querySnapshot) =>
		{
			querySnapshot.forEach((doc) =>
			{
				console.log(`${doc.id} => ${doc.data()}`);

			});
			console.log(array2)
		});

		function guardarEnBD()
		{
			var nombre = document.getElementById("pri").value
			var marca = document.getElementById("seg").value
			var cantidad = document.getElementById("ter").value
			console.log(nombre)
			console.log(marca)
			console.log(cantidad)

			db.collection("PRODUCTOS").add({
				Nombre: nombre,
				Marca: marca,
				Cantidad: cantidad
			})
			.then(function(docRef)
			{
				console.log("El producto se ha guardadó satisfactoriamente en la base de datos con el ID: ", docRef.id);
				
			})
			.catch(function(error)
			{
				console.error("Se produjo un error al guardar el producto: ", error);
			});	

		}
		function eliminar()
		{
			var id = document.getElementById("tercero").value

			db.collection("PRODUCTOS").doc(id).delete().then(function()
			{
				console.log("El registro se eliminó correctamente");
			});

		}

		function editar ()
		{
			var id = document.getElementById("cuarto").value

			//To update age and favorite color:

			db.collection("PRODUCTOS").doc(id).update({
				"CampoMarca": "Pziser",

			})
			.then(function()
			{
				console.log("Document successfully update");
			});

		}
		console.log("Cargado correctamente")
