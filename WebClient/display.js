window.onload = () => {
    fetch('http://localhost:9000/articles/')
    .then((response) => {
        // alert(JSON.stringify((response.json())));
        return response.json()
        // return response.json()
    }).then((data) => {
        for(let i=0; i<data.length; i++){
            let displayTitle = document.createElement("h3")
            displayTitle.innerHTML = data[i].title

            let displayBody = document.createElement("p")
            displayBody.innerHTML = data[i].body

            let displayUrl = document.createElement("p")
            displayUrl.innerHTML = data[i].url

            let innerDiv = document.createElement("div");
            let lineBreak = document.createElement("hr");
            
            innerDiv.append(displayTitle)
            innerDiv.append(displayBody)
            innerDiv.append(displayUrl)
            innerDiv.append(lineBreak)

            innerDiv.onclick = () => {
                window.open(data[i].url)
            }

            document.getElementById("outerDiv").append(innerDiv);
        }
    })
    .catch(error => console.log('Error ' + error))
}