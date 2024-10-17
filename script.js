function startClock() {
    // Function to update the clock
    function updateClock() {
        const now = new Date(); // Get the current date and time

        // Format the date as DD-MMM-YYYY
        const day = now.getDate().toString().padStart(2, '0'); // Format day
        const month = now.toLocaleString('default', { month: 'short' }); // Get abbreviated month name
        const year = now.getFullYear(); // Get full year
        const formattedDate = `${day}-${month}-${year}`; // Create formatted date string

        // Format the time as HH:MM:SS
        const hours = now.getHours().toString().padStart(2, '0'); // Format hours
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Format minutes
        const seconds = now.getSeconds().toString().padStart(2, '0'); // Format seconds
        const formattedTime = `${hours}:${minutes}:${seconds}`; // Create formatted time string

        // Display the formatted date and time in the HTML element with ID 'clock'
        document.getElementById('clock').textContent = `${formattedDate}, ${formattedTime}`;
    }

    // Update the clock every second (1000 milliseconds)
    setInterval(updateClock, 1000);

    // Call updateClock initially to display the time right away
    updateClock();
}


window.onload = function() {

    // Call startClock when the window loads
    startClock();
    setTimeout(function() {
        document.getElementById("customPopup").style.display = "flex"; // Show the custom popup
    }, 2000);
};

function closePopup() {
    document.getElementById("customPopup").style.display = "none"; // Hide the custom popup
}



function pnrStatus(){
    window.open("http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en","_blank");
}
function charts(){
    window.open("https://www.irctc.co.in/online-charts/","_blank");
}
function askDisha(){
    window.open("https://askdisha.irctc.co.in/","_blank");
}

function openFlight(){
    window.open("https://www.air.irctc.co.in/","_blank");
}
function openHotel(){
    window.open("https://www.hotels.irctc.co.in/hotels","_blank");
}
function openDrishti(){
    window.open("https://raildrishti.indianrailways.gov.in/","_blank");
}
function openCatering(){
    window.open("https://www.ecatering.irctc.co.in/","_blank");
}
function openBus(){
    window.open("https://www.bus.irctc.co.in/home","_blank");
}
function openHoliday(){
    window.open("https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category=","_blank");
}
function openTourist(){
    window.open("https://www.irctctourism.com/bharatgaurav","_blank");
}
function openHill(){
    window.open("https://www.irctctourism.com/gallery/","_blank");
}
function openCharter(){
    window.open("https://www.ftr.irctc.co.in/ftr/","_blank");
}
function openGallery(){
    window.open("https://www.irctctourism.com/gallery/","_blank");
}
function register(){
    window.open("https://www.irctc.co.in/nget/profile/user-signup","_blank");
}
let rotated1=false;
function openfunc1(){
    const dropdown1=document.getElementById("div31");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg1");
    rotated1=!rotated1;
    svgele1.style.transform=rotated1?"rotate(180deg)":"rotate(0deg)";
}
let rotated2=false;
function openfunc2(){
    const dropdown1=document.getElementById("div32");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg2");
    rotated2=!rotated2;
    svgele1.style.transform=rotated2?"rotate(180deg)":"rotate(0deg)";
}
let rotated3=false;
function openfunc3(){
    const dropdown1=document.getElementById("div33");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg3");
    rotated3=!rotated3;
    svgele1.style.transform=rotated3?"rotate(180deg)":"rotate(0deg)";
}
let rotated4=false;
function openfunc4(){
    const dropdown1=document.getElementById("div34");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg4");
    rotated4=!rotated4;
    svgele1.style.transform=rotated4?"rotate(180deg)":"rotate(0deg)";
}
let rotated5=false;
function openfunc5(){
    const dropdown1=document.getElementById("div35");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg5");
    rotated5=!rotated5;
    svgele1.style.transform=rotated5?"rotate(180deg)":"rotate(0deg)";
}
let rotated6=false;
function openfunc6(){
    const dropdown1=document.getElementById("div36");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg6");
    rotated6=!rotated6;
    svgele1.style.transform=rotated6?"rotate(180deg)":"rotate(0deg)";
}
let rotated7=false;
function openfunc7(){
    const dropdown1=document.getElementById("div37");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg7");
    rotated7=!rotated7;
    svgele1.style.transform=rotated7?"rotate(180deg)":"rotate(0deg)";
}
let rotated8=false;
function openfunc8(){
    const dropdown1=document.getElementById("div38");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg8");
    rotated8=!rotated8;
    svgele1.style.transform=rotated8?"rotate(180deg)":"rotate(0deg)";
}
let rotated9=false;
function openfunc9(){
    const dropdown1=document.getElementById("div39");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg9");
    rotated9=!rotated9;
    svgele1.style.transform=rotated9?"rotate(180deg)":"rotate(0deg)";
}
let rotated10=false;
function openfunc10(){
    const dropdown1=document.getElementById("div40");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg10");
    rotated10=!rotated10;
    svgele1.style.transform=rotated10?"rotate(180deg)":"rotate(0deg)";
}
let rotated11=false;
function openfunc11(){
    const dropdown1=document.getElementById("div41");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg11");
    rotated11=!rotated11;
    svgele1.style.transform=rotated11?"rotate(180deg)":"rotate(0deg)";
}
let rotated12=false;
function openfunc12(){
    const dropdown1=document.getElementById("div42");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg12");
    rotated12=!rotated12;
    svgele1.style.transform=rotated12?"rotate(180deg)":"rotate(0deg)";
}
let rotated13=false;
function openfunc13(){
    const dropdown1=document.getElementById("div43");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg13");
    rotated13=!rotated13;
    svgele1.style.transform=rotated13?"rotate(180deg)":"rotate(0deg)";
}
let rotated14=false;
function openfunc14(){
    const dropdown1=document.getElementById("div44");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg14");
    rotated14=!rotated14;
    svgele1.style.transform=rotated14?"rotate(180deg)":"rotate(0deg)";
}
let rotated15=false;
function openfunc15(){
    const dropdown1=document.getElementById("div45");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg15");
    rotated15=!rotated15;
    svgele1.style.transform=rotated15?"rotate(180deg)":"rotate(0deg)";
}
let rotated16=false;
function openfunc16(){
    const dropdown1=document.getElementById("div46");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg16");
    rotated16=!rotated16;
    svgele1.style.transform=rotated16?"rotate(180deg)":"rotate(0deg)";
}
let rotated17=false;
function openfunc17(){
    const dropdown1=document.getElementById("div47");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg17");
    rotated17=!rotated17;
    svgele1.style.transform=rotated17?"rotate(180deg)":"rotate(0deg)";
}
let rotated18=false;
function openfunc18(){
    const dropdown1=document.getElementById("div48");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg18");
    rotated18=!rotated18;
    svgele1.style.transform=rotated18?"rotate(180deg)":"rotate(0deg)";
}
let rotated19=false;
function openfunc19(){
    const dropdown1=document.getElementById("div49");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg19");
    rotated19=!rotated19;
    svgele1.style.transform=rotated19?"rotate(180deg)":"rotate(0deg)";
}
let rotated20=false;
function openfunc20(){
    const dropdown1=document.getElementById("div50");
    if(dropdown1.style.display==="block"){
        dropdown1.style.display="none";
    }
    else{
        dropdown1.style.display="block";
    }
    const svgele1=document.getElementById("mysvg20");
    rotated20=!rotated20;
    svgele1.style.transform=rotated20?"rotate(180deg)":"rotate(0deg)";
}

function openMenu(){
    document.getElementById('menu').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.classList.add('noscroll');
}
function closeMenu(){
    document.getElementById('menu').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.classList.remove('noscroll');
}

function openLogin(){
    document.getElementById('login').classList.add('active');
    document.getElementById('overlay1').classList.add('active');
    document.body.classList.add('no-scroll');
    refreshFunc();
}
function closeLogin(){
    document.getElementById('login').classList.remove('active');
    document.getElementById('overlay1').classList.remove('active');
    document.body.classList.remove('no-scroll');
}

captchText=null;
function generateCaptcha(){
    const captchaTextBox=document.getElementById("ctext");
    const randomString=Math.random().toString(36).substring(2,7);
    const randomStringArray=randomString.split("");
    const changeString=randomStringArray.map((char)=>(Math.random()>0.5?char.toUpperCase():char));
    captchText=changeString.join(" ");
    captchaTextBox.value=captchText;
}
function refreshFunc(){
    generateCaptcha();
}


function openEx(){
    const dropdown=document.getElementById("ex");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
}

let rotated23=false;
function openTrain(){
    const dropdown=document.getElementById("train");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("im0");
    rotated23=!rotated23;
    svgele1.style.transform=rotated23?"rotate(180deg)":"rotate(0deg)";
}

let rotated21=false;
function openIt1(){
    const dropdown=document.getElementById("it1");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("im1");
    rotated21=!rotated21;
    svgele1.style.transform=rotated21?"rotate(180deg)":"rotate(0deg)";
}
let rotated22=false;
function openIt2(){
    const dropdown=document.getElementById("it2");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("im2");
    rotated22=!rotated22;
    svgele1.style.transform=rotated22?"rotate(180deg)":"rotate(0deg)";
}

let rotated27=false;
function openLoyalty(){
    const dropdown=document.getElementById("loyalty");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("im3");
    rotated27=!rotated27;
    svgele1.style.transform=rotated27?"rotate(180deg)":"rotate(0deg)";
}

let rotated24=false;
function openLt1(){
    const dropdown=document.getElementById("lt1");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("im4");
    rotated24=!rotated24;
    svgele1.style.transform=rotated24?"rotate(180deg)":"rotate(0deg)";
}
let rotated25=false;
function openLt2(){
    const dropdown=document.getElementById("lt2");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("im5");
    rotated25=!rotated25;
    svgele1.style.transform=rotated25?"rotate(180deg)":"rotate(0deg)";
}
let rotated26=false;
function openLt3(){
    const dropdown=document.getElementById("lt3");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("im6");
    rotated26=!rotated26;
    svgele1.style.transform=rotated26?"rotate(180deg)":"rotate(0deg)";
}

let rotated30=false;
function openWallet(){
    const dropdown=document.getElementById("wallet");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("im7");
    rotated30=!rotated30;
    svgele1.style.transform=rotated30?"rotate(180deg)":"rotate(0deg)";
}

let rotated31=false;
function openHolidays(){
    const dropdown=document.getElementById("holidays");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("him1");
    rotated31=!rotated31;
    svgele1.style.transform=rotated31?"rotate(180deg)":"rotate(0deg)";
}
let rotated32=false;
function openH1(){
    const dropdown=document.getElementById("h1");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("him2");
    rotated32=!rotated32;
    svgele1.style.transform=rotated32?"rotate(180deg)":"rotate(0deg)";
}
let rotated33=false;
function openH2(){
    const dropdown=document.getElementById("h2");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("him3");
    rotated33=!rotated33;
    svgele1.style.transform=rotated33?"rotate(180deg)":"rotate(0deg)";
}
let rotated34=false;
function openH3(){
    const dropdown=document.getElementById("h3");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("him4");
    rotated34=!rotated34;
    svgele1.style.transform=rotated34?"rotate(180deg)":"rotate(0deg)";
}
let rotated35=false;
function openMeals(){
    const dropdown=document.getElementById("meals");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("m0");
    rotated35=!rotated35;
    svgele1.style.transform=rotated35?"rotate(180deg)":"rotate(0deg)";
}
let rotated36=false;
function openMore(){
    const dropdown=document.getElementById("more");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("m1");
    rotated36=!rotated36;
    svgele1.style.transform=rotated36?"rotate(180deg)":"rotate(0deg)";
}
let rotated37=false;
function openM1(){
    const dropdown=document.getElementById("more1");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("m2");
    rotated37=!rotated37;
    svgele1.style.transform=rotated37?"rotate(180deg)":"rotate(0deg)";
}
let rotated38=false;
function openAgentLogin(){
    const dropdown=document.getElementById("ag");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
    const svgele1=document.getElementById("agsvg");
    rotated38=!rotated38;
    svgele1.style.transform=rotated38?"rotate(180deg)":"rotate(0deg)";
}

const timeElement=document.querySelector(".time");

function formatTime(date){
    const hours=date.getHours()%12||12;
    const minutes=date.getMinutes();
    // const seconds=date.getSeconds();

    return `${hours.toString.padStart(2,"0")}:${minutes.toString.padStart(2,"0")}`;
}

setInterval(()=>{
    const now=new Date();
    timeElement.innerHTML=formatTime(now);
},200);




    




