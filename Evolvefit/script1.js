let cartItems = [];
let total = 0;

/* DOM */
const cart = document.getElementById("cart");
const totalDisplay = document.getElementById("total");
const paymentSection = document.getElementById("payment-section");

/* ================= ADD TO CART ================= */
function addToCart(name, price) {
    cartItems.push({ name, price });
    updateCart();
}

/* ================= UPDATE CART ================= */
function updateCart() {
    cart.innerHTML = "";
    total = 0;

    cartItems.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cart.appendChild(li);
    });

    totalDisplay.innerText = total;
}

/* ================= REMOVE ITEM ================= */
function removeItem(index) {
    cartItems.splice(index, 1);
    updateCart();
}

/* ================= SHOW PAYMENT ================= */
function showPayment() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    paymentSection.style.display = "block";
    paymentSection.scrollIntoView({ behavior: "smooth" });
}

/* ================= COMPLETE PAYMENT ================= */
function completePayment(event) {
    event.preventDefault();

    const method = document.getElementById("paymentMethod").value;

    if (!method) {
        alert("Please select payment method");
        return;
    }

    if (method === "cod") {
        alert("Order placed successfully! Pay on Delivery 🚚");
    } else if (method === "upi") {
        alert("UPI Payment Successful 🎉");
    } else {
        alert("Card Payment Successful 💳");
    }

    cartItems = [];
    updateCart();
    paymentSection.style.display = "none";
}

/* ================= SEARCH ================= */
function searchProducts() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product.querySelector("h2").innerText.toLowerCase();
        product.style.display = name.includes(input) ? "block" : "none";
    });
}

/* ================= FEEDBACK ================= */
function submitFeedback(event) {
    event.preventDefault();
    alert("Thank you for your feedback ❤️");
    event.target.reset();
}
