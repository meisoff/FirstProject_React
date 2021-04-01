import './App.scss';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

function App() {
  return (
      <div class="page" id="page">
        <Header />
        <Sidebar />

          <main className="main">
              <div className="container">
                  <Body page="home" />
              </div>
          </main>
      </div>
  );
}

export default App;
