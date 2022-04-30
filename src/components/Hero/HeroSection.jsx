import React from 'react';
import { Typography } from '../../GlobalStyle';
import { Column, HeroSectionWrapper } from '../Header/Header.style';
import Image from '../Image';
import Section from '../Section';
import Presale from '../../images/presale.jpeg';
import Button from '../Button';
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
              <a
                href="https://thesphynx.co/launchpad/live/33/32520"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  label="Participate in our Pre-sale"
                  bg="transparent"
                  border="1px solid blue"
                  borderRadius="8px"
                />
              </a>
            </Column>
            <Column flex="0.5">
              <div className="imageWrapper">
                <a
                  href="https://thesphynx.co/launchpad/live/33/32520"
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
