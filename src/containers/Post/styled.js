import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    div.title {
      margin: ${theme.spacings.medium} auto;
      max-width: 100rem;
      border-bottom: 1px solid ${theme.colors.gray2};
      color: ${theme.colors.darkGray};

      @media only screen and (max-width: 1050px) {
        margin: ${theme.spacings.small};
      }

      h2 {
        font-size: 200%;
        line-height: 1.2;
        margin-bottom: ${theme.spacings.medium};

        @media only screen and (max-width: 700px) {
          font-size: 160%;
        }
      }
    }

    div.content {
      max-width: 80rem;
      margin: 0 auto;

      div.cover {
        margin: ${theme.spacings.medium} auto;

        @media only screen and (max-width: 750px) {
          padding: ${theme.spacings.small};
        }

        img {
          width: 100%;
        }

        p {
          font-size: 70%;
        }
      }

      article {
        h1 {
          padding: ${theme.spacings.small};
          font-size: 120%;
          letter-spacing: 1px;
        }

        h2 {
          letter-spacing: 1px;
          margin: ${theme.spacings.small};
          font-size: 115%;
          font-weight: bold;
        }

        p {
          padding: ${theme.spacings.small};
          text-align: justify;
        }

        ol,
        ul {
          margin-left: 30px;
        }

        pre {
          width: 100%;
          overflow-x: auto;
          background: ${theme.colors.lightGray};
          color: ${theme.colors.darkGray};
          padding: ${theme.spacings.small};
          margin: ${theme.spacings.small};
          line-height: 1.5;
          font-size: ${theme.font.sizes.medium};
        }
    }
  `}
`;
