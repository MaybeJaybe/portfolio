import SinglePagePDFViewer from "./ResumeHandler";
import MayberryResume from "../MayberryResume.pdf";
import './Resume.css';

function Resume() {
  return (
    <div className="Resume">
      <SinglePagePDFViewer pdf={MayberryResume} />
    </div>
  )
}
export default Resume