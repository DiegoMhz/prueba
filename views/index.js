
const getBooks = async () => {
    try {
        const response = await axios.get('https://prueba-5csg.onrender.com/books');
        const books = response.data;
        const list = document.getElementById('bookList');
        books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} - ${book.autor}`;
        list.appendChild(listItem);
    });
    } catch (error) {
        console.error('Error:', error);
    }
}



// Llama a la función cuando la página se carga
getBooks();


const getUser = async () => {
    
    try {
        const response = await axios.get('https://prueba-5csg.onrender.com/users');
        const users = response.data;
        const list = document.getElementById('usersList');
        users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.username} - ${user.pass}`;
        list.appendChild(listItem);
    });
    } catch (error) {
        console.error('Error:', error);
    }
}

getUser();
