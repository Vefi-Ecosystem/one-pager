import React from 'react';
import { ProductWrapper } from '../../components/Header/Header.style';
import Section from '../../components/Section';
import { Typography } from '../../GlobalStyle';

const Products = () => {
  return (
    <>
      <ProductWrapper>
        <Section>
          <div className="container">
            <Typography as="h1" fontSize="2.5rem">
              Our Products
            </Typography>
            <div className="products">
              <div className="product">
                <span>Vefi</span>Wallet
              </div>
              <div className="product">
                <span>Vefi</span>CEX
              </div>
              <div className="product">
                <span>Vefi</span>NFT Marketplace
              </div>
              <div className="product">
                <span>Vefi</span>Alterverse
              </div>
              <div className="product">
                <span>Vefi</span>Pay
              </div>
              <div className="product">
                <span>Vefi</span>Blockchain
              </div>
            </div>
          </div>
        </Section>
      </ProductWrapper>
    </>
  );
};

export default Products;
