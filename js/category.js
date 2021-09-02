const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleCategory(data);
  });

function handleCategory(data) {
  //   console.log(data);
  data.forEach(function (item) {
    showCategory(item);
  });
}

function showCategory(category) {
  console.log(category);
}

const url2 = "https://kea-alt-del.dk/t7/api/subcategories";

fetch(url2)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleSubcategory(data);
  });

function handleSubcategory(data) {
  //   console.log(data);
  data.forEach(function (item) {
    showSubcategory(item);
  });
}

function showSubcategory(subcategory) {
  console.log(subcategory);
}

const url3 = "https://kea-alt-del.dk/t7/api/products";

fetch(url3)
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
function showProduct(product) {
  console.log(product);
  {
    /* <template id="categorytemplate">
<section class="categorylist">
  <h2 class="category">Category</h2>

  <h3 class="subcategoryheadline">Subcategories</h3>
  <ol class="subcategorylist">
    <li class="subcategory">Running Shoes</li>
    <li class="subcategory">Asics</li>
    <li class="subcategory">Barefoot</li>
    <li class="subcategory">High heels</li>
    <li class="subcategory"></li>
    <li class="subcategory"></li>
    <li class="subcategory"></li>
    <li class="subcategory"></li>
    <li class="subcategory"></li>
    <li class="subcategory"></li>
  </ol>
</section> </template> */
  }

  // grab template

  const template = document.querySelector("#categorytemplate").content;

  // clone it
  const copy = template.cloneNode(true);

  // change content
  copy
    .querySelector("a")
    .setAttribute(
      "href",
      "product.html/subcategories=" +
        product.subcategory +
        "?categories=" +
        product.category
    );

  copy.querySelector("h2").textContent = product.category;

  // grab parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}
