var unspashJson;

const images = document.getElementById("image-collection");

const onSearch = (query) => {
  images.innerHTML = "";
  fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=JrHjw4NH-IvdN-TNILP3E6beTnyOEwWRx-JMG2oshvk`
  ).then((res) =>
    res.json().then((res) => {
      unspashJson = res;

      if (unspashJson.results.length === 0) {
        console.log("no results found");
        const single = images.appendChild(document.createElement("div"));
        const desc = single.appendChild(document.createElement("p"));
        desc.innerHTML = "no results found";
        desc.classList = "image-desc";
      }

      unspashJson.results.map((image) => {
        console.log(image);

        const single = images.appendChild(document.createElement("div"));
        const imageUrl = single.appendChild(document.createElement("img"));
        const desc = single.appendChild(document.createElement("p"));

        imageUrl.src = image.urls.regular;
        desc.innerHTML = image.alt_description;
        imageUrl.classList = "image";
        desc.classList = "image-desc";
        single.classList = "single-container";
      });
    })
  );
};

const mySubmitFunction = (e) => {
  e.preventDefault();
  return false;
};

onSearch("nice");
document
  .getElementById("search")
  .addEventListener("click", () =>
    onSearch(document.getElementById("query").value)
  );
