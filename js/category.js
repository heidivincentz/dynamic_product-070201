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
