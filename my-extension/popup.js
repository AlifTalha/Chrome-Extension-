fetch("http://localhost:5000/api/data")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("output").innerText = data.message;
  })
  .catch((err) => {
    document.getElementById("output").innerText = "Error loading data";
    console.error(err);
  });