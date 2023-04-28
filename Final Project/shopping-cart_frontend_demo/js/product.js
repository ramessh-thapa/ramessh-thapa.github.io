window.onload = loadProducts;
let originalProduct=[];

function loadProducts() {
  document.getElementById("welcomeMessage").innerHTML= "Welcome, "+ JSON.parse(sessionStorage.getItem("userContext")).userName;
  fetch("http://localhost:3000/products", {
        headers: {
        'x-access-token': `${JSON.parse(sessionStorage.getItem("userContext")).token}`,
        },
    })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        sessionStorage.setItem("products", JSON.stringify(data));
        originalProduct = data;
        renderProductData(data);
      }
    });
}

let cart = [];

function addItemsInCart(item) {
  if (!cart[item.id])
    cart[item.id] = { ...item, orderCount: 1 };
  else
    cart[item.id].orderCount += 1;
  renderCartTable();
}

function renderProductData(data) {
  let rows = "";
  for (const item of data) {
    let imgUrl = "http://localhost:3000"+item.imageUrl;
    rows += `<tr id="${item.id}">
          <td >${item.title}</td>
          <td >${item.price}</td>
          <td ><img src="${imgUrl}" width="100px"></td>
          <td id="${item.id}-stock">${item.quantity === 0 ? "Out of Stock" : item.quantity}</td>
          <td ><button class="btn" onclick='addItemsInCart(${JSON.stringify(item)})' ${item.stock === 0 ? "disabled" : ""}><i class="fa fa-cart-shopping" style="color: #f28507;"> Add</i></button></td>
      </tr>`;
  }

  document.getElementById("tbl-product-body").innerHTML = rows;
}

function renderCartTable() {

  let cartTbl =  document.getElementById("tbl-cart");
  if(cartTbl.classList.contains("hide"))
    cartTbl.classList.remove("hide");

  let cartMessage = document.getElementById("cartMessage");
  cartMessage.innerHTML = "";

  let btnSubmit =  document.getElementById("btnSubmitOrder");
  if(btnSubmit.classList.contains("hide"))
  {
    btnSubmit.classList.remove("hide");
  }

  const tbodyCart = document.getElementById("tbl-cart-body");
  tbodyCart.innerHTML = "";

  let totalCost = 0;

  for (const index in cart) {
    const row = document.createElement("tr");
    const item = cart[index];
    const nameCell = document.createElement("td");
    nameCell.innerText = item.title;
    row.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.innerText = item.price;
    row.appendChild(priceCell);

    const totalCell = document.createElement("td");
    totalCell.innerText = item.orderCount * item.price;
    row.appendChild(totalCell);
    totalCost += item.orderCount * item.price;

    const quantityCell = document.createElement("td");
    const minusBtn = document.createElement("button");
    minusBtn.innerText = "-";
    minusBtn.onclick = () => updateItemCount(item, -1);
    quantityCell.appendChild(minusBtn);

    const quantityInput = document.createElement("input");
    quantityInput.style.width = "60px";
    quantityInput.type = "text";
    quantityInput.value = item.orderCount;
    quantityInput.style.paddingLeft = "5px";
    quantityInput.style.paddingRight = "5px";
    quantityInput.style.textAlign = "center";
    quantityInput.onchange = (e) => updateItemCount(item, 0, parseInt(e.target.value));
    quantityCell.appendChild(quantityInput);

    const plusBtn = document.createElement("button");
    plusBtn.innerText = "+";
    plusBtn.onclick = () => updateItemCount(item, 1);
    quantityCell.appendChild(plusBtn);

    row.appendChild(quantityCell);

    tbodyCart.appendChild(row);
  }

  const totalCostElement = document.getElementById("totalCost");
  totalCostElement.innerText = "Total Cost: $" + totalCost.toFixed(2);
}


function updateItemCount(item, change, newValue) {

  if(cart[item.id])
   {
    if (newValue !== undefined) 
      cart[item.id].orderCount = newValue;
    else{
     let idx = originalProduct.findIndex(x=> x.id==item.id);
     if(originalProduct[idx].quantity>cart[item.id].orderCount){
      cart[item.id].orderCount += change;
     }
     else{
      alert("Out of Stock");
     }
    }

     
   } 
  if (cart[item.id] && cart[item.id].quantity < 1)
    cart = cart.filter((x) => x.id != item.id);

  renderCartTable();
}

function submitOrder() {
  const dataToPost = Object.values(cart);
  if (cart.filter((x) => x.orderCount === 0).length === cart.length) {
    alert("Item quantity must be greater than 0");
    return;
  }
  fetch("http://localhost:3000/products/placeorder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'x-access-token': `${JSON.parse(sessionStorage.getItem("userContext")).token}`,
    },
    body: JSON.stringify(dataToPost)
  }).then((response) => response.json())
  .then((data) => {
    cart = [];
    renderCartTable();
    loadProducts();
    let cartTbl =  document.getElementById("tbl-cart");
    if(!cartTbl.classList.contains("hide"))
    {
      cartTbl.classList.add("hide");
      
      let btnSubmit =  document.getElementById("btnSubmitOrder");
      if(!btnSubmit.classList.contains("hide"))
      {
        btnSubmit.classList.add("hide");
      }

      let cartMessage = document.getElementById("cartMessage");
      cartMessage.innerHTML = "There is no item in your shopping cart!";
    }
     
  }).catch((error) => {
    console.log(error);
  });
}


function logOut(){
  sessionStorage.clear();
  window.location.href = '/index.html'; 
}
