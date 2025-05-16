import React, { useState } from 'react'; 

export default function AnalyzeForm({ onAnalyzeComplete }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'AIzaSyDUpwgbQFs4T6wMDvu4Gzyzq-Je-8jx2NA'; // Keep this safe in real apps

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'API error occurred');
      }

      const lcp = data.lighthouseResult.audits['largest-contentful-paint'].displayValue;
      const fid = data.lighthouseResult.audits['max-potential-fid'].displayValue;
      const cls = data.lighthouseResult.audits['cumulative-layout-shift'].displayValue;

      const score = data.lighthouseResult.categories.performance.score * 100;

      onAnalyzeComplete({ LCP: lcp, FID: fid, CLS: cls, score });
    } catch (err) {
      console.error(err);
      setError('Failed to fetch performance data. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="analyzer-container">
      <h2>Analyze Website Performance</h2>
      <form onSubmit={handleAnalyze}>
        <input
          type="url"
          placeholder="Enter full website URL (https://...)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && (
        <div className="loader" aria-label="Loading animation">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      )}
    </div>
  );
}