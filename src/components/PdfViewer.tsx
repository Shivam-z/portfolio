import resume from "../assets/shivam_resume.pdf";

const PDFViewer = () => {
  return (
    <div>
      <iframe src={resume} width="100%" height="800px" />
    </div>
  );
};
export default PDFViewer;
