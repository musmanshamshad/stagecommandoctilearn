import { toPng, toJpeg, toPixelData } from "html-to-image";
import { jsPDF } from "jspdf";

export const downloadRef = (ref, type, label) => {
  console.log("ref", ref);
  // console.log("json", JSON.stringify(ref));
  toPng(ref.current, { cacheBust: true })
    .then((dataUrl) => {
      console.log("dataUrl", dataUrl);
      switch (type) {
        case "img": {
          const link = document.createElement("a");
          link.download = `${label}.png`;
          link.href = dataUrl;
          link.click();
          break;
        }

        case "pdf": {
          console.log("pdf");
          const pdfToDownload = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: "a4",
          });
          var width = pdfToDownload.internal.pageSize.getWidth();
          var height = pdfToDownload.internal.pageSize.getHeight();

          pdfToDownload.addImage(dataUrl, "PNG", 0, 0, 200, 0);
          // pdfToDownload.text(60, 60, dataUrl);
          pdfToDownload.addPage();
          pdfToDownload.save(`${label}.pdf`);

          break;
        }
        default: {
          throw Error("Invalid Type! Type must be 'img' or 'pdf'");
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
