window.onload = (event) => {
    const urlField = document.getElementById('urlField');
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        console.log(tabs);
        if(tabs){
            let urlParam = tabs[0].url;
            console.log(urlParam);
            urlField.value = urlParam;
        }
        // use `url` here inside the callback because it's asynchronous!
    }); 
}



// fetch('http://localhost:9000/articles/', {
//             method: 'GET', // or 'PUT'
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             mode: "no-cors"
//         })
//     .then(response => console.log(response))
//     .catch(err => console.log(err))




// const firebaseConfig = {
//     apiKey: "AIzaSyAhaypXAsZ23aCOG7N9D4n2adwPfqtX92A",
//     authDomain: "mutter-cards.firebaseapp.com",
//     projectId: "mutter-cards",
//     storageBucket: "mutter-cards.appspot.com",
//     messagingSenderId: "610825274616",
//     appId: "1:610825274616:web:f0f8f2b95a5dfe0da3a70d",
//     measurementId: "G-YN1G3S9LLE"
// };

// firebase.initializeApp(firebaseConfig);

// const articleData = firebase.database().ref('articleData');

// const saveButton = document.querySelector(".saveButton")
// document.querySelector(".extensionForm").addEventListener("submit", async (e) => {
//     e.preventDefault()
//     let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
//     alert("tab")

//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         function: submitForm
//     },
//     async (injectionResults) => {})
// })


const getElementVal = (id) => {
    return document.getElementById(id).value;
}


async function submitForm() {
    console.log("submitting")
    // e.preventDefault();
}

async function redirectTo() {
    console.log("Redirecting")
}

function redirectToNewPage() {
    console.log("hi")
    window.open('./display.html');
}

function send_data(){

    const title = getElementVal("title");
    if (title === "") {
        alert("Please input title!");
        return;
    }
    const body = getElementVal("body");
    const url = getElementVal("urlField");

    // const data = {
    //     title: title,
    //     body: body,
    //     url: url
    // };
    // console.log(data);
    
    // alert(title);
    // alert(body);
    // alert(url);
    console.log(title, body, url);

    fetch('http://localhost:9000/articles/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body,
            url: url
        }),
        mode: "cors"
    })
    .then((response) => {
        // alert(JSON.stringify((response.json())));
        console.log(response);
        alert("Article Saved Successfully!")
        return response.json()
    })
    .catch(error => console.log('Error ' + error))

}


document.getElementById("post").onclick =  async (e) => {
    e.preventDefault()
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    send_data();

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: submitForm
    },
    async (injectionResults) => {}
    )
}

document.getElementById("fetch").onclick = async (e) => {
    e.preventDefault()
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    redirectToNewPage()

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: redirectTo
    },
    async (injectionResults) => {}
    )
}




