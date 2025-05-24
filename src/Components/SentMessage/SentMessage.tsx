import "./SentMessage.css";
import user from "../../Pages/assets/images/user.jpg";

function SentMessage() {
  return (
    <>
      <div className="sent_message">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et
          </p>
          <div>
            <span>seen</span>
            <span>1min</span>
          </div>
        </div>
        <div className="sent_message_user">
          <img src={user} alt="" />
        </div>
      </div>
    </>
  );
}

export default SentMessage;
