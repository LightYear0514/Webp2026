import './App.css';
import MultiButton from './cgu_multiButton'; // 引入模組 [cite: 1147]
import HelloCGU from './cgu_hello'; // 假設你之前已經寫好了這個 [cite: 1249]

function App() {
  return (
    <div className="App">
      <div>
        { HelloCGU() } {/* 呈現 hello CGU!! [cite: 1228] */}
      </div>
      <div>
        { MultiButton(1) } {/* 呈現可愛的 Material UI 按鈕 [cite: 1231, 1620] */}
      </div>
    </div>
  );
}

export default App;