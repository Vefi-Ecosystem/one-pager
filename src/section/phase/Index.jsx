import React from 'react';
import { PhaseWrapper } from '../../components/Header/Header.style';
import Section from '../../components/Section';
import { Typography } from '../../GlobalStyle';

const Phase = () => {
  return (
    <PhaseWrapper>
      <Section>
        <div className="container">
          <Typography as="h1">Our Roadmap</Typography>
          <div className="phase__container">
            <div className="phase">
              <span>Phase 1</span>
              <span>Core Ecosystem Development &amp; Product Development</span>
            </div>
            <div className="phase">
              <span>Phase 2</span>
              <span>Strategic Partnerships</span>
            </div>
            <div className="phase">
              <span>Phase 3</span>
              <span>Token Sale &amp; Launch</span>
            </div>
            <div className="phase">
              <span>Phase 4</span>
              <span>Token Listing</span>
            </div>
            <div className="phase">
              <span>Phase 5</span>
              <span>
                Wallet &amp; NFT Marketplace Launch Alterverse Development
              </span>
            </div>
            <div className="phase">
              <span>Phase 6</span>
              <span>Official Launch &amp; Scaling Of Subsidiaries</span>
            </div>
            <div className="phase">
              <span>Phase 7</span>
              <span>Updates on whitepaper</span>
            </div>
          </div>
        </div>
      </Section>
    </PhaseWrapper>
  );
};

export default Phase;
