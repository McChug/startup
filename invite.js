
function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th'; // For 11th, 12th, and 13th
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

function reformatDate(originalDate) {
    // Parse the original date
    const dateObj = new Date(originalDate);

    // Get month name (mmm)
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const month = months[dateObj.getMonth()];

    // Get formatted date with suffix (dd)
    const dayOfMonth = dateObj.getDate();
    const daySuffix = getDaySuffix(dayOfMonth);
    const formattedDayOfMonth = dayOfMonth + daySuffix;

    // Get formatted hours (hh) and AM/PM indicator
    let hours = dateObj.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hours to 12-hour format
    const formattedHours = hours < 10 ? ' ' + hours : hours; // Add a space before single-digit hours
    const formattedHoursWithoutZero = hours === 0 ? 12 : formattedHours; // Convert 0 to 12

    // Get formatted minutes (mm)
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    // Construct the reformatted date string
    const reformattedDate = `${month} ${formattedDayOfMonth}`;
    const reformattedTime = `${formattedHoursWithoutZero}:${minutes} ${ampm}`

    return { reformattedDate, reformattedTime };
}


const { PDFDocument, rgb, StandardFonts } = PDFLib

async function populateInvite() {

    let date = document.getElementById('date').value;
    let where = document.getElementById('where').value;

    let { reformattedDate, reformattedTime } = reformatDate(date);
    where = where.toUpperCase();
    let whereP1 = '';
    let whereP2 = '';
    if (where.length > 15) {
        whereP1 = `${where.substring(0, 15)}-`;
        whereP2 = where.substring(15, 30);
    }
    const timeXcoord = reformattedTime[0] === '1' ? 25 : 5;

    // Fetch an existing PDF document
    const url = `mva_flyer.pdf`
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    // Embed the Helvetica font
    const courierFont = await pdfDoc.embedFont(StandardFonts.CourierBold)

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize()

    // Draw a string of text diagonally across the first page
    firstPage.drawText(`${reformattedDate}`, {
        x: 25,
        y: height - 410,
        size: 32,
        font: courierFont,
        color: rgb(0.996, 0.8745, 0.7412),
    })
    firstPage.drawText(`${reformattedTime}`, {
        x: timeXcoord,
        y: height - 490,
        size: 32,
        font: courierFont,
        color: rgb(0.996, 0.8745, 0.7412),
    })
    if (where.length > 15) {
        firstPage.drawText(`${whereP1}`, {
            x: 25,
            y: height - 570,
            size: 32,
            font: courierFont,
            color: rgb(0.996, 0.8745, 0.7412),
        })
        firstPage.drawText(`${whereP2}`, {
            x: 25,
            y: height - 600,
            size: 32,
            font: courierFont,
            color: rgb(0.996, 0.8745, 0.7412),
        })
    } else {
        firstPage.drawText(`${where}`, {
            x: 25,
            y: height - 570,
            size: 32,
            font: courierFont,
            color: rgb(0.996, 0.8745, 0.7412),
        })
    }

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

    // Trigger the browser to download the PDF document
    download(pdfBytes, "mixtapes_vs_aliens.pdf", "application/pdf");
}
