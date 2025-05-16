import React, { useState } from 'react';
import { Block } from 'baseui/block';
import { HeadingMedium, ParagraphMedium } from 'baseui/typography';
import AnalyzeForm from '../components/AnalyzeForm';
import MetricsDisplay from '../components/MetricsDisplay';
import SpeedScoreRing from '../components/SpeedScoreRing';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [metrics, setMetrics] = useState(null);

  return (
    <>
      <Header />
      <Block
        padding="scale600"
        maxWidth="1000px"
        width="100%"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        overrides={{
          Block: {
            style: {
              minHeight: "calc(100vh - 120px)",
              padding: "1rem"
            }
          }
        }}
      >
        <HeadingMedium marginBottom="scale600" $style={{ textAlign: 'center' }}>
          Welcome to Mobilytics Analyzer
        </HeadingMedium>

        <ParagraphMedium
          marginBottom="scale800"
          $style={{ textAlign: 'center', maxWidth: '600px' }}
        >
          Analyze your mobile website's performance with real Google Web Vitals metrics.
        </ParagraphMedium>

        <AnalyzeForm onAnalyzeComplete={setMetrics} />
        
        {metrics && (
          <>
            <SpeedScoreRing score={metrics.score} />
            <MetricsDisplay metrics={metrics} />
          </>
        )}
      </Block>
      <Footer />
    </>
  );
}