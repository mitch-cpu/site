function showProductDetails(productId, productName, productDescription) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.classList.remove('active');
    });

    const selectedProduct = document.getElementById(productId);
    selectedProduct.classList.add('active');

    const overlayTitle = document.getElementById("overlay-title");
    const overlayDescription = document.getElementById("overlay-description");
    overlayTitle.innerText = productName;
    overlayDescription.innerText = productDescription;
    document.getElementById("product-overlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("product-overlay").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-more");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const post = this.parentElement;
            const fullContent = post.querySelector(".full-content");
            const preview = post.querySelector(".preview");

            if (fullContent.style.display === "none" || fullContent.style.display === "") {
                fullContent.style.display = "block";
                preview.style.display = "none";
                this.textContent = "Leggi di meno";
            } else {
                fullContent.style.display = "none";
                preview.style.display = "block";
                this.textContent = "Leggi di più";
            }
        });
    });
});
