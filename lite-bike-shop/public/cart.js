function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  var el = document.getElementById('cart-count');
  if (el) el.textContent = cart.length;
}

function addToCart(item_id, name, price) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({item_id, name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Added to cart!');

  // Push add_to_cart event to dataLayer for GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'add_to_cart',
    ecommerce: {
      items: [{
        item_id: item_id,
        item_name: name,
        price: price,
        quantity: 1
      }]
    }
  });
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
