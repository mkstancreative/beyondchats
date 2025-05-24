//  import "./App.css";
import Admin from "./Pages/Admin";
// import Admin from "./Pages/Admin";

function App() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Admin />
      {/* <div className="admin_wrapper">
      <div className={`admin_left ${sidebarOpen ? 'active' : ''}`}>
        <button className="close_btn" onClick={() => setSidebarOpen(false)}>✕</button>
        <p>Sidebar Content</p>
      </div>

      <div className="admin_center">
        <button className="toggle_btn" onClick={() => setSidebarOpen(true)}>☰</button>
        <p>Main content here</p>
      </div>
    </div> */}
    </>
  );
}

export default App;
