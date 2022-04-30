import React from 'react';
import Image from '../Image';
import Section from '../Section';
import { Column, HeaderWrapper } from './Header.style';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Section>
          <div className="container">
            <Column flex="0.2">
              <a href="/">
                <Image
                  img="https://i.ibb.co/VW6v8mN/255b8b55-25c8-4943-9985-db85dd92405c.png"
                  alt="vefi token"
                />
              </a>
            </Column>
            <Column flex="0.8">
              <div className="right">
                <a href="http://">Whitepapper</a>
              </div>
            </Column>
          </div>
        </Section>
      </HeaderWrapper>
    </>
  );
};

export default Header;
