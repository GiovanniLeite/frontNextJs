import { FaYoutubeSquare } from 'react-icons/fa';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import {
  RiLogoutBoxRFill,
  RiUserAddFill,
  RiMapPinUserFill,
} from 'react-icons/ri';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

import { APP_NAME } from '../../config/appConfig';

import { Container, FixedHeader, TopBar, MainBar } from './styled';

export default function Header() {
  const router = useRouter();

  const [searchText, setSearchText] = useState('');

  const handleHideMenu = () => {
    const element = document.querySelector('input#check');
    element.checked = !element.checked;
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    console.log('Saiu');
  };

  const handleSearch = (e, sideBar) => {
    e.preventDefault();
    if (sideBar) handleHideMenu();
    router.push(`/search/${searchText}`);
  };

  return (
    <Container>
      <FixedHeader>
        <TopBar>
          <div>
            <ul className="socialMedia">
              <li title="Acesse o Instagram do shopRio">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li title="Acesse o Twitter do shopRio">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterSquare />
                </a>
              </li>
              <li title="Acesse o Facebook do shopRio">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li title="Acesse o canal shopRio no Youtube">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutubeSquare />
                </a>
              </li>
            </ul>
            <ul className="subscribeLogin">
              <li title="Entrar">
                <Link href="/profile/" as={`/profile/`}>
                  Entrar
                </Link>
              </li>
              <li> | </li>
              <li title="Sair">
                <a href="/" onClick={(e) => handleLogout(e)}>
                  <RiLogoutBoxRFill />
                </a>
              </li>
            </ul>
          </div>
        </TopBar>
        <MainBar>
          <div>
            <input type="checkbox" id="check" />
            <label id="icon" htmlFor="check" title="Menu">
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#fff" strokeWidth="4" />
                <path d="M0,15 30,15" stroke="#fff" strokeWidth="4" />
                <path d="M0,25 30,25" stroke="#fff" strokeWidth="4" />
              </svg>
              <span>MENU</span>
            </label>
            <div className="sideBar">
              <nav>
                <div className="searchSideBar">
                  <div>
                    <form onSubmit={(e) => handleSearch(e, true)}>
                      <input
                        type="text"
                        name="search"
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Buscar ..."
                        title="Buscar ..."
                      />
                    </form>
                  </div>
                </div>

                <Link href="/example/" as={`/example/`}>
                  <div className="link" onClick={() => handleHideMenu()}>
                    <RiMapPinUserFill /> Exemplo 1
                  </div>
                </Link>
                <Link href="/example/" as={`/example/`}>
                  <div className="link" onClick={() => handleHideMenu()}>
                    <RiUserAddFill /> Exemplo 2
                  </div>
                </Link>
                <a
                  onClick={(e) => {
                    handleLogout(e), handleHideMenu();
                  }}
                >
                  <div className="link">
                    <RiLogoutBoxRFill /> Sair
                  </div>
                </a>
              </nav>
            </div>
            <label className="darkBackground" htmlFor="check">
              <div className="darkBackground"></div>
            </label>
          </div>

          <div className="home">
            <Link href="/" as={`/`} title="home">
              {APP_NAME}
            </Link>
          </div>

          <div className="searchBar" title="Buscar ...">
            <form onSubmit={(e) => handleSearch(e, false)}>
              <input
                type="text"
                name="search"
                className="search"
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Buscar ..."
              />
            </form>
          </div>
        </MainBar>
      </FixedHeader>
    </Container>
  );
}
