import styled from 'styled-components';
export const Column = styled.div`
  flex: ${(props) => (props.flex ? props.flex : '1')};
  width: 100%;

  .right {
    text-align: right;
  }
`;
export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 40px;

  .container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }

  ${Column} {
    &:first-child {
      img {
        width: 150px;
        height: 40px;
        object-fit: contain;
      }
    }
  }
`;

export const HeroSectionWrapper = styled.section`
  width: 100%;
  min-height: 400px;

  .container {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
    padding: 50px 0;

    ${Column} {
      &:first-child {
        button {
          margin-left: 10px;
          margin-top: 20px;
        }
      }
    }
  }
  .btn__wrapper {
    display: flex;
    align-items: center;

    @media screen and (max-width: 320px) {
      width: 100%;
      flex-direction: column;
    }
  }
  .imageWrapper {
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 5px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 960px) {
    height: 100%;
    .container {
      flex-direction: column;
      padding: 0 20px;

      h1 {
        font-size: 2.5rem;
        margin-left: 10px;
      }
      p {
        font-size: 0.7rem;
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

export const FocusWrapper = styled.section`
  width: 100%;
  min-height: 100px;
  .container {
    padding: 50px 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const ProductWrapper = styled.section`
  width: 100%;
  min-height: 100px;
  background: whitesmoke;
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  .container {
    padding: 50px 0;
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  .products {
    width: 100%;
    background: transparent;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
    justify-content: space-evenly;
    .product {
      width: max-content;
      box-shadow: 0 25px 45px rgb(0 0 0 / 10%);
      padding: 20px;
      border-radius: 5px;

      span {
        margin-right: 5px;
        color: blue;
        font-weight: 600;
      }
    }
  }
`;

export const TokenWrapper = styled.div`
  width: 100%;
  min-height: 100px;

  .container {
    display: flex;
    padding: 50px 0;
    justify-content: center;
    margin-left: 30px;
    margin-right: 30px;
    gap: 50px;

    @media screen and (min-width: 320px) and (max-width: 960px) {
      flex-direction: column;
    }
  }
  ${Column} {
    h1 {
      margin-bottom: 10px;
      color: rgba(0, 0, 0, 0.6) !important;
    }
    span,
    ul {
      color: rgba(0, 0, 0, 0.6) !important;
    }
  }
  .token__details {
    .info {
      display: flex;
      justify-content: space-between;
      line-height: 2rem;
      margin: 10px 0;

      span:last-child {
        font-weight: 600;
      }
      @media screen and (min-width: 320px) and (max-width: 960px) {
        flex-direction: column;
        word-wrap: break-word;
      }
    }
  }

  .token__utility {
    li {
      margin: 10px 0;
    }
  }
`;

export const TokenInfoDetails = styled.section`
  width: 100%;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .tokenomics {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 50px 0;
    }
    .token {
      display: flex;
      flex-direction: column;
      align-items: center;

      span:first-child {
        background: #fff;
        padding: 20px;
        box-shadow: 0 25px 45px rgb(0 0 0 / 10%);
        border-radius: 8px;
        font-weight: 800;
        font-size: 2rem;
        margin-bottom: 10px;
      }
      span:last-child {
        font-size: 0.9rem;
      }
    }
    @media screen and (min-width: 320px) and (max-width: 960px) {
      .tokenomics {
        flex-direction: column;
      }
    }
  }
`;

export const PhaseWrapper = styled.section`
  width: 100%;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }

  .phase__container {
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 30px;
    @media screen and (min-width: 320px) and (max-width: 960px) {
      flex-direction: column;
    }
  }

  .phase {
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: 20%;
    box-shadow: 0 25px 45px rgb(0 0 0 / 10%);
    .title {
      font-size: 1.2rem;
      font-weight: 800;
    }
    .desc {
      font-size: 0.78rem;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 5px;
    }
    @media screen and (min-width: 320px) and (max-width: 960px) {
      width: 90% !important;
    }
  }

  .phase:nth-child(1) {
    height: 200px;
    width: 20%;
  }
  .phase:nth-child(2) {
    height: 250px;
  }
  .phase:nth-child(3) {
    height: 300px;
  }
  .phase:nth-child(4) {
    height: 400px;
    width: 20%;
  }
  .phase:nth-child(5) {
    height: 300px;
    width: 20%;
  }
  .phase:nth-child(6) {
    height: 250px;
  }
  .phase:nth-child(7) {
    height: 200px;
  }
`;
