import Link from 'next/link';
import * as DropNav from './DropNav'
import * as S from './style'
import * as SVG from '../../../public/svg'
import { useRouter } from 'next/router';
import { useState } from 'react';

function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<string>('none');
  return (
    <S.HeaderContainer>
      <S.RapidusLogo>
        <Link href={'/'}>
          <SVG.RapidusLogo />
        </Link>
      </S.RapidusLogo>
      <S.Categories>
        <li
          onMouseEnter={() => {
            setShowMenu('info');
            console.log(router);
          }}
          onMouseLeave={() => {
            setShowMenu('none')
          }}
        >
          <Link
            href={'/information/rapidus'}
            className={router.pathname.split('/')[1] === 'information' ? 'choice' : ''}
          >
            Information
          </Link>
          {showMenu === 'info' && (
            <DropNav.InfoDropNav />
          )}
        </li>

        <li
          onMouseEnter={() => {
            setShowMenu('gallery');
          }}
          onMouseLeave={() => {
            setShowMenu('none')
          }}>
          <Link
            href={'/gallery/ten-second'}
            className={router.pathname.split('/')[1] === 'gellery' ? 'choice' : ''}
          >
            Gallery
          </Link>
          {showMenu === 'gallery' && (
            <DropNav.GallDropNav />
          )}
        </li>
        <li
          onMouseEnter={() => {
            setShowMenu('draw');
          }}
          onMouseLeave={() => {
            setShowMenu('none')
          }}
        >
          <Link
            href={'/draw/ten-seconds'}
            className={router.pathname.split('/')[1] === 'draw' ? 'choice' : ''}

          >
            Paint
          </Link>
          {showMenu === 'draw' && (
            <DropNav.PaintDropNav />
          )}
        </li>
        <li>
          <Link
            href={'/'}
            className={router.pathname === '/' ? 'choice' : ''}>
            Home
          </Link>
        </li>
      </S.Categories>
    </S.HeaderContainer>
  )
}


export default Header;