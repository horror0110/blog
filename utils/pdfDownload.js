// utils/pdfDownload.js

/**
 * Динамик хэлбэрээр html2pdf library-г ачаалах
 * @returns {Promise<boolean>} Library амжилттай ачаалагдсан эсэх
 */
export const loadPdfLibrary = () => {
  return new Promise((resolve) => {
    // Хэрэв аль хэдийн ачаалагдсан бол
    if (window.html2pdf) {
      resolve(true);
      return;
    }

    // Script аль хэдийн DOM-д байгаа эсэхийг шалгах
    const existingScript = document.querySelector(
      'script[src*="html2pdf.bundle.min.js"]'
    );
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true));
      return;
    }

    // Шинэ script үүсгэх
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

/**
 * Resume-ийг PDF хэлбэрээр татах
 * @param {string} elementId - PDF болгох элементийн ID
 * @param {string} filename - Татах файлын нэр
 * @returns {Promise<void>}
 */
export const downloadResumeAsPdf = async (
  elementId = "resume-content",
  filename = "CV_Gan-Erdene_Ganbat.pdf"
) => {
  try {
    // Library ачаалах
    const isLoaded = await loadPdfLibrary();

    if (!isLoaded || !window.html2pdf) {
      alert("PDF library-г ачаалж чадсангүй. Дахин оролдоно уу.");
      return;
    }

    // Resume хуудас руу шилжих
    if (window.location.pathname !== "/resume") {
      window.location.href = "/resume";
      // Хуудас ачаалагдах хүртэл хүлээх
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Resume элементийг олох
    const element = document.getElementById(elementId);

    if (!element) {
      alert("Resume олдсонгүй Resume хуудас руу шилжинэ үү.");
      return;
    }

    // PDF тохиргоо
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // PDF үүсгэж татах
    await window.html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error("PDF татахад алдаа гарлаа:", error);
    alert("PDF татахад алдаа гарлаа. Дахин оролдоно уу.");
  }
};
