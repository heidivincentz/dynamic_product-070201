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
  <img src="https://kea-alt-del.dk/t7/api/products/1163" alt="shirt" />
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

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");

    copy.querySelector(".discounted p").textContent =
      product.price * (product.discount / 100);
  }

  //  grab parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}

// const url2 = "https://kea-alt-del.dk/t7/api/products/1163";
// // fetch data
// fetch(url2)
//   .then((res) => res.json())
//   .then((data) => showProduct(data));

// function showProduct(product) {
//   console.log(product);
//   document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
//   document.querySelector(".breadcrumbs .productname").textContent =
//     product.productdisplayname;
// }

// // replace image
// document.querySelector(
//   "img.productimage"
// ).src = `https://kea-alt-del.dk/t7/images/jpg/1000/${product.id}.jpg`;

// document.querySelector("img.productimage").alt = product.productdisplayname;
