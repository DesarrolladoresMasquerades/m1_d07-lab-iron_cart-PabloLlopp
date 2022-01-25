// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span').innerText;

  const quantity = product.querySelector('.quantity input').value;

  const total = price * quantity; 

  const subtotal = product.querySelector('.subtotal span').innerText = total;

  return subtotal;
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
   //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const product = Array.from(document.querySelectorAll('.product'));
  let sumPrice = 0;


  product.forEach(element => {
    sumPrice += updateSubtotal(element)
  });
   
   //console.log("sum",sumPrice)
  // console.log("subt",)
  

  // ITERATION 3
  
  const total = document.getElementById('total-value').querySelector('span').innerText = sumPrice

}

// ITERATION 4

function removeProduct(event) {

//const father2 = document.getElementsByClassName('.product')
//const remove = father.removeChild('father2') 
const target = event.currentTarget;
let father = target.parentNode.parentNode
father.remove()
calculateAll()

//console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = Array.from(document.getElementsByClassName('btn-remove'));
  removeBtn.forEach(element => {
    element.addEventListener('click', removeProduct);
  });
  

 // console.log()
  //... your code goes here
});
