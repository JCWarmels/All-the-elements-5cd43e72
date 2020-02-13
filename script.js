var $ = document.querySelector("title").innerText;
document.querySelector("h1").innerText = $;
document.querySelector("h1").classList.add('headers');
var hold = document.querySelectorAll("p");
for(i=0;i<hold.length;i++){
    hold[i].classList.add('sample');
}