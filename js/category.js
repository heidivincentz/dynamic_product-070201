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

{
  /* <template>
<section class="categorylinks">
  <ol>
    <li><a href="productlist.html">Accessories</a></li>

    <li><a href="productlist.html">Apparel</a></li>
    <li><a href="productlist.html">Footwear</a></li>
    <li><a href="productlist.html">Free Items</a></li>
    <li><a href="productlist.html">Personal Care</a></li>
    <li><a href="productlist.html">Sporting Goods</a></li>
  </ol>
</section>

<div class="categorylist">
  <section id="accessories">
    <h2>Footwear</h2>
    <ol>
      <li>Running Shoes</li>
      <li>Asics</li>
      <li>Barefoot</li>
      <li>High heels</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </section>
</div>
</template> */
}

// grab template

const template = document.querySelector("#categorytemplate").content;

// clone it
const copy = template.cloneNode(true);

// change content

// grab parent
const parent = document.querySelector("main");
// append
parent.appendChild(copy);
