'use strict'
/*Escribir una función que reciba como parámetros un array de nombres y 
un nombre a buscar, muestre en pantalla si el nombre esta en lista o no */
function recibaNombre(array, nombre) {
    if (array.includes(nombre)) {
        alert(`${nombre} está en la lista.`);
    } else {
        alert(`${nombre} no está en la lista.`);
    }
}

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

recibaNombre(students, "Pedro");   
recibaNombre(students, "Ana");   

/*Escribir una función que reciba como parámetro una frase. 
Separar por palabras y devolver el numero de palabras que tiene la frase */

function recibirFrase(frase){
    let palabras = frase.split(' ');
    return palabras.length;
}

let phrase = 'La programación web es fundamental para el progreso';
alert(recibirFrase(phrase));

/*Escribir una función que reciba como parámetro una frase, separar 
por palabras y devolver en un array las palabras que tengan mas de 3 letras.*/
function devolverArray(frase3) {
    let palabras = frase3.split(' ');
    let palabrasFiltradas = palabras.filter(palabra => palabra.length > 3);
    
    if (palabrasFiltradas.length > 0) {
        return palabrasFiltradas;
    } else {
        return "No hay palabras con más de 3 letras.";
    }
}

let frase3 = 'Hola amigos informaticos';
alert(devolverArray(frase3));

/*Escribir una función que reciba como parámetros el siguiente array y un string con el 
nombre de una tecnología. Devolver una lista de los libros asociados a la tecnología. */

const programmingBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
  ];
function buscarLibrosPorTecnologia(libros, tecnologia) {
    return libros.filter(libro => libro.toLowerCase().includes(tecnologia.toLowerCase()));
}

let tecnologia = 'Python';
let librosDePython = buscarLibrosPorTecnologia(programmingBooks, tecnologia);

alert(librosDePython);

/*Escribir una función que reciba como parámetros el siguiente array anterior, y el titulo de un libro. 
Convertir los elementos en objetos agregando la las clave id (numero autoincremental que empieza en 1) y title.   
Devolver el valor de id correspondiente al titulo recibido como parámetro. */
function convertirYBuscarId(libros, tituloBuscado) {
    const librosConvertidos = libros.map((titulo, index) => {
        return { id: index + 1, title: titulo };
    });
    
    const libroEncontrado = librosConvertidos.find(libro => libro.title === tituloBuscado);
    return libroEncontrado ? libroEncontrado.id : null;
}

let tituloBuscado = "Clean Code: A Handbook of Agile Software Craftsmanship";
let idDelLibro = convertirYBuscarId(programmingBooks, tituloBuscado);

alert(idDelLibro); 