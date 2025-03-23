// Simple alert when "Add to Cart" is clicked
document.querySelectorAll(".product button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});