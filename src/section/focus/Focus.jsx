import React from 'react';
import { Column, FocusWrapper } from '../../components/Header/Header.style';
import Section from '../../components/Section';
import { Typography } from '../../GlobalStyle';

const Focus = () => {
  return (
    <>
      <FocusWrapper>
        <Section>
          <div className="container">
            <Column flex="0.8">
              <div className="focus">
                <Typography as="h1" fontSize="3.5rem">
                  Our Focus
                </Typography>
                <Typography as="p">
                  Our cardinal focus is to build the future of DeFi, NFT and the
                  Web3 ecosphere at large. We have raised subsidiaries like
                  3Swap DEX and Crypto Times TV which are a revolutionary DEX
                  and a crypto media agent respectively.
                </Typography>
              </div>
            </Column>
          </div>
        </Section>
      </FocusWrapper>
    </>
  );
};

export default Focus;
