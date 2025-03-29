fetch("./Resources/index.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    populateContent(data);
  })
  .catch((error) => {
    console.error("Error loading index.json:", error);
  });
