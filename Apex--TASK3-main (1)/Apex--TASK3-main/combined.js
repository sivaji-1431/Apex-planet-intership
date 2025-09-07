// Portfolio Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

// To-Do List App
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.title = 'Delete task';
    deleteBtn.onclick = () => {
      todos.splice(index, 1);
      saveAndRender();
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task) {
    todos.push(task);
    todoInput.value = '';
    saveAndRender();
  }
});

// Initial render
saveAndRender();

// Product Listing with images
const products = [
  { id: 1, name: 'Smartphone', category: 'electronics', price: 699, rating: 4.5, image: 'https://m.media-amazon.com/images/I/41MSicX6jhL._SR290,290_.jpg' },
  { id: 2, name: 'T-shirt', category: 'clothing', price: 20, rating: 4.2, image: 'https://img-c.udemycdn.com/course/750x422/5444528_d4e3_5.jpg' },
  { id: 3, name: 'Laptop', category: 'electronics', price: 999, rating: 4.8, image: 'https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=' },
  { id: 4, name: 'Novel Book', category: 'books', price: 15, rating: 4.1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_eMEmPRyUzeqKC2lP2ac7ZTeb87sntjBcQ&s' },
  { id: 5, name: 'Jeans', category: 'clothing', price: 40, rating: 4.0, image: 'https://www.jeanswholesaler.in/4456-thickbox_default/tone-jeans-men-s-style-ds1933.jpg' },
  { id: 6, name: 'Headphones', category: 'electronics', price: 120, rating: 4.3, image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_551_ANC_Pro.347_1.jpg?v=1737546044' },
  { id: 7, name: 'Cookbook', category: 'books', price: 25, rating: 4.6, image: 'https://mir-s3-cdn-cf.behance.net/projects/404/761e59119666285.Y3JvcCwxMjc0LDk5Niw2MywxNDU.jpg' }
];

const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');
const productsContainer = document.getElementById('products-container');

function displayProducts(items) {
  productsContainer.innerHTML = '';
  items.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product-card');

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <h3>${product.name}</h3>
      <p>Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <p class="product-rating">Rating: ${product.rating.toFixed(1)} ⭐</p>
    `;
    productsContainer.appendChild(div);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];
  const category = categorySelect.value;
  const sort = sortSelect.value;

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  switch (sort) {
    case 'rating-desc':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'rating-asc':
      filtered.sort((a, b) => a.rating - b.rating);
      break;
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
  }

  displayProducts(filtered);
}

categorySelect.addEventListener('change', filterAndSortProducts);
sortSelect.addEventListener('change', filterAndSortProducts);

// Initial display
filterAndSortProducts();
