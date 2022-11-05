import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding-bottom: ${theme.spacings.superLarge};

    @media only screen and (max-width: 1200px) {
      padding: 0 ${theme.spacings.small} ${theme.spacings.superLarge}
        ${theme.spacings.small};
    }

    div.cards {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      margin-bottom: ${theme.spacings.medium};

      @media only screen and (max-width: 900px) {
        grid-template-columns: 33% 33% 33%;
      }

      @media only screen and (max-width: 700px) {
        grid-template-columns: 50% 50%;
      }

      @media only screen and (max-width: 400px) {
        grid-template-columns: 100%;
      }

      div.card {
        margin-top: ${theme.spacings.medium};
        padding: ${theme.spacings.superSmall};
      }

      a {
        color: ${theme.colors.gray3};
        text-decoration: none;
        font-weight: bold;
        font-size: 110%;

        &:hover {
          opacity: 0.8;
        }

        @media only screen and (max-width: 1050px) {
          font-size: 90%;
        }
      }

      div.image {
        box-shadow: 0 0 10px ${theme.colors.gray3};

        img {
          width: 100%;
          display: block;
        }
      }

      div.title {
        padding: ${theme.spacings.superSmall} 0 0 ${theme.spacings.superSmall};
        letter-spacing: 0.5px;
      }
    }

    button {
      cursor: pointer;
      position: absolute;
      bottom: ${theme.spacings.superSmall};
      right: ${theme.spacings.superSmall};
      box-shadow: 0 0 10px ${theme.colors.gray3};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      color: #fff;
      padding: 10px 15px;

      &:hover {
        background-color: #fff;
        color: ${theme.colors.primary};
      }

      @media only screen and (max-width: 1200px) {
        right: ${theme.spacings.small};
      }
    }
  `}
`;
