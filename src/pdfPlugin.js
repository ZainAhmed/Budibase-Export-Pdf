// pdfPlugin.js

import { PDFDocument, rgb } from "@pdf-lib/core";

const createPDF = async (content) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([400, 600]);

  page.drawText(content, {
    x: 50,
    y: page.getHeight() - 50,
    size: 30,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
};

export default createPDF;
