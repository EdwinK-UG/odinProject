// Library array
let myLibrary = [];

//Book object prototype
function Book(author, title, pages, read) {
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.read = read;
	this.readStatus = function(){
		if(this.read == 'Yes'){
			this.read = 'No';
		}
		else {
			this.read = 'Yes';
		}
	};
}

// Function that adds book to the library array

// Prevent form from submitting(Default behaviour)
document.getElementById('addForm').addEventListener('submit', function(event) { 
	event.preventDefault();});

//Function that changes read status of a book
function toggleRead(i){
	myLibrary[i].readStatus();
}

const element = document.getElementById('bookObject');
element.addEventListener('click', function() {
	let author = document.getElementById('author').value;
	let title = document.getElementById('title').value;
	let pages = document.getElementById('pages').value;
	let read = document.getElementById('read').value;
	// let book = {'author': author, 'title': title, 'pages': pages, 'read': read};
	const book = new Book(author, title, pages, read);
	myLibrary.push(book);
	console.log(myLibrary);

	const table = document.getElementById('bookList');
	let tableString = '<tr><th>Author</th><th>Title</th><th>Pages</th><th>Read</th></tr>';
	for(let i=0; i<myLibrary.length; i++){
		
		tableString = tableString + `<tr id=${i}><td>${myLibrary[i]['author']}</td><td>${myLibrary[i]['title']}</td><td>${myLibrary[i]['pages']}</td><td><button class="btn btn-primary btn-sm" type="submit" id="${myLibrary[i]['title']} + ${i}" >${myLibrary[i]['read']}</button></td><td><button class="btn btn-primary btn-sm" type="submit" id= ${myLibrary[i]['title'].replace(/ /g, '')}>Delete</button></td></tr>`;
	}
	table.innerHTML = tableString;
});

document.getElementById('addBook').addEventListener('mousemove',
	function() {
		for(let i=0; i<myLibrary.length;i++){
			let deletedIndex = document.getElementById(i);
			const deletedBook = document.getElementById(myLibrary[i]['title'].replace(/ /g, ''));
			deletedBook.addEventListener('click', ()=>{
				// delete myLibrary[i];
				myLibrary.splice(i,1);
				deletedIndex.remove();
				console.log(myLibrary);
        
       
			});
			let toggled = document.getElementById(`${myLibrary[i]['title']} + ${i}`);
			toggled.addEventListener('click', ()=>{
				toggleRead(i);
				toggled.innerHTML = myLibrary[i]['read'];
			});  
    
		}
	});



const newBook = document.getElementById('newBook');
newBook.addEventListener('click', ()=>{document.getElementById('addBook').style.display = 'block';});


// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }
