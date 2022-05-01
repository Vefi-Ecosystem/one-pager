import React from 'react';
import { Typography } from '../../GlobalStyle';
import { Column, HeroSectionWrapper } from '../Header/Header.style';
import Image from '../Image';
import Section from '../Section';
import Presale from '../../images/presale.jpeg';
import Button from '../Button';
import WhitePaper from '../../assets/VEFI_WHITEPAPER.pdf';
const HeroSection = () => {
  return (
    <>
      <HeroSectionWrapper>
        <Section>
          <div className="container">
            <Column flex="0.5">
              <Typography as="h1" fontSize="4rem" lineHeight="4rem">
                Who we are
              </Typography>
              <Typography
                as="p"
                margin="10px 0 0 10px"
                lineHeight="1.8rem"
                fontSize="0.9rem"
              >
                Vefi Ecosystem is a paradigm shifting blockchain infrastructure
                and solutions providing firm which aims to drive the adoption of
                blockchain technology through the freedom of money which would
                be realized through its various products and services. Vefi aims
                to be the standard for trustless and permissionless technology.
              </Typography>
              <Typography
                as="p"
                margin="10px 0 0 10px"
                lineHeight="1.8rem"
                fontSize="0.9rem"
              >
                Our cardinal focus is to build the future of DeFi, NFT and the
                Web3 ecosphere at large. We have raised subsidiaries like 3Swap
                DEX and Crypto Times TV which are a revolutionary DEX and a
                crypto media agent respectively.
              </Typography>
              <div className="btn__wrapper">
                <a href={WhitePaper} target="_blank" rel="noreferrer">
                  <Button
                    label="Read our whitepaper"
                    bg="transparent"
                    border="1px solid blue"
                    borderRadius="8px"
                    hoverBg="blue"
                    hoverColor="#fff"
                  />
                </a>
                <a
                  href="https://thesphynx.co/swap/32520/0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    label="BUY Vefi Ecosystem Token"
                    border="1px solid blue"
                    borderRadius="8px"
                    bg="blue"
                    color="#fff"
                    hoverBg="transparent"
                    hoverColor="#000"
                  />
                </a>
              </div>
            </Column>
            <Column flex="0.5">
              <div className="imageWrapper">
                <a
                  href="https://thesphynx.co/swap/32520/0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image img={Presale} alt="vefi presale" />
                </a>
              </div>
            </Column>
          </div>
        </Section>
      </HeroSectionWrapper>
    </>
  );
};

export default HeroSection;
