import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const generateCertificates = async({templateUrl,textData}) => {
    console.log(templateUrl);
    const existingPdfBytes = await fetch(templateUrl).then(res => res.arrayBuffer());
    
    //load PDF
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    //Load Font
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    //adjusting of position and size
    for (const { text, x, y, size = 24, color = rgb(0, 0, 0) } of textData) {
        firstPage.drawText(text, {
            x,
            y,
            size,
            font,
            color
        });
    }

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);

    return blobUrl;
};