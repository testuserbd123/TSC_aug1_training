function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  var el = document.getElementById('cart-count');
  if (el) el.textContent = cart.length;
}
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Added to cart!');
}
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const list = document.getElementById('cart-list');
  const total = document.getElementById('cart-total');
  if (list) {
    list.innerHTML = '';
    let sum = 0;
    cart.forEach(item => {
      let li = document.createElement('li');
      li.textContent = item.name + ' - $' + item.price;
      list.appendChild(li);
      sum += item.price;
    });
    if (total) total.textContent = 'Total: $' + sum;
  }
  updateCartCount();
}
document.addEventListener('DOMContentLoaded', updateCartCount);
