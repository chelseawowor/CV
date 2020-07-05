function changePicture() {
    let mainProfile = document.getElementById("profill");
    mainProfile.src = "gallery/profileChange.jpg";
    width="200"
}
function tampilan() {
    let satu = document.body;
    satu.style.background = "url(gallery/bgg.jpg)";
    satu.style.color = "black";
    let dua = document.getElementsByClassName("atas")[0];
    dua.style.background = "#393e46";
    let tiga = document.getElementsByClassName("tombol")[0];
    tiga.style.background = "#393e46"
}
function tampilan2() {
    let satu = document.getElementsByClassName("atas-fix")[0];
    satu.style.background = "#393e46";
    let dua = document.getElementsByClassName("kiri2")[0];
    dua.style.background = "url(gallery/bgg.jpg)";
    dua.style.color = "black";
    let enam = document.getElementsByClassName("padd");
    enam[0].style.background = "#393e46";
    enam[0].style.color = "lavender";
    enam[0].style.border= "0px";
    enam[1].style.background = "#393e46";
    enam[1].style.color = "lavender";
    enam[1].style.border= "0px";
    enam[2].style.background = "#393e46";
    enam[2].style.color = "lavender";
    enam[2].style.border= "0px";
    let tiga = document.getElementsByTagName("a");
    tiga[6].style.color="lavender";
    tiga[7].style.color="lavender";
    tiga[8].style.color="#393e46";
    tiga[9].style.color="#393e46";
    tiga[10].style.color="#393e46";
    enam[3].style.background = "#393e46";
    enam[3].style.color = "lavender";
    enam[3].style.border= "0px";

    let empat = document.getElementsByTagName("input");
    empat[0].style.background = "#393e46";
    empat[0].style.color = "lavender";
    empat[1].style.background = "#393e46";
    empat[1].style.color = "lavender";
    empat[2].style.background = "#393e46";
    empat[2].style.color = "lavender";
    empat[3].style.background = "#393e46";
    empat[3].style.color = "lavender";

    document.getElementsByTagName("textarea")[0].style.background = "#393e46";
    document.getElementsByTagName("textarea")[0].style.color = "lavender";
    document.getElementsByClassName("submit")[0].style.background = "#393e46";
   
}
function tampilan3() {
    let satu = document.body;
    satu.style.background = "url(gallery/bgg.jpg)";
    satu.style.color = "black";
    let dua = document.getElementsByClassName("atas")[0];
    dua.style.background = "#393e46";
    let tiga = document.getElementsByClassName("tombol")[0];
    tiga.style.background = "#393e46"
   document.getElementsByClassName("kiri2")[0].style.background = "url(gallery/bgg.jpg)";
   document.getElementsByTagName("button")[0].style.color = "lavender";
   document.getElementsByTagName("button")[0].style.border = "lavender";
   
}
function pesan() {
    alert("Massage was send.");
}