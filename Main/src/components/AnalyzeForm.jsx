import { useState } from 'react';
import './AnalyzeForm.css';

export default function AnalyzeForm() {
  const [url, setUrl] = useState('');
  const [resultText, setResultText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultText(`Analyzing ${url}...`);
    // Placeholder for backend integration
  };

  return (
    <div className="analyzer-container">
      <h2>Analyze Website Performance</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Analyze</button>
      </form>
      <div className="result">{resultText}</div>
    </div>
  );
}