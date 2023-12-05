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
                <Link href={'/draw/ten-seconds'}>
                    10s
                </Link>
                <Link href={'/draw/thirty-seconds'}>
                    30s
                </Link>
                <Link href={'/draw/one-minute'}>
                    1m
                </Link>
        </S.DropNav>
    )

}

