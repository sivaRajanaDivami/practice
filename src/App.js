import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div style={{ height: "50px", background: "red" }}>
        <Link to="page1">
          <button>Page 1</button>
        </Link>
        <Link to="page2">
          <button>Page 2</button>
        </Link>
        {[3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <Link to={`page/${item}`}>
              <button>Page {item}</button>
            </Link>
          )
        })
        }
      </div>

    </div>
  );
}

export default App;
