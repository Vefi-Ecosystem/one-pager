import React from 'react';
import { TokenInfoDetails } from '../../components/Header/Header.style';
import Section from '../../components/Section';
import { Typography } from '../../GlobalStyle';

const TokenInfo = () => {
  return (
    <TokenInfoDetails>
      <Section>
        <div className="container">
          <Typography as="h1" fontSize="2.0rem">
            Tokenomics
          </Typography>
          <div className="tokenomics">
            <div className="token">
              <span>35%</span>
              <span>
                Public <br />
                Presale
              </span>
            </div>
            <div className="token">
              <span>35%</span>
              <span>Liquidity</span>
            </div>
            <div className="token">
              <span>10%</span>
              <span>Team</span>
            </div>
            <div className="token">
              <span>5%</span>
              <span>
                Partnership <br />
                &amp; Advisor
              </span>
            </div>
            <div className="token">
              <span>15%</span>
              <span>
                Reserve <br />
                (Bitger)
              </span>
            </div>
          </div>
        </div>
      </Section>
    </TokenInfoDetails>
  );
};

export default TokenInfo;
