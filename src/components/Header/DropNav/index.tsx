import Link from "next/link";
import * as S from './style'
import { IsHome } from "@/types/components/HeaderProps";

export function InfoDropNav({ $isHome }:IsHome) {
    return (
        <S.DropNav $isHome={$isHome}>
            <Link href={"/information/rapidus"}>Rapidus?</Link>
            <Link href={"/information/moa"}>MoA</Link>
        </S.DropNav>
    );
}

export function GallDropNav({ $isHome }:IsHome) {
    return (
        <S.DropNav $isHome={$isHome}>
            <Link href={"/gallery/ten-seconds"}>10s</Link>
            <Link href={"/gallery/thirty-seconds"}>30s</Link>
            <Link href={"/gallery/one-minute"}>1m</Link>
        </S.DropNav>
    );
}

export function DrawDropNav({ $isHome }:IsHome) {
   
    return (
        <S.DropNav $isHome={$isHome}>
            <Link href={"/draw/ten-seconds"}>10s</Link>
            <Link href={"/draw/thirty-seconds"}>30s</Link>
            <Link href={"/draw/one-minute"}>1m</Link>
        </S.DropNav>
    );
}