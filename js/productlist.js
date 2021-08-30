const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //   console.log(data);
  data.forEach(function (item) {
    showProduct(item);
  });
}

/* <template>
<article class="shirt smallProduct onSale">
  <img src="assets/10001163.png" alt="shirt" />
  <h2>Shirt 2</h2>

  <p class="subtle">T-Shirts | Nike</p>
  <p class="price"><span>Prev.</span>DKK 700,-</p>

  <div class="discounted">
    <p>Now DKK 462,-</p>
    <p>-33%</p>
  </div>
  <button><a href="product.html">View Product</a></button>
</article>
</template> */

function showProduct(product) {
  console.log(product);
  // grab template

  const template = document.querySelector("#smallProductTemplate").content;
  //   clone it
  const copy = template.cloneNode(true);
  // change content
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h2").textContent = product.productdisplayname;
  //  grab parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}
