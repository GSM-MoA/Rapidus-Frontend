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
                <Link href={'/gallery/ten-seconds'}>
                    10s
                </Link>
                <Link href={'/gallery/thirty-seconds'}>
                    30s
                </Link>
                <Link href={'/gallery/one-minute'}>
                    1m
                </Link>
        </S.DropNav>
    )
}


export function PaintDropNav() {
    return (
        <S.DropNav>
                <Link href={'/paint/ten-second'}>
                    10s
                </Link>
                <Link href={'/paint/one-minute'}>
                    1m
                </Link>
                <Link href={'/paint/three-minuate'}>
                    3m
                </Link>
        </S.DropNav>
    )

}

