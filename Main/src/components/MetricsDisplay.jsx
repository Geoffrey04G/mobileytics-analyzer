import React, { useEffect, useState } from 'react';

const MetricsDisplay = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    import('web-vitals').then(({ getLCP, getFID, getCLS }) => {
      const temp = {};
      let count = 0;

      const collect = (name, value) => {
        temp[name] = value;
        count++;
        if (count === 3) {
          setMetrics(temp);
        }
      };

      getLCP((m) => collect('LCP', `${(m.value / 1000).toFixed(2)}s`));
      getFID((m) => collect('FID', `${m.value.toFixed(0)}ms`));
      getCLS((m) => collect('CLS', m.value.toFixed(2)));
    });
  }, []);

  return (
    <div className="metrics-wrapper">
      {!metrics ? (
        <div className="loader">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <p>Measuring performance...</p>
        </div>
      ) : (
        <div className="metrics-grid">
          {Object.entries(metrics).map(([name, value]) => (
            <div className="metric-card" key={name}>
              <h2>{name}</h2>
              <p className="metric-value">{value}</p>
              <p className="metric-desc">
                {name === 'LCP' && 'Largest Contentful Paint'}
                {name === 'FID' && 'First Input Delay'}
                {name === 'CLS' && 'Cumulative Layout Shift'}
              </p>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .metrics-wrapper {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .metrics-grid {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .metric-card {
          background-color: var(--card-bg);
          color: var(--text-color);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 1.5rem;
          width: 220px;
          text-align: center;
          transition: background 0.3s ease;
        }

        .metric-card h2 {
          margin-bottom: 0.5rem;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: bold;
          color: #d32f2f;
        }

        .metric-desc {
          font-size: 0.9rem;
          color: var(--desc-color);
        }

        .loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          margin: 0 5px;
          border-radius: 50%;
          background-color: #d32f2f;
          animation: bounce 1s infinite ease-in-out;
          display: inline-block;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        /* Dark/light theme vars */
        :root {
          --card-bg: #fff;
          --text-color: #111;
          --desc-color: #555;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --card-bg: #1e1e1e;
            --text-color: #f1f1f1;
            --desc-color: #aaa;
          }
        }
      `}</style>
    </div>
  );
};

export default MetricsDisplay;
