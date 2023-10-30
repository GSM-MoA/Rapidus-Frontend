import Link from "next/link";
import * as S from './style'
export function InfoDropNav() {

    return (
        <S.DropNav>
            <Link href={'/information/rapidus'}>
                Rapidus?
            </Link>
            <Link href={'/information/moa'}>
                MoA
            </Link>
        </S.DropNav>
    )
}

export function GallDropNav() {
    return (
        <S.DropNav>
                <Link href={'/gallery/ten-second'}>
                    10s
                </Link>
                <Link href={'/gallery/one-minuate'}>
                    1m
                </Link>
                <Link href={'/gallery/three-minuate'}>
                    3m
                </Link>
        </S.DropNav>
    )
}


export function PaintDropNav() {
    return (
        <S.DropNav>
                <Link href={'/draw/ten-second'}>
                    10s
                </Link>
                <Link href={'/draw/one-minute'}>
                    1m
                </Link>
                <Link href={'/draw/three-minuate'}>
                    3m
                </Link>
        </S.DropNav>
    )

}

