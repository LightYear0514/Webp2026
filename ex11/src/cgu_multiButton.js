import React from 'react';

// 定義點擊按鈕後的行為 [cite: 1050, 1054]
const changeText = (event) => {
  event.target.innerText = event.target.innerText + "被點了";
};

// 模擬 Material UI 樣式 [cite: 1165, 1308]
const buttonStyle = {
  backgroundColor: '#3f51b5',
  color: 'white',
  padding: '6px 16px',
  borderRadius: '4px',
  border: 'none',
  boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2)',
  cursor: 'pointer',
  margin: '5px'
};

const MultiButton = (num) => {
  var output = [];
  for (let i = 1; i <= num; i++) {
    output.push(
      <button key={i} style={buttonStyle} onClick={changeText}>
        第{i}個按鍵
      </button>
    );
  }
  return output; // 回傳按鍵陣列 [cite: 1060, 1065]
};

export default MultiButton; // 一定要匯出模組 [cite: 1189, 1313]