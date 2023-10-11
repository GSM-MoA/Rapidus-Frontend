import { DropNavProps } from "@/types/components/DropNav";
import Link from "next/link";
import * as S from './style'
export function InfoDropNav() {

    return (
        <S.DropNav>
            <Link href={'/information/rapidus'}>
                Rapidus란?
            </Link>
            <Link href={'/information/moa'}>
                모아 동아리
            </Link>
        </S.DropNav>
    )
}

export function GallDropNav() {
    return (
        <S.DropNav>
                <Link href={'/gallery/10s'}>
                    10초 그림
                </Link>
                <Link href={'/gallery/1m'}>
                    1분 그림
                </Link>
                <Link href={'/gallery/3m'}>
                    3분 그림
                </Link>
        </S.DropNav>
    )
}


export function DrawDropNav() {
    return (
        <S.DropNav>
                <Link href={'/gallery/10s'}>
                    10초 게임
                </Link>
                <Link href={'/gallery/1m'}>
                    1분 게임
                </Link>
                <Link href={'/gallery/3m'}>
                    3분 게임
                </Link>
        </S.DropNav>
    )

}

