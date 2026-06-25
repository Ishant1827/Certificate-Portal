# Indigo Trainings Certificate Verification Portal

A professional Certificate Verification and Generator Portal developed for Indigo Trainings.

Students can verify and download their Summer Training Certificates using their Mobile Number, Certificate ID, or Enrolment Number.

---

## Features

- Search by Mobile Number
- Search by Certificate ID
- Search by Enrolment Number
- Live Certificate Preview
- Download Certificate as PNG
- Download Certificate as PDF
- Google Spreadsheet Database
- Google Apps Script Integration
- Responsive Design
- Canvas-Based Certificate Generation
- Professional Certificate Verification

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Google Sheets
- Google Apps Script
- HTML5 Canvas API
- jsPDF
- Font Awesome

---

## Project Structure

```text
Certificate-Generator/

│── index.html
│── style.css
│── script.js
│── README.md

└── assets/
    │── logo.png
    │── certificate.png
    │── sign.png
    │── stamp.png
```

---

## Google Spreadsheet Columns

```text
Mobile
Name
College
Branch
Year
Enrolment_Number
Domain
Duration
Start_Date
End_Date
Grade
Certificate_ID
```

---

## Google Apps Script Configuration

Deploy the Apps Script as a Web App.

### Deployment Settings

```text
Execute As:
Me

Who Has Access:
Anyone
```

Copy the generated Web App URL and paste it into the following variable inside `script.js`:

```javascript
const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL";
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/certificate-generator.git
```

### 2. Open the Project Folder

### 3. Add Required Assets

```text
assets/
│── certificate.png
│── logo.png
│── sign.png
│── stamp.png
```

### 4. Configure Google Spreadsheet

Create a Google Spreadsheet with the required columns.

### 5. Deploy Google Apps Script

Deploy it as a Web App and copy the generated URL.

### 6. Update API URL

Open `script.js` and replace:

```javascript
const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL";
```

with your deployed Web App URL.

### 7. Run the Project

Open `index.html` in your browser.

---

## Project Workflow

```text
Google Spreadsheet
        │
        ▼
Google Apps Script
        │
        ▼
Certificate Verification Portal
        │
        ▼
Search Student
        │
        ▼
Certificate Preview
        │
        ├── Download PNG
        └── Download PDF
```

---

## Future Enhancements

- QR Code Verification
- Admin Dashboard
- Student Management Panel
- Bulk Certificate Generation
- Email Certificate
- Certificate Expiry Verification
- Analytics Dashboard
- Login System

---

## Developer

**Ishant Srivastava**

Diploma in Information Technology

Government Polytechnic Ghaziabad

---

## Contact

**Indigo Trainings**

Email: indigo.trainings.services@gmail.com

Website: https://www.IndigoTrainings.com

Phone: +91-7827477127

Location: Ghaziabad, Uttar Pradesh, India

---

## License

This project is developed exclusively for Indigo Trainings.

Unauthorized copying, redistribution, modification, or commercial use without permission is prohibited.

© 2026 Indigo Trainings. All Rights Reserved.
