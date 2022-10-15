function validateForm() {
    let x = document.getElementById('searching');
    console.log(x);
    console.log(x.value);
    
    if (x.value === "about") {
        window.location.href= "https://subhratanu.github.io/web-accessibility/about.html";
        console.log("hello");
    }
    else if (x.value === "contact") {
        window.location.href= "https://subhratanu.github.io/web-accessibility/contact.html";
        console.log("hello");
    }
    else if (x.value === "home") {
        window.location.href= "https://subhratanu.github.io/web-accessibility";
        console.log("hello");
    }
    else{
        window.location.href= "https://subhratanu.github.io/web-accessibility/notfound.html";
    }
}
