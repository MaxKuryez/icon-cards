import { toPng } from "html-to-image";
import { downloadImage, downloadHTML } from "./utils";

const useExport = () => {

  const exportToPdf = (exportID) => {
    toPng(document.getElementById(exportID), {
      filter: (node) => {
        if (node?.classList?.contains("export-ignore")) return false;

        return true;
      },
    }).then((dataUrl) => downloadImage(dataUrl, exportID));
  };

  const exportToHTML = (exportID) => {
    downloadHTML(exportID);
  };

  return { exportToPdf, exportToHTML };
};

export default useExport;
