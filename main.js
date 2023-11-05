//Screen 3 - SQL Gift Lists

import * as apiHelpers from "./api-helpers.js";

const form = document.querySelector("form");
const todoList = document.querySelector("#gift-list");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const inputs = Object.fromEntries(formData);

  const result = await apiHelpers.createList({
    name: inputs.name,
    gift: inputs.gift,
  });

  const listItem = createViewFromList(result.payload);
  listList.append(listItem);
  event.target.reset();
});

function createViewFromList(list) {
  const container = document.createElement("li");
  container.classList.add("container");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", async (e) => {
    await apiHelpers.updateListById({
      name: list.name,
      gift: list.gift,
    });
    container.classList.toggle("gift", e.target.checked);
  });

  const label = document.createElement("label");
  label.append(checkbox, list.name);

}

async function refreshLists() {
  const result = await apiHelpers.getLists();
  const listItems = result.payload.map(createViewFromList);
  listList.append(...listItems);
}

await refreshLists();







