let cart = []

const addButtons = document.querySelectorAll(".add-cart");
const cartButton = document.querySelector("#cart")
const cartItems = document.querySelector("#cart-items");

cartItems.style.display = "none";

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const gameName = button.parentElement.querySelector("h2").textContent;
        cart.push(gameName);
        cartButton.textContent = `🛒 Cart (${cart.length})`;
    });
});

cartButton.addEventListener("click", () => {

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty</p>"
    } else {
        cart.forEach((game, index) => {
            
            let item = document.createElement("div");
            item.classList.add("cart-item");

            item.innerHTML = `
                <span>${game}</span>
                <button class="remove-btn">❌</button>
            `;

            item.querySelector(".remove-btn").addEventListener("click", () => {
                cart.splice(index, 1);
                cartButton.textContent = `🛒 Cart (${cart.length})`;
                item.remove();
            });

            cartItems.appendChild(item);
        });

        let buyButton = document.createElement("button");
        buyButton.textContent = "Buy";

        buyButton.addEventListener("click", () => {
            cart = [];
            cartItems.innerHTML = "<p>Thank you for your purchase!</p>";
            cartButton.textContent = "🛒 Cart (0)";
        });
        cartItems.appendChild(buyButton);
    }

    if (cartItems.style.display === "block") {
        cartItems.style.display = "none";
    } else {
        cartItems.style.display = "block";
    }
});