"use strict";

const AddToCart = document.querySelectorAll(".btn-addtocart");
const containerCartItems = document.querySelector(".cart-items");
const containerConfirmedItems = document.querySelector(".cart-confirmed-items");

const btnMinus = document.querySelectorAll(".btn-minus");
const btnPlus = document.querySelectorAll(".btn-plus");

// show hide empty/active cart
const showCart = document.querySelector(".cart-active");
const showEmptyCart = document.querySelector(".cart-empty");

const cartRight = document.querySelector(".cart-container");
const cartTotalItems = document.querySelector(".cart-total-items");

const btnConfirmOrder = document.querySelector(".confirm-order");
const btnStartNewOrder = document.querySelector(".btn-start-new");
const overlay = document.querySelector("#overlay");
const OrderTotal = document.querySelectorAll(".order-total-number");
const modal = document.querySelector(".modal");
const main = document.querySelector("main");

let itemsInCart = 0;
let CartTotal = 0;

// /////////////////////////////////////////
// FUNCTIONS

const showHideCartDetails = function (n) {
  if (n > 0) {
    showCart.classList.add("visible");
    showEmptyCart.classList.remove("visible");
  } else {
    showCart.classList.remove("visible");
    showEmptyCart.classList.add("visible");
  }
};

///////////////////////////////

const updateTotal = function () {
  const itemContainer = document.querySelectorAll(".cart-item-box");
  let total = 0;

  itemContainer.forEach((item) => {
    const priceElement = item.querySelector(".price-x1");
    const qtElement = item.querySelector(".qt");
    const price = parseFloat(priceElement.innerHTML);
    const qt = parseFloat(qtElement.innerHTML);
    const itemTotal = price * qt;

    const printTotalElement = item.querySelector(".total");

    printTotalElement.innerHTML = itemTotal.toFixed(2);
    total += itemTotal;
    console.log(total);
  });

  OrderTotal.forEach((t) => (t.textContent = total.toFixed(2)));
};

/////////////////////////

const showHideAddToCart = function (itemID) {
  // display - and +
  const resetBtn = document.getElementById(`${itemID}`);
  const imgBorder = resetBtn.querySelector(".image-border");
  const targetAdd = resetBtn.querySelector(".btn-addtocart");
  targetAdd.classList.toggle("visible");
  imgBorder.classList.toggle("redBorder");
};

//////////////////////////
// Add or Delete the item from the cart, updating totals each time

const deleteItemFromCart = function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".cart-item-box");
  const itemID = clicked.id;
  clicked.remove();
  const selectItemContainer = document.getElementById(`${itemID}`);
  const resetQT = selectItemContainer.querySelector(".quantity-selected");
  resetQT.innerHTML = "1";

  //update UI

  itemsInCart--;
  cartTotalItems.innerHTML--;

  showHideAddToCart(itemID);
  showHideCartDetails(itemsInCart);
  updateTotal();
};

////////////////////////////

const addRemoveOne = function (e, num) {
  e.preventDefault();

  const clicked = e.target.closest(".item");
  const itemID = clicked.id;
  const cartRow = cartRight.querySelector(`#${itemID}`);
  const cartItemQT = cartRow.querySelector(".qt");

  const ItemQt = clicked.querySelector(".quantity-selected");
  if (ItemQt.textContent < 2 && num < 0) {
    cartRow.querySelector(".delete-item").click();
  } else {
    ItemQt.textContent = Number(ItemQt.textContent) + num;
    cartItemQT.textContent = ItemQt.textContent;
    updateTotal();
  }
};

///////////////////////////
// Create an item in the cart when clicked on ADD TO CART button, it generates two Html element, one for the cart and one for the confirmation of it (Modal). Also show the - and + button and qt currently selected.

const newItemCart = function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".item");

  //Name to add to the cart
  const itemID = clicked.id;
  const itemName = clicked.dataset.name;
  const itemPrice = clicked.dataset.price;

  showHideAddToCart(itemID);

  // Create the item in the cart

  const html = `
  <div class="cart-item-box cart-box" id="${itemID}">
    <div class="cart-item-details">
        <p class="cart-item-name">${itemName}</p>
        <div class="item-numbers">
        <p class="item-qt"><span class="qt">1</span>x</p>
        <p class="item-price">@ $<span class="price-x1">${itemPrice}</span></p>
        <p class="item-total">$<span class="total">${itemPrice}</span></p>

        </div>
    </div>
    <button class="delete-item">
        <img src="./assets/images/icon-remove-item.svg" alt="cross icon">
    </button>
  </div>
  `;

  containerCartItems.insertAdjacentHTML("afterbegin", html);

  // Create the item in the final cart

  itemsInCart++;
  cartTotalItems.innerHTML++;

  showHideCartDetails(itemsInCart);
  updateTotal();

  //create detele item to the DOM and total item

  const btnDelete = document.querySelectorAll(".delete-item");
  btnDelete.forEach((btnD) =>
    btnD.addEventListener("click", deleteItemFromCart)
  );
};

//////////////////////////////////
// ADD EVENT LISTENERSSSSS

AddToCart.forEach((add) => add.addEventListener("click", newItemCart));

btnMinus.forEach((btnM) =>
  btnM.addEventListener("click", function (e) {
    addRemoveOne(e, -1);
  })
);
btnPlus.forEach((btnP) =>
  btnP.addEventListener("click", function (e) {
    addRemoveOne(e, 1);
  })
);

btnConfirmOrder.addEventListener("click", () => {
  // loop over the rows of the cart to create Confirmed Cart Modal
  containerConfirmedItems.innerHTML = "";

  const cartRow = document.querySelectorAll(".cart-item-box");

  cartRow.forEach(function (row) {
    const itemID = row.id;
    const itemName = row.querySelector(".cart-item-name").innerHTML;
    const itemPrice = row.querySelector(".price-x1").innerHTML;
    const itemQt = row.querySelector(".qt").innerHTML;
    const itemTotal = row.querySelector(".total").innerHTML;

    const html2 = `
    <div class="cart-item-box cart-box confirmed-box" id="${itemID}">
      <div class="item-ordered-recap">
      <img class="img-thumbnail" src="./assets/images/image-${itemID}-thumbnail.jpg">

        <div class="cart-item-details">
          <p class="cart-item-name">${itemName}</p>
          <div class="item-numbers">
          <p class="item-qt"><span class="qt">${itemQt}</span>x</p>
          <p class="item-price">@ $<span class="price-x1">${itemPrice}</span></p>
          </div>
        </div>
      </div>
      <div class="item-subtotal">
      <p class="item-total">$<span class="total">${itemTotal}</span></div>
    </div>
         <hr class="line-cart">

    `;

    containerConfirmedItems.insertAdjacentHTML("afterbegin", html2);
  });

  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
  main.classList.add("disabled");
});

////////////////////////////////////////////
///////////////  MODAL  ////////////////////

btnStartNewOrder.addEventListener("click", () => {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  main.classList.remove("disabled");
});
