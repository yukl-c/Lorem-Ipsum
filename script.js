let para;

let api_front = "https://hipsum.co/api/?type=hipster-centric&paras=";

let api_fetch;

document.getElementById("gen").addEventListener("click", function(event) {
    event.preventDefault();
    para = document.getElementById("number").value;
    api_fetch = api_front + para;
    console.log(api_fetch);

    // Fetch data from the API
    fetch(api_fetch)
        .then(response => {
            // Check if the response is ok (status in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse JSON from the response
        })
        .then(data => {
            console.log(data);
            document.querySelector("article").innerHTML = data.join('<br/><br/><hr/><br/>'); // Handle the parsed data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

})