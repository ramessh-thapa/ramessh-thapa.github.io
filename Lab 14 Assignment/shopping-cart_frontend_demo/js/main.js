
window.onload = getProducts;


async function getProducts() {
    const response = await fetch("http://localhost:3000/products");
    const jsonData = await response.json();

    for (let e of jsonData) {
        addNewProductRowToTable(e);
    }

}


function addNewProductRowToTable(item) {
    let id = item.id;
    let title = item.title;
    let description= item.description;
    let price = item.price;
    const row = document.createElement('tr');
  
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(id));
    row.appendChild(cell);
  
    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(title));
    row.appendChild(cell);
  
    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(description));
    row.appendChild(cell);
  
    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);
  
    cell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('btn', 'btn-primary', 'btn-inline');
    editButton.addEventListener('click', () => editProduct(item));
    cell.appendChild(editButton);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-secondary', 'btn-inline');
    deleteButton.addEventListener('click', () => deleteProduct(id));
    cell.appendChild(deleteButton);
  
    row.appendChild(cell);
    document.getElementById('tbodyProductList').appendChild(row);
   
  }
  
  function editProduct(item) {
    localStorage.setItem("itemToUpdate", JSON.stringify(item));
    location.href = "add.html";
  }
  
  function deleteProduct(id) {
    var result = confirm("Are you sure want to delete this item?");
    if (result) {
        fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        })
        .then((res) => {
        if (res.ok) {
            alert("Deleted successfully.")
            window.location.reload();
        } else {
            console.log("Error occured on deletion", res);
        }
        })
        .catch((error) => {
            console.log("Error occured on deletion", error);
        });
     }
  }

