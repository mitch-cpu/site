document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            const fullContent = this.nextElementSibling;

            if (fullContent.style.display === "block") {
                fullContent.style.display = "none";
                this.textContent = "Leggi di più";
            } else {
                fullContent.style.display = "block";
                this.textContent = "Mostra meno";
            }
        });
    });
});