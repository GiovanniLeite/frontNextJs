import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  position: relative;
  z-index: 3;

  a:hover {
    cursor: pointer;
  }
`;

export const FixedHeader = styled.div`
  position: fixed;
  width: 100%;
`;

export const TopBar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.darkGray};
    position: absolute;
    z-index: 2;

    div {
      margin: 0 auto;
      max-width: 140rem;
      overflow: hidden;
      padding: ${theme.spacings.superSmall};

      a {
        text-decoration: none;
        color: #fff;
        /* to align icon */
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          opacity: 0.8;
        }
      }

      @media only screen and (max-width: 1500px) {
        padding-left: ${theme.spacings.superLarge};
        padding-right: ${theme.spacings.superLarge};
      }

      @media only screen and (max-width: 1400px) {
        padding-left: ${theme.spacings.medium};
        padding-right: ${theme.spacings.medium};
      }

      @media only screen and (max-width: 700px) {
        padding-left: ${theme.spacings.small};
        padding-right: ${theme.spacings.small};
      }
    }

    ul.socialMedia {
      list-style: none;
      float: left;

      @media only screen and (max-width: 700px) {
        margin-top: 3px;
      }
    }

    ul.socialMedia li {
      display: inline-block;
    }

    ul.subscribeLogin {
      list-style: none;
      float: right;
    }

    ul.subscribeLogin li {
      display: inline-block;
      margin-left: 2px;
      margin-right: 2px;
      color: #fff;
    }

    ul.subscribeLogin li a {
      font-size: 80%;
    }
  `}
`;

export const MainBar = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    margin-top: 32px;
    box-shadow: 0 0 10px #000;

    @media only screen and (max-width: 700px) {
      height: 50px;
    }

    div {
      input#check {
        display: none;
      }

      input#check:checked ~ .darkBackground {
        display: block;
      }

      input#check:checked ~ label#icon {
        svg > path {
          stroke: #494950;
        }

        span {
          color: ${theme.colors.darkGray};
        }
      }

      input#check:checked ~ div.sideBar {
        transform: translateX(300px);
      }

      input#check:checked ~ div.sideBar nav a div.link {
        opacity: 1;
        margin-top: 0;
        transition-delay: 0.2s;
      }

      label#icon {
        cursor: pointer;
        padding: 10px;
        padding-bottom: 2px;
        position: absolute;
        z-index: 3;
        /* to align icon */
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          padding-left: 10px;
          color: #fff;
        }
      }

      div.sideBar {
        background-color: #eee;
        height: 100vh;
        width: 300px;
        position: absolute;
        transition: all 0.2s linear;
        left: -300px;
        z-index: 2;
        font-size: 12pt;

        @media only screen and (max-width: 700px) {
          margin-top: 3px;
        }

        @media only screen and (max-width: 460px) {
          margin-top: 0;
        }
      }

      nav {
        width: 100%;
        position: absolute;
        top: 50px;

        a {
          text-decoration: none;

          &:hover {
            opacity: 0.7;
          }
        }

        div.searchSideBar {
          padding: 5px;

          div {
            background-color: #fff;
            padding-right: 5px;
          }

          input {
            padding: 10px;
            width: 100%;
            border: none;
          }

          input:focus {
            outline: none;
          }
        }

        div.link {
          padding: 10px;
          transition: all 0.2 linear;
          color: ${theme.colors.darkGray};
          border-bottom: 1px solid #494950;

          &:hover {
            color: #797986;
          }
        }

        div.link.login {
          color: ${theme.colors.primary}
          font-weight: bold;
          display: grid;
          grid-template-columns: 15% 85%;

          div.loginZ {
            /* to align icon */
            display: flex;
            justify-content: center;
            align-items: center;
          }

          span {
            color: ${theme.colors.darkGray};
            font-weight: 400;
            font-size: 80%;
          }
        }
      }

      .darkBackground {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1;
        display: none;
      }
    }

    div.home {
      margin: 0 auto;
      width: 132px;

      a {
        font-size: 200%;
        color: #fff;
        text-decoration: none;
      }

      @media only screen and (max-width: 500px) {
        width: 90px;
        padding-top: 8px;

        a {
          font-size: 150%;
        }
      }
    }

    div.searchBar {
      position: absolute;
      right: 15px;
      top: 42px;
      padding-right: 8px;
      background-color: #fff;

      @media only screen and (max-width: 650px) {
        display: none;
      }
    }

    input.search {
      padding: 10px;
      border: none;
      width: 85px;
      -webkit-transition: all 0.5s linear;
      transition: all 0.5s linear;
    }

    input.search:focus {
      width: 220px;
      outline: none;
    }
  `}
`;
