import React, { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function App() {
  const [wordCounts, setWordCounts] = useState([]);
  const [csvData, setCsvData] = useState("");

  const fetchWordCounts = async () => {
    try {
      const response = await axios.get(
        "https://www.terriblytinytales.com/test.txt"
      );
      const text = response.data.toLowerCase();
      const words = text.match(/[a-z]+/g);
      const counts = {};
      words.forEach((word) => {
        counts[word] = counts[word] ? counts[word] + 1 : 1;
      });
      const sortedCounts = Object.entries(counts).sort(
        (a, b) => b[1] - a[1]
      );
      const topCounts = sortedCounts.slice(0, 20);
      setWordCounts(topCounts);
      setCsvData(
        topCounts.map(([word, count]) => `${word},${count}`).join("\n")
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + csvData;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "word_freq.csv");
    document.body.appendChild(link);
    link.click();
  };
  const myStyle = {border:'2px solid black',backgroundColor:'#5b9aa0', width:'20%', padding:'10px',borderRadius:'40px'}

  return (
    <div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'60px'}}>
      <button className="btn" onClick={fetchWordCounts} style={myStyle}>Submit</button>
    </div>
      {wordCounts.length > 0 && (
        <div >
          <div style={{backgroundColor:'black',width:'1600',height:'600'}}>
          <div style={{color:'black',border:'2px solid black',backgroundColor:'#f9d5e5', height:'40px', display:'flex', justifyContent:'center',alignItems:'center',borderRadius:'30px'}}>
            <h2 > ...THE 20 MOST OCCURING WORDS...</h2>
          </div>
          
          <BarChart
            width={1500}
            height={600}
            data={wordCounts}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            stroke="#fff" strokeWidth={2} 

            
          >
            
            <XAxis dataKey="0" tick={{ fill: 'white' }}/>
            <YAxis  tick={{ fill: 'white' }}/>
            <Tooltip />
            <Bar dataKey="1" fill="#123c71" />
          </BarChart>
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'40px'}}>
            <button className="btn" onClick={handleExport} style={myStyle}>Export</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;