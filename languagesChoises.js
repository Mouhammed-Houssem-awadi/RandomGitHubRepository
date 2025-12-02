
const select = document.getElementById("languageSelect");

fetch("languages.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(lang => {
      const option = document.createElement("option");
      option.value = lang.value;
      option.textContent = lang.title;
      select.appendChild(option);
    });
  })
  .catch(err => console.error("Error loading JSON:", err));
