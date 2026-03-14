class Book {
    constructor(nombre, autor, descripcion, numero) {
        this.nombre = nombre;
        this.autor = autor;
        this.descripcion = descripcion;
        this.numero = numero;
    }
}


let books = [];

addBook = () => {
    const nom = document.getElementById('bookName').value;
    const aut = document.getElementById('authorName').value;
    const des = document.getElementById('bookDescription').value;
    const num = parseInt(document.getElementById('pagesNumber').value);

    if(nom && aut && des && !isNaN(num)){
        books.push(new Book(nom,aut,des,num));
        console.log(books);
        mostrarLibros();
    }else{
        alert('Debes completar todos los datos');
    }
}


mostrarLibros = () => {
    const recorrido = books.map((libro, index) => 
       `<p>Nombre: ${libro.nombre} Autor: ${libro.autor} Descripcion: ${libro.descripcion} Paginas: ${libro.numero}</p>
       <button onclick="editbook(${index})">Editar</button>
       <button onclick="eliminarBook(${index})">Eliminar</button>
       `
    ).join('-');

    document.getElementById('books').innerHTML = recorrido;
}

editbook = (index) => {
    document.getElementById('bookName').value = books[index].nombre;
    document.getElementById('authorName').value = books[index].autor;
    document.getElementById('bookDescription').value = books[index].descripcion;
    document.getElementById('pagesNumber').value = books[index].numero;
    books.splice(index, 1);
    mostrarLibros();
}

eliminarBook = (index) => {
    books.splice(index, 1);
    mostrarLibros();
}