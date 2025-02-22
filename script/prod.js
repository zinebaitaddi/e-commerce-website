let productImg = document.getElementById("overlay-img");
let productName = document.getElementById("name");
let productCategory = document.getElementById("brand");
let productPrice = document.getElementById("price");
let productPar = document.getElementById("par");
const id = new URLSearchParams(window.location.search).get("id"); // Récupérer l'ID du produit dans l'URL

fetch(`https://json-server-brown-five.vercel.app/products?id=${id}`)
  .then((res) => res.json())
  .then((data) => {
    if (data.length > 0) {
      productImg.src = data[0].img;
      productName.innerHTML = data[0].name;
      productCategory.innerHTML = data[0].category;
      productPrice.innerHTML = `$${data[0].price}`;
      productPar.innerHTML = data[0].description;
    } else {
      console.log("Produit non trouvé");
    }
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données du produit", error);
  });

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
};

/** ----------- Navbar ----------- */
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

