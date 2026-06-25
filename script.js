// ======================================================
// INDIGO TRAININGS
// Certificate Verification Portal
// Part 1
// ======================================================

// ************ CHANGE THIS ************

const API_URL = "https://script.google.com/macros/s/AKfycbw26Ke-YbIbQH5GWVm1_gE4FuGAGpB_Ash32Ulgm_LjqDVL7SHw6DOtjcNpxl5cvVKBlA/exec";

// *************************************

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const loader = document.getElementById("loader");

const resultCard = document.getElementById("resultCard");

const studentName = document.getElementById("studentName");
const college = document.getElementById("college");
const branch = document.getElementById("branch");
const year = document.getElementById("year");
const enrolment = document.getElementById("enrolment");
const domain = document.getElementById("domain");
const duration = document.getElementById("duration");
const grade = document.getElementById("grade");
const certificateId = document.getElementById("certificateId");

const previewBtn = document.getElementById("previewBtn");
const pngBtn = document.getElementById("pngBtn");
const pdfBtn = document.getElementById("pdfBtn");

const previewSection = document.getElementById("previewSection");

let students = [];

let selectedStudent = null;

// ======================================================
// LOAD DATABASE
// ======================================================

async function loadDatabase() {

    loader.style.display = "block";

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to load database");
        }

        students = await response.json();

        console.log("Database Loaded");

        console.table(students);

    }

    catch (err) {

        console.error(err);

        alert("Unable to connect with database.");

    }

    finally {

        loader.style.display = "none";

    }

}

loadDatabase();


// ======================================================
// SEARCH
// ======================================================

searchBtn.addEventListener("click", searchStudent);

searchInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        searchStudent();

    }

});

function searchStudent() {

    const value = searchInput.value.trim();

    if (value === "") {

        alert("Enter Mobile, Certificate ID or Enrolment Number");

        return;

    }

    selectedStudent = students.find(student =>

        String(student.Mobile).trim() === value ||

        String(student.Certificate_ID).trim() === value ||

        String(student.Enrolment_Number).trim() === value

    );

    if (!selectedStudent) {

        resultCard.style.display = "none";

        previewSection.style.display = "none";

        alert("Certificate Not Found");

        return;

    }

    showStudent();

}


// ======================================================
// SHOW STUDENT
// ======================================================

function showStudent() {

    studentName.textContent = selectedStudent.Name;

    college.textContent = selectedStudent.College;

    branch.textContent = selectedStudent.Branch;

    year.textContent = selectedStudent.Year;

    enrolment.textContent = selectedStudent.Enrolment_Number;

    domain.textContent = selectedStudent.Domain;

    duration.textContent = selectedStudent.Duration;

    grade.textContent = selectedStudent.Grade;

    certificateId.textContent = selectedStudent.Certificate_ID;

    resultCard.style.display = "block";

}


// ======================================================
// CLEAR RESULT
// ======================================================

searchInput.addEventListener("input", () => {

    resultCard.style.display = "none";

    previewSection.style.display = "none";

});

console.log("Script Part 1 Loaded");

// ======================================================
// PART 2
// CANVAS + IMAGES + PREVIEW
// ======================================================

const canvas = document.getElementById("certificateCanvas");
const ctx = canvas.getContext("2d");

const certificateImage = new Image();
const signImage = new Image();
const stampImage = new Image();

certificateImage.src = "assets/certificate.png";
signImage.src = "assets/sign.png";
stampImage.src = "assets/stamp.png";

let certificateLoaded = false;
let signLoaded = false;
let stampLoaded = false;

certificateImage.onload = () => {

    certificateLoaded = true;

    console.log("Certificate Loaded");

};

signImage.onload = () => {

    signLoaded = true;

    console.log("Signature Loaded");

};

stampImage.onload = () => {

    stampLoaded = true;

    console.log("Stamp Loaded");

};

// ======================================================
// AUTO FONT SIZE
// ======================================================

function getFontSize(text, maxSize) {

    if (!text) return maxSize;

    if (text.length <= 20) return maxSize;

    if (text.length <= 30) return maxSize - 4;

    if (text.length <= 40) return maxSize - 8;

    if (text.length <= 50) return maxSize - 12;

    return maxSize - 16;

}

// ======================================================
// TEXT
// ======================================================

function writeText(text, x, y, size, color = "#143A8C", align = "center") {

    ctx.fillStyle = color;

    ctx.textAlign = align;

    ctx.font = `600 ${size}px Poppins`;

    ctx.fillText(text, x, y);

}

// ======================================================
// PREVIEW BUTTON
// ======================================================

previewBtn.addEventListener("click", () => {

    if (!selectedStudent) {

        alert("Search Certificate First");

        return;

    }

    if (!certificateLoaded) {

        alert("Certificate Image Not Loaded");

        return;

    }

    previewSection.style.display = "block";

    drawCertificate();

});

// ======================================================
// CLEAR CANVAS
// ======================================================

function clearCanvas() {

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

}

// ======================================================
// BACKGROUND
// ======================================================

function drawBackground() {

    clearCanvas();

    ctx.drawImage(

        certificateImage,

        0,

        0,

        canvas.width,

        canvas.height

    );

}

// ======================================================
// REDRAW
// ======================================================

window.addEventListener("resize", () => {

    if (selectedStudent) {

        drawCertificate();

    }

});

console.log("Script Part 2 Loaded");

// ======================================================
// PART 3
// DRAW CERTIFICATE
// ======================================================

function drawCertificate() {

    drawBackground();

   // ============================
// NAME
// ============================

ctx.save();

ctx.textAlign = "center";

ctx.textBaseline = "middle";

ctx.fillStyle = "#143A8C";

ctx.font = `bold ${getFontSize(selectedStudent.Name, 52)}px "Times New Roman"`;

ctx.fillText(
    selectedStudent.Name,
    544,
    725
);

ctx.restore();
    
    // ============================
    // COLLEGE
    // ============================

    writeText(

        selectedStudent.College,

        544,

        770,

        getFontSize(selectedStudent.College,22),

        "#333"

    );

    // ============================
    // BRANCH + YEAR
    // ============================

writeText(selectedStudent.Branch,520,892,20);
writeText(selectedStudent.Year,725,892,20);


    // ============================
    // ENROLMENT NUMBER
    // ============================

    writeText(selectedStudent.Enrolment_Number,705,1400,20);

    // ============================
    // DOMAIN + DURATION
    // ============================

writeText(selectedStudent.Duration,387,970,20);
writeText(selectedStudent.Domain,760,970,20);

    // ============================
    // START DATE + END DATE
    // ============================

   writeText(formatDate(selectedStudent.Start_Date),455,1045,20);

writeText(formatDate(selectedStudent.End_Date),685,1045,20);

    function formatDate(value){

    const date = new Date(value);

    if(isNaN(date)) return value;

    return date.toLocaleDateString("en-GB",{
        day:"2-digit",
        month:"long",
        year:"numeric"
    });

}

    // ============================
    // GRADE
    // ============================

    writeText(selectedStudent.Grade,610,1335,28);

    // ============================
    // CERTIFICATE ID
    // ============================

    ctx.textAlign = "left";

    ctx.fillStyle = "#143A8C";

    ctx.font = "18px Poppins";

    ctx.fillText(

        selectedStudent.Certificate_ID,

        900,

        78

    );

    // ============================
    // DATE
    // ============================

    ctx.fillText(

        selectedStudent.End_Date,

        120,

        275

    );

    // ============================
    // SIGNATURE
    // ============================

    if(signLoaded){

        ctx.drawImage(

            signImage,

            700,

            1245,

            160,

            80

        );

    }

    // ============================
    // STAMP
    // ============================

    if(stampLoaded){

        ctx.globalAlpha = 0.92;

        ctx.drawImage(

            stampImage,

            760,

            1185,

            170,

            170

        );

        ctx.globalAlpha = 1;

    }

}

// ======================================================
// PART 4
// DOWNLOAD PNG
// ======================================================

pngBtn.addEventListener("click", () => {

    if (!selectedStudent) {

        alert("Please search a certificate first.");

        return;

    }

    drawCertificate();

    const link = document.createElement("a");

    link.download =
    `${selectedStudent.Certificate_ID}.png`;

    link.href = canvas.toDataURL("image/png",1);

    link.click();

});

// ======================================================
// DOWNLOAD PDF
// ======================================================

pdfBtn.addEventListener("click", () => {

    if (!selectedStudent) {

        alert("Please search a certificate first.");

        return;

    }

    drawCertificate();

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF({

        orientation: "portrait",

        unit: "px",

        format: [1088,1536]

    });

    pdf.addImage(

        canvas.toDataURL("image/png",1),

        "PNG",

        0,

        0,

        1088,

        1536

    );

    pdf.save(

        `${selectedStudent.Certificate_ID}.pdf`

    );

});

// ======================================================
// CLEAR PREVIEW
// ======================================================

searchInput.addEventListener("input",()=>{

    previewSection.style.display="none";

});

// ======================================================
// IMAGE PRELOAD CHECK
// ======================================================

window.addEventListener("load",()=>{

    console.log("Indigo Trainings");

    console.log("Certificate Portal Ready");

    console.log("Waiting for Search...");

});

// ======================================================
// DEBUG MODE
// ======================================================

function debugStudent(){

    console.table(selectedStudent);

}

// Browser Console me
// debugStudent()

// ======================================================
// OPTIONAL
// CTRL + P  PDF
// CTRL + G  PNG
// ======================================================

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="p"){

        e.preventDefault();

        pdfBtn.click();

    }

    if(e.ctrlKey && e.key==="g"){

        e.preventDefault();

        pngBtn.click();

    }

});

// ======================================================
// FINISHED
// ======================================================

console.log("====================================");

console.log("INDIGO TRAININGS");

console.log("Certificate Verification Portal");

console.log("Project Loaded Successfully");

console.log("====================================");
