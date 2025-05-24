import "./ReceivedMessage.css";
function ReceivedMessage() {
  return (
    <>
      <div className="received_message">
        <div>L</div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et
            tempora quisquam natus. Laborum, quis non sequi, magnam harum,
            soluta culpa autem voluptas velit quas eligendi ipsa labore nesciunt
            debitis!
          </p>
          <span>
            {" "}
            <i className="ri-chat-4-fill"></i> 2mins
          </span>
        </div>
      </div>
    </>
  );
}

export default ReceivedMessage;
