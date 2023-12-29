import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as DropNav from './DropNav';
import * as S from './style';
import * as SVG from '../../../public/svg';

function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<string>('none');
  const isHome = router.pathname === '/';

  return (
    <S.HeaderContainer $isHome={isHome}>
      <S.RapidusLogo $isHome={isHome}>
        <SVG.LogoBackground />
        <S.RapidusText $isHome={isHome}>
          <Link href='/'>
            <SVG.RapidusLogo />
          </Link>
        </S.RapidusText>
      </S.RapidusLogo>
      <S.Categories $isHome={isHome}>
        <li
          onMouseEnter={() => {
            setShowMenu('info');
          }}
          onMouseLeave={() => {
            setShowMenu('none');
          }}
        >
          <Link
            href="/information/rapidus"
            className={router.pathname.split('/')[1] === 'information' ? 'choice' : ''}
          >
            Information
          </Link>
          {showMenu === 'info' && <DropNav.InfoDropNav $isHome={isHome} />}
        </li>
        <li
          onMouseEnter={() => {
            setShowMenu('gallery');
          }}
          onMouseLeave={() => {
            setShowMenu('none');
          }}
        >
          <Link
            href="/gallery/ten-seconds"
            className={router.pathname.split('/')[1] === 'gallery' ? 'choice' : ''}
          >
            Gallery
          </Link>
          {showMenu === 'gallery' && <DropNav.GallDropNav $isHome={isHome} />}
        </li>
        <li
          onMouseEnter={() => {
            setShowMenu('draw');
          }}
          onMouseLeave={() => {
            setShowMenu('none');
          }}
        >
          <Link
            href="/draw/ten-seconds"
            className={router.pathname.split('/')[1] === 'draw' ? 'choice' : ''}
          >
            Draw
          </Link>
          {showMenu === 'draw' && <DropNav.DrawDropNav $isHome={isHome} />}
        </li>
        <li>
          <Link href='/' className={router.pathname === '/' ? 'choice' : ''}>
            Home
          </Link>
        </li>
      </S.Categories>
    </S.HeaderContainer>
  );
}

export default Header;
