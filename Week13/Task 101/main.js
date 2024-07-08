document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("product-container");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(3, 1fr)";
    container.style.gap = "10px";
    container.style.padding = "20px";

    const products = 15;
    for (let i = 1; i <= products; i++) {
        const productDiv = document.createElement("div");
        productDiv.style.border = "1px solid #ccc";
        productDiv.style.padding = "20px";
        productDiv.style.textAlign = "center";
        productDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
        productDiv.style.borderRadius = "8px";

        const productNumber = document.createElement("h2");
        productNumber.textContent = i;
        productNumber.style.margin = "0 0 10px 0";

        const productLabel = document.createElement("p");
        productLabel.textContent = "Product";
        productLabel.style.margin = "0";

        productDiv.appendChild(productNumber);
        productDiv.appendChild(productLabel);
        container.appendChild(productDiv);
    }

    const footer = document.createElement("footer");
    footer.textContent = "Copyright 2021";
    footer.style.textAlign = "center";
    footer.style.marginTop = "20px";
    footer.style.padding = "10px";
    footer.style.backgroundColor = "#4CAF50";
    footer.style.color = "#fff";
    container.appendChild(footer);
});
