// pdfPlugin.js

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const createPDF = async (content) => {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 30;
  page.drawText(content, {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });
  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
};

export default createPDF;
