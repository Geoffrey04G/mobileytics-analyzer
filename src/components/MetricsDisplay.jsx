import React from 'react';

export default function MetricsDisplay({ metrics }) {
  if (!metrics) return null;

  return (
    <div className="metrics-wrapper">
      <div className="metrics-grid">
        {Object.entries(metrics).map(([name, value]) => {
          if (name === 'score') return null;
          return (
            <div className="metric-card" key={name}>
              <h2>{name}</h2>
              <p className="metric-value">{value}</p>
              <p className="metric-desc">
                {name === 'LCP' && 'Largest Contentful Paint'}
                {name === 'FID' && 'First Input Delay'}
                {name === 'CLS' && 'Cumulative Layout Shift'}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}