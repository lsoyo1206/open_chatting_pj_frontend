import './App.css';
import React, {useState, useEffect} from "react";
// react 부트스트랩 사용시 import
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    // 백단 호출
    fetch("/api/hello")
        .then((res) => {return res.json();})
        .then((data) => {setMsg(data);})
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <ul>
          {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)}
        </ul> */}
      <div>
         <h1>첫화면 입니다.</h1>
      </div>
      </header>
    </div>
  );
}

export default App;
