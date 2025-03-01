function fetchData() {
    fetch('https://<your-api-url>/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = JSON.stringify(data);
    })
    .catch(error => console.error("Error fetching data:", error));
}
