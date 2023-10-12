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
        <li>
          <Link
            href={'/inforamtion'}
            className={router.pathname === '/information' ? 'choice' : ''}
            onMouseEnter={() => {
              setShowMenu('info');
            }}
            onMouseLeave={() => {
              setShowMenu('none')
            }}
          >
            Inforamtion
          </Link>
          {showMenu === 'info' && (
            <DropNav.InfoDropNav />
          )}
        </li>

        <li>
          <Link
            href={'/gallery'}
            className={router.pathname === '/gellery' ? 'choice' : ''}
            onMouseEnter={() => {
              setShowMenu('gallery');
            }}
            onMouseLeave={() => {
              setShowMenu('none')
            }}
          >
            Gallery
          </Link>
          {showMenu === 'gallery' && (
            <DropNav.GallDropNav />
          )}
        </li>
        <li>
          <Link
            href={'/draw'}
            className={router.pathname === '/draw' ? 'choice' : ''}
            onMouseEnter={() => {
              setShowMenu('draw');
            }}
            onMouseLeave={() => {
              setShowMenu('none')
            }}
          >
            Draw
          </Link>
          {showMenu === 'draw' && (
            <DropNav.DrawDropNav />
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