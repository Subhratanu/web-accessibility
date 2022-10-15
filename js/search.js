function validateForm() {
    let x = document.getElementById('searching');
    console.log(x);
    console.log(x.value);
    
    if (x.value === "about") {
        window.location.href= "http://127.0.0.1:5500/about.html";
        console.log("hello");
    }
    else if (x.value === "contact") {
        window.location.href= "http://127.0.0.1:5500/contact.html";
        console.log("hello");
    }
    else if (x.value === "home") {
        window.location.href= "http://127.0.0.1:5500";
        console.log("hello");
    }
    else{
        window.location.href= "http://127.0.0.1:5500/notfound.html";
    }
}