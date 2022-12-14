import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray2};
    font-size: ${theme.font.sizes.small};

    div {
      border-bottom: 1px solid ${theme.colors.gray2};
      width: 100px;
      margin: 0 auto;
      margin-bottom: 5px;
    }
  `}
`;
