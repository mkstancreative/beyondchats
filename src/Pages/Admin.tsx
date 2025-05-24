import "./assets/style.css";
import MessageList from "../Components/MessageList/MessageList";
import ReceivedMessage from "../Components/ReceivedMessage/ReceivedMessage";
import SentMessage from "../Components/SentMessage/SentMessage";
import { useState } from "react";
import Copilot from "../Components/Copilot/Copilot";
import Details from "../Components/Details/Details";

function Admin() {
  const [chatEntry, setChatEntry] = useState("");
  const [activeTab, setActiveTab] = useState("tab1");
  const [closeCopilot, setCloseCopilot] = useState(false);
  const [toggleMessageList, setToggleMessageList] = useState(false);
  const [toggleCopilot, setToggleCopilot] = useState(false);

  const handleChatEntry = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatEntry(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className={`admin_left ${toggleMessageList ? "active" : ""}`}>
          <div className="admin_left_nav">
            <h3>Your Inbox</h3>
            <span>
              <i
                className="ri-star-s-line"
                onClick={() => setToggleMessageList(false)}
              ></i>
            </span>
          </div>
          <div className="admin_left_message_list">
            <div>
              <span>5</span>
              <span>open</span>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <div className="">
              <span>Waiting Longest</span>
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
          <MessageList />
          <MessageList />
          <MessageList />
          <MessageList />
          <MessageList />
          <MessageList />
          <div className="admin_left_icon">
            <i className="ri-layout-column-fill"></i>
            <i className="ri-align-justify"></i>
          </div>
        </div>
        <div className="admin_center ">
          <div className="admin_center_nav">
            {toggleMessageList ? (
              " "
            ) : (
              <span
                className="open_messageList"
                onClick={() => setToggleMessageList(true)}
              >
                <i className="ri-bar-chart-horizontal-fill"></i>
              </span>
            )}
            <h3>Name of User</h3>
            <div>
              <div>
                <i className="ri-more-line"></i>
              </div>
              <div>
                <i className="ri-moon-clear-fill"></i>
              </div>
              {closeCopilot ? (
                <i
                  className="ri-layout-left-fill"
                  onClick={() => setCloseCopilot(false)}
                ></i>
              ) : (
                ""
              )}
              {toggleMessageList ? (
                ""
              ) : (
                <i
                  className="ri-layout-left-fill toggle_icon"
                  onClick={() => setToggleCopilot(true)}
                ></i>
              )}
              <div className="admin_center_nav_icon">
                <i className="ri-ticket-2-fill"></i>
                Close
              </div>
            </div>
          </div>
          <div>
            <ReceivedMessage />
            <SentMessage />
          </div>
          <div className="admin_center_inbox">
            <form action="">
              <div>
                <i className="ri-message-2-fill"></i>
                <span>Chat</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <textarea
                placeholder="Use CtrlK for shortcuts"
                className="chat_inbox"
                value={chatEntry}
                onChange={handleChatEntry}
              ></textarea>
              <div>
                <div>
                  <i className="ri-flashlight-fill"></i>
                  <i className="ri-bookmark-fill"></i>
                  <i className="ri-image-circle-fill"></i>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`submit_btn ${
                      chatEntry.trim() !== "" ? "active" : ""
                    }`}
                  >
                    <span>send</span>{" "}
                    <i className="ri-arrow-down-s-line chat_inbox_icon"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`admin_right ${closeCopilot ? "active" : ""} ${
            toggleCopilot ? "collapse" : ""
          } `}
        >
          <div className="admin_right_nav">
            <ul>
              <li>
                <button
                  onClick={() => setActiveTab(`tab1`)}
                  className={` admin_right_nav_tab ${
                    activeTab === "tab1" ? "active" : ""
                  }`}
                >
                  Ai Copilot
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("tab2")}
                  className={` admin_right_nav_tab ${
                    activeTab === "tab2" ? "active" : ""
                  }`}
                >
                  Details
                </button>
              </li>
            </ul>
            <div>
              <i
                className="ri-layout-left-fill"
                onClick={() => setCloseCopilot(true)}
              ></i>
            </div>
          </div>
          <div className="admin_right_block">
            {activeTab === "tab1" && <Copilot />}
            {activeTab === "tab2" && <Details />}
          </div>
        </div>
      </div>
    </>
  );
}
export default Admin;
