class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
  
}


class UI {
  addProduct(product) {
    const productList = document.getElementById('product-list')
    // creamos un nuevo elemento, en este caso es un div
    const element = document.createElement('div')
    element.innerHTML = 
    `<div class= "card text-center mb-4">
      <div class="card-body">
        <strong>Product Name</strong>: ${product.name}
        <strong>Product Price</strong>: ${product.price}
        <strong>Product Year</strong>: ${product.year}
        <button class="btn btn-danger btn-sm" name="delete">Reday</button>
      </div>
    </div>`
    //oppenchild agregaramos a product list un elemento hijo 
    productList.appendChild(element)
    document.getElementById('product-form').reset();
  }
  deleteProduct(element) {
    // en esta buscamos el padre del padre del elemento que en este caso 
    // queremos es eliminar el div de la const element en el objetct product
    if (element.name === 'delete') {
      element.parentElement.parentElement.parentElement.remove()
    }
  }
  showMessage() {

  }
  
}

//DOM Events

const form = document.getElementById('product-form')

form.addEventListener('submit', sendForm)

function sendForm(ev) {
  ev.preventDefault()
  let name = document.getElementById('name').value;
  let price = document.getElementById('price').value;
  let year = document.getElementById('years').value;
  
  
   const product = new Product(name, price, year);
  //  creo un nuevo objeto de ui y de esto obtengo el atributo de addProduct
   const ui = new UI 
   ui.addProduct(product)
   ui.addPomodoro()

   
  }
const productList = document.getElementById('product-list')
productList.addEventListener('click', function(e) {
  const ui = new UI
  ui.deleteProduct(e.target)

})