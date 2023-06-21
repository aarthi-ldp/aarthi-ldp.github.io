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

// const tableData = new Map();
// function addTableElement(tableId) {
//   const tableElement = document.createElement("table");
//   tableElement.classList.add("table");
//   tableElement.setAttribute("data-items", 0);
//   tableElement.setAttribute("data-price", 0);
//   tableElement.setAttribute("id", tableId);
//   tableContainer.appendChild(tableElement); 
// }

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
clonedMenuItem.classList.add("dragged-item"); // Add the CSS class to hide the cloned item
  table.appendChild(clonedMenuItem);

}

Array.from(menuContainer.getElementsByClassName("menu-item")).forEach(
  (item) => {
    item.addEventListener("dragstart", handleDragStart);
  }
);
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");



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
  openModal("table1");
});
table2.addEventListener("click", function(){
  openModal("table2");
});
table3.addEventListener("click", function(){
  openModal("table3");
});
// function closeModal() {
//   const modal = document.getElementById("modal");
//   modal.style.display = "none";
// }

function openModal(tableId) {
  const modal = document.getElementById("modal");
  const modalTableTitle = modal.querySelector(".modal-table-title");
  const modalMenuList = modal.querySelector("#modal-menu-list");
  const modalTotalPrice = modal.querySelector("#modal-total-price");
  const modalDeleteButtons = modal.querySelectorAll(".modal-delete-button");
  const modalCloseSessionButton = modal.querySelector(".modal-close-session-button");

  modalTableTitle.textContent = `${tableId} Order Details`;
  modal.style.display = "block";
  // modalMenuList.innerHTML = "";

  // Get the table based on tableId
  const table = document.getElementById(tableId);
  const itemsCount = parseInt(table.getAttribute("data-items")) || 0;
  const totalPrice = parseInt(table.getAttribute("data-price")) || 0;
  console.log(table);
 const temp = table.querySelectorAll(".dragged-item");
 console.log(temp);
  // Iterate over the items in the table and add them to the modal
  for (let i = 0; i < itemsCount; i++) {
    //const menuItem = table.querySelector(`#${tableId} :nth-last-child(${i+1})`);
     const menuItem = temp[i];
         console.log(menuItem);
  const menuItemName = menuItem.querySelector(".menu-item-name").textContent;
    const menuItemPrice = parseInt(menuItem.getAttribute("data-price")) || 0;

  
    

    const li = document.createElement("li");
    li.textContent = `${menuItemName} - Rs. ${menuItemPrice}`;
    modalMenuList.appendChild(li);

    // Create delete button for each item
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
      table.setAttribute("data-price", totalPrice - menuItemPrice);

      // Update the item count and total price in the modal
      itemCountElement.textContent = itemsCount - 1;
      modalTotalPrice.textContent = totalPrice - menuItemPrice;

     
    });

    modalMenuList.appendChild(deleteButton);
  }

  // Display the total price in the modal
  modalTotalPrice.textContent = `Total: Rs. ${totalPrice}`;

  // Close the modal when the close button is clicked
  const modalCloseButton = modal.querySelector(".modal-close-button");
  modalCloseButton.addEventListener("click", function () {
    closeModal();
  });

  modalCloseSessionButton.addEventListener("click", function () {
    // Perform any additional actions or cleanup for closing the session
    // ...

    // Close the modal
    closeModal();
  });
}

