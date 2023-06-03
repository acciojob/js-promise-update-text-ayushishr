function updateOutputText() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Call the function and update the HTML element when the promise resolves
updateOutputText().then((text) => {
  const outputElement = document.getElementById("output");
  outputElement.textContent = text;
});
