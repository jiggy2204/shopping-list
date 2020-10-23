$(function () {
  //Create entire li and children elements so we can traverse to span easily also so they are called by the consts below
  const newListItem = $("<li></li>");
  const newShopItem = $("<span></span>");
  newShopItem.addClass("shopping-item");

  const newControlDiv = $("<div></div>");
  newControlDiv.addClass("shopping-item-controls");

  const checkButton = $("<button></button>");
  const checkSpan = $("<span></span>");
  checkButton.addClass("shopping-item-toggle");
  checkSpan.addClass("button-label");
  checkSpan.text("check");

  const deleteButton = $("<button></button>");
  const deleteSpan = $("<span></span>");
  deleteButton.addClass("shopping-item-delete");
  deleteSpan.addClass("button-label");
  deleteSpan.text("delete");

  checkButton.append(checkSpan);
  deleteButton.append(deleteSpan);
  newControlDiv.append(checkButton).append(deleteButton);

  newListItem.append(newShopItem).append(newControlDiv);

  //Set ul to constant
  const shoppingList = $(".shopping-list");

  //hold form input
  let itemInput = "";

  // Enter items they need to purchase by entering text and hitting 'Return' or clicking the 'Add Item' button

  $("form").submit(function (e) {
    e.preventDefault();

    //put in text from user input
    itemInput = $("input").val();

    //place the value into the empty span created
    newShopItem.text(itemInput);

    //append the new li to bottom of the ul
    shoppingList.append(newListItem);
  });

  // Check and uncheck items on the list by clicking the 'Check' button
  shoppingList.on("click", "button.shopping-item-toggle", function (e) {
    e.stopPropagation();
    //use this to have the current 'check' button
    let test = $(this)
      //traverse to nearest li, then back down to nearest span
      .closest("li")
      .find(".shopping-item")
      //toggle the strikethrough class
      .toggleClass("shopping-item__checked");

    console.log(test, "Toggled");
  });

  // Permanently remove items from the ul list
  shoppingList.on("click", "button.shopping-item-delete", function (e) {
    e.stopPropagation();
    //traverse up to the nearest parent li and remove
    //it and all child elements
    $(this).closest("li").remove();
  });
});
