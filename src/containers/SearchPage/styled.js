import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.gray3};
      padding: ${theme.spacings.small};
      margin: 0 auto;
      border-bottom: 1px solid ${theme.colors.gray2};
    }
  `}
`;
