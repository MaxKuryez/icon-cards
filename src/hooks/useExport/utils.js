import { jsPDF } from "jspdf";

export const downloadImage = (dataUrl, exportID) => {
  const printingElement = document.getElementById(exportID);
  const width = 210;
  const height = 210 * printingElement.offsetHeight / printingElement.offsetWidth || 0;
  const exportPdf = new jsPDF();

  exportPdf.addImage(dataUrl, "PNG", 0, 0, width, height);
  exportPdf.save("cards.pdf");
};

export const downloadHTML = (exportID) => {
  const printingElement = document.getElementById(exportID);
  const a = document.createElement("a");
  
  a.href = "data:attachment/text," + encodeURI(printingElement.outerHTML);
  a.target = "_blank";
  a.download = "cards.html";
  a.click();
};
