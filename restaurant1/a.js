const menuItems = [
  {
    id: 1,
    iname: "Chicken Soup",
    price: 100,
    category: "starters"
  },
  {
    id: 2,
    iname: "tandoori",
    price: 100,
    category: "appetizers"
  },
  {
    id: 3,
    iname: "dosa",
    price: 100,
    category: "main"
  },
  {
    id: 4,
    iname: "cake",
    price: 100,
    category: "desserts"
  },
  {
    id: 5,  
    iname: "Fries",
      price: 100,
      category: "starters"
    },
    {
      id: 6,
      iname: "Chips",
      price: 100,
      category: "starters"
    },
    {
      id: 7,
      iname: "Grill Chicken",
      price: 100,
      category: "appetizers"
    },
    {
      id: 8,
      iname: "Kebab",
      price: 140,
      category: "appetizers"
    },
    {
      id: 9,
      iname: "Biryani",
      price: 200,
      category: "main"
    },
    {
      id: 10,
      iname: "Fried Rice",
      price: 100,
      category: "main"
    },
    {
      id: 11,
      iname: "Noodles",
      price: 100,
      category: "main"
    },
    {
      id: 12,
      iname: "pie",
      price: 100,
      category: "desserts"
    }
];
  
const menuContainer = document.getElementById("menu");
const filterInput = document.getElementById("filter-input");
const tableSearchInput = document.getElementById("table-search");
const tableContainer = document.getElementById("table-container");
const tables = tableContainer.getElementsByClassName("table");

function generateMenuItems(items) {
  return items
    .map(
      (item) => `
      <div class="menu-item" id=${item.id} draggable="true" data-price="${item.price}">
        <div class="menu-item-name">Item: ${item.iname}</div>
        <div class="menu-item-category">Category: ${item.category}</div>
        <div class="menu-item-price">Price: Rs. ${item.price}</div>
        
      </div>
    `
    )
    .join("");
}

function filterMenuItems(query) {
  const filteredItems = menuItems.filter(
    (item) =>
      item.iname.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  menuContainer.innerHTML = generateMenuItems(filteredItems);
}

menuContainer.innerHTML = generateMenuItems(menuItems);

filterInput.addEventListener("input", function (event) {
  filterMenuItems(event.target.value);
});


function handleDragStart(event) {
  const itemId = event.currentTarget.id;
  event.dataTransfer.setData("text/plain", itemId);
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
}

function handleDrop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text/plain");
  const menuItem = document.getElementById(itemId);
  const table = event.currentTarget;
  const itemCountElement = table.querySelector(".item-count");
  const totalPriceElement = table.querySelector(".total-price");

  const itemsCount = parseInt(table.getAttribute("data-items")) || 0;
  table.setAttribute("data-items", itemsCount + 1);

  const itemPrice = parseInt(menuItem.getAttribute("data-price")) || 0;
  const totalPrice = parseInt(table.getAttribute("data-price")) || 0;
  table.setAttribute("data-price", totalPrice + itemPrice);

  itemCountElement.textContent = itemsCount + 1;
  totalPriceElement.textContent = totalPrice + itemPrice;

 
    const clonedMenuItem = menuItem.cloneNode(true);
  clonedMenuItem.classList.add("dragged-item");

    
    table.appendChild(clonedMenuItem);
  }





Array.from(menuContainer.getElementsByClassName("menu-item")).forEach(
  (item) => {
    item.addEventListener("dragstart", handleDragStart);
  });
const table1 = document.getElementById("Table1");
const table2 = document.getElementById("Table2");
const table3 = document.getElementById("Table3");



table1.addEventListener("dragover", handleDragOver);
table1.addEventListener("drop", handleDrop);
table2.addEventListener("dragover", handleDragOver);
table2.addEventListener("drop", handleDrop);
table3.addEventListener("dragover", handleDragOver);
table3.addEventListener("drop", handleDrop);

tableSearchInput.addEventListener("input", function (event) {
  const searchTerm = event.target.value.toLowerCase();

  Array.from(tables).forEach(function (table) {
    const tableName = table.textContent.toLowerCase();

    if (tableName.includes(searchTerm)) {
      table.style.display = "block";
    } else {
      table.style.display = "none";
    }
  });
});




table1.addEventListener("click", function(){
  openModal("Table1");
});
table2.addEventListener("click", function(){
  openModal("Table2");
});
table3.addEventListener("click", function(){
  openModal("Table3");
});

let tempCountElement;
let tempPriceElement;
function openModal(tableId) {
  tempCountElement = document.getElementById(tableId + "-count");
tempPriceElement = document.getElementById(tableId + "-price");
//console.log(tableItemElement.textContent, "tableElementCount");



  const modal = document.getElementById("modal");
  const modalTableTitle = modal.querySelector(".modal-table-title");
  const modalMenuList = modal.querySelector("#modal-menu-list");
  const modalTotalPrice = modal.querySelector("#modal-total-price");
  const modalDeleteButtons = modal.querySelectorAll(".modal-delete-button");
  const modalCloseSessionButton = modal.querySelector(".modal-close-session-button");
  const generateBillButton = modal.querySelector("#generate-bill-button");

  modalTableTitle.textContent = `${tableId} Order Details`;
  modal.style.display = "block";
   modalMenuList.innerHTML = "";

  // Get the table based on tableId
  const table = document.getElementById(tableId);
  const itemsCount = parseInt(table.getAttribute("data-items")) || 0;
  const totalPrice = parseInt(table.getAttribute("data-price")) || 0;
  console.log(table);
 const temp = table.querySelectorAll(".dragged-item");
 console.log(temp);
 const tableData = new Map()
  // Iterate over the items in the table and add them to the modal
  for (let i = 0; i < itemsCount; i++) {
    
     const menuItem = temp[i];
         console.log(menuItem);
  const menuItemName = menuItem.querySelector(".menu-item-name").textContent;
    const menuItemPrice = parseInt(menuItem.getAttribute("data-price")) || 0;
    let li;
    if(tableData.has(menuItemName)) {
      tableData.set(menuItemName, tableData.get(menuItemName) + 1);
      document.getElementById(`${menuItemName}-${tableId}-modal`).innerHTML = `${menuItemName}  - Rs. ${menuItemPrice}-quantity: ${tableData.get(menuItemName)}`
      
      console.log(document.getElementById(`${menuItemName}-${tableId}-modal`),tableData.get(menuItemName));
    }
    else {
      tableData.set(menuItemName, 1);
       li = document.createElement("li");
    li.id = `${menuItemName}-${tableId}-modal`
    li.textContent = `${menuItemName}  - Rs. ${menuItemPrice}-quantity: 1`;
    modalMenuList.appendChild(li);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("modal-delete-button");
    deleteButton.addEventListener("click", function () {
      // Remove the item from the table
      table.removeChild(menuItem);
      console.log(table);
      modalMenuList.removeChild(li);
      // Update the table attributes
      const itemsCount = parseInt(table.getAttribute("data-items")) || 0;
      const totalPrice = parseInt(table.getAttribute("data-price")) || 0;
      table.setAttribute("data-items", itemsCount - 1);
      console.log(menuItemPrice);
      table.setAttribute("data-price", totalPrice - menuItemPrice);

      // Update the item count and total price in the modal and table
      console.log(tempCountElement);
      tempCountElement.textContent = itemsCount - 1;
      tempPriceElement.textContent = totalPrice - menuItemPrice;
      modalTotalPrice.textContent = totalPrice - menuItemPrice*tableData.get(menuItemName);
      console.log(modalTotalPrice);
      modalMenuList.removeChild(deleteButton);
      

     
    });
    modalMenuList.appendChild(deleteButton);
    }
  
    
    
    

    // Create delete button for each item
    

   
   

  // Display the total price in the modal
  modalTotalPrice.textContent = `Total: Rs. ${totalPrice}`;
  }
}



function generateBill() {
  
  //   const tableId = modalTableTitle.textContent.split(" ")[0]; // Extract the table ID from the modal title
  //   const tableItems = Array.from(modalMenuList.getElementsByClassName("dragged-item")); // Get all the menu items in the modal
  
  //   // Extract the item details and calculate the total price
  //   const items = tableItems.map((item) => {
  //     const itemName = item.querySelector(".menu-item-name").textContent;
  //     const itemPrice = parseInt(item.getAttribute("data-price")) || 0;
  //     return { itemName, itemPrice };
  //   });
  
  //   const totalPrice = parseInt(modalTotalPrice.textContent.split(" ")[1]) || 0;
  
    // Generate the bill output
    const modal = document.getElementById("modal");

    const billOutput = modal.querySelector("#modal-total-price").textContent;
      alert(billOutput);
  
      
    modal.style.display = "none";
    // Display the bill to the user (you can customize this based on your requirements)
    
  }
  
  function Bill(){
  generateBill();
  }
  
  






function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function closeSession() {

  closeModal();
}



