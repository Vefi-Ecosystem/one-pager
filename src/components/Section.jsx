import React from 'react';
import { Container } from '../GlobalStyle';

const Section = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Section;
