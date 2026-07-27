function checkPassword(){

    let pass = document.getElementById("password").value;

    if(pass == "ILOVEYOUMA"){
        window.location.href = "welcome.html";
    }
    else{
        alert("Wrong Password ❤️");
    }

}

function goNames(){
    window.location.href="names.html";
}
function test(){
    alert("Button work aaguthu ❤️");
}
function goOpen(){
    window.location.href="open.html";
}
function goLetter(){
    window.location.href="letter.html";
}

function goMemories(){
    window.location.href="memories.html";
}

function goStory(){
    window.location.href="story.html";
}

function goBackOpen(){
    window.location.href="open.html";
}

function goBackName(){
    window.location.href="names.html";
}
function goSong(){
    window.location.href="song.html";
}
function goPromise(){
    window.location.href="promise.html";
}
function goEnd(){
    window.location.href="end.html";
}
setInterval(function(){

let petal = document.createElement("div");

petal.className = "petal";

petal.innerHTML = "🌸";

petal.style.left = Math.random() * 100 + "%";
petal.style.fontSize = (20 + Math.random() * 15) + "px";
petal.style.animationDuration = (5 + Math.random() * 5) + "s";

document.body.appendChild(petal);

setTimeout(function(){
    petal.remove();
},10000);

},500);
document.querySelectorAll("button").forEach(function(btn){

    btn.addEventListener("click", function(e){

        let go = this.getAttribute("onclick");

        if(go && go.includes("window.location") || go && go.includes("go")){

            e.preventDefault();

            document.body.style.opacity = "0";
            document.body.style.transition = "0.5s";

            setTimeout(() => {
                eval(go);
            },500);
        }

    });

});
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let current = 0;

    slides[current].classList.add("active");

    setInterval(() => {

        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");

    }, 2500);

}