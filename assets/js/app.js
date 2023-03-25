var pos;
window.addEventListener("scroll", () =>{

    x=((window.scrollY / window.document.body.getBoundingClientRect().height) * 100);
    y=90-x;
    pos= y +"% "+x+"%";
    console.log(pos);
    document.body.style.backgroundPosition = pos;
}
);