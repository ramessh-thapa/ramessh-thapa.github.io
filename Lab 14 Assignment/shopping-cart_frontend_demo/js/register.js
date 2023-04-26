let itemToUpdate = JSON.parse(localStorage.getItem("itemToUpdate"));

if(itemToUpdate!=null){
    document.getElementById('title').value = itemToUpdate.title;
    document.getElementById('description').value = itemToUpdate.description;
    document.getElementById('price').value = itemToUpdate.price;
    document.getElementById('id').value = itemToUpdate.id;
    
    document.getElementById('screenTitle').innerHTML = "Update Product";
    document.getElementById('btnRegister').innerHTML = "Update";
    
    localStorage.removeItem("itemToUpdate");
}


async function postProduct(title, description, price) {
    let b = { "title": title, "description": description, "price": price }
    let setting = {
        method: 'POST',
        body: JSON.stringify(b),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch("http://localhost:3000/products", setting);
    const jsonData = await response.json();
    return jsonData;
}

async function putProduct(id, title, description, price) {
    let b = { "title": title, "description": description, "price": price }
    let setting = {
        method: 'PUT',
        body: JSON.stringify(b),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(`http://localhost:3000/products/${id}`, setting);
    const jsonData = await response.json();
    return jsonData;
}


document.getElementById('btnRegister').addEventListener('click', (event) => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const id = document.getElementById('id').value;
    
    if(id==null || id.trim()==""){
        data = postProduct(title, description, price);

        document.getElementById('title').innerHTML = data;
        document.getElementById('myform').reset();
    }
    else {
        data = putProduct(id, title, description, price);
        document.getElementById('title').innerHTML = data;
        
        location.href = "index.html";
    }
   
});