const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// const url = "https://kea-alt-del.dk/t7/api/products/1163";
// fetch data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
// populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;

  // replace image
  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/jpg/1000/${product.id}.jpg`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
}

// if (query) {
// } else {
// }
