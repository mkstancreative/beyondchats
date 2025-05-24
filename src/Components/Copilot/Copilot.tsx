import "./Copilot.css";
function Copilot() {
  return (
    <>
      <div className="copilot_container">
        <div className="copilot_block1">
          <i className="ri-voice-recognition-fill"></i>
          <h3>Hi, I'm Fin AI Copilot</h3>
          <p>Ask me about anything in this conversation</p>
        </div>
        <div className="copilot_block2">
          <p>
            <b>Suggested</b> How do i get refund
          </p>
          <div>
            <input type="text" placeholder="Ask a Question...." />
            <span>
              <i className="ri-arrow-up-line"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Copilot;
