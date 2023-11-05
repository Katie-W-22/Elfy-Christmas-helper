export async function getLists() {
    const response = await fetch("/api/lists");
    const body = await response.json();
    return body;
  }
  
  export async function createList(list) {
    const response = await fetch("/api/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: list.name,
        gift: list.gift,
      }),
    });
    const body = await response.json();
    return body;
  }