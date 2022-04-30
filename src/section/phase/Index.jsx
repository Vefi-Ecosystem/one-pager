import React from 'react';
import { PhaseWrapper } from '../../components/Header/Header.style';
import Section from '../../components/Section';
import { Typography } from '../../GlobalStyle';

const Phase = () => {
  return (
    <PhaseWrapper>
      <Section>
        <div className="container">
          <Typography as="h1" fontSize="2.5rem">
            Our Roadmap
          </Typography>
          <div className="phase__container">
            <div className="phase">
              <div className="wrapper">
                <div className="title">Phase 1</div>
                <div className="desc">
                  Core Ecosystem Development &amp; Product Development
                </div>
              </div>
            </div>
            <div className="phase">
              <div className="wrapper">
                <div className="title">Phase 2</div>
                <div className="desc">Strategic Partnerships</div>
              </div>
            </div>
            <div className="phase">
              <div className="wrapper">
                <div className="title">Phase 3</div>
                <div className="desc">Token Sale &amp; Launch</div>
              </div>
            </div>
            <div className="phase">
              <div className="wrapper">
                <div className="title">Phase 4</div>
                <div className="desc">Token Listing</div>
              </div>
            </div>
            <div className="phase">
              <div className="wrapper">
                <div className="title">Phase 5</div>
                <div className="desc">
                  Wallet &amp; NFT Marketplace Launch Alterverse Development
                </div>
              </div>
            </div>
            <div className="phase">
              <div className="wrapper">
                <div className="title">Phase 6</div>
                <div className="desc">
                  Official Launch &amp; Scaling Of Subsidiaries
                </div>
              </div>
            </div>
            <div className="phase">
              <div className="wrapper">
                <div className="title">Phase 7</div>
                <div className="desc">Updates on whitepaper</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PhaseWrapper>
  );
};

export default Phase;
