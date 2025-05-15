import React from 'react';

export default function SpeedScoreRing({ score = 85 }) {
  const radius = 45;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="metric-card">
      <h2>Speed Score</h2>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="speed-ring"
      >
        <circle
          stroke="#eee"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="var(--primary-color)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={offset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="1.2rem"
          fill="var(--text-color)"
          fontWeight="bold"
        >
          {score}
        </text>
      </svg>
      <p className="metric-desc">Overall Performance</p>
    </div>
  );
}
