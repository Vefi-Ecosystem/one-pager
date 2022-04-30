import React from 'react';
import { Column, TokenWrapper } from '../../components/Header/Header.style';
import Section from '../../components/Section';
import { Typography } from '../../GlobalStyle';

const TokenDetails = () => {
  return (
    <>
      <TokenWrapper>
        <Section>
          <div className="container">
            <Column>
              <div className="token__details">
                <Typography as="h1" fontSize="1.5rem">
                  Token Details
                </Typography>
                <div className="info">
                  <span>Contract Address: </span>
                  <span>0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2</span>
                </div>

                <div className="info">
                  <span>Name:</span>
                  <span>Vefi Ecosystem Token</span>
                </div>
                <div className="info">
                  <span>Total Supply:</span>
                  <span>500,000,000</span>
                </div>
                <div className="info">
                  <span>Tracker:</span>
                  <span>VEF</span>
                </div>
                <div className="info">
                  <span>Decimals:</span>
                  <span>18</span>
                </div>
                <div className="info">
                  <span>Blockchain:</span>
                  <span>Bitgert chain</span>
                </div>
              </div>
            </Column>
            <Column>
              <Typography as="h1" fontSize="1.5rem">
                Token Utility
              </Typography>
              <div className="token__utility">
                <ul>
                  <li>
                    The primary token of the Vefi NFT Marketplace and the Vefi
                    Pay.
                  </li>
                  <li>
                    {' '}
                    A means of payment for our BNaaS (Blockchain Nodes As A
                    Service).
                  </li>
                  <li>
                    Governance and reward token for DAOs built around the
                    ecosystem.
                  </li>
                  <li>Use on the CEX.</li>
                </ul>
              </div>
            </Column>
          </div>
        </Section>
      </TokenWrapper>
    </>
  );
};

export default TokenDetails;
