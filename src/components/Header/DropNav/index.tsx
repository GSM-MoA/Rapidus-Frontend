import Link from "next/link";
import { IsHome } from "@/types/components/HeaderProps";
import DropNav from "./style";


export function InfoDropNav({ $isHome }: IsHome) {
    return (
        <DropNav $isHome={$isHome}>
            <Link href="/information/rapidus">Rapidus?</Link>
            <Link href="/information/moa">MoA</Link>
        </DropNav>
    );
}

export function GallDropNav({ $isHome }: IsHome) {
    return (
        <DropNav $isHome={$isHome}>
            <Link href="/gallery/ten-seconds">10s</Link>
            <Link href="/gallery/thirty-seconds">30s</Link>
            <Link href="/gallery/one-minute">1m</Link>
        </DropNav>
    );
}

export function DrawDropNav({ $isHome }: IsHome) {
    return (
        <DropNav $isHome={$isHome}>
            <Link href="/draw/ten-seconds">10s</Link>
            <Link href="/draw/thirty-seconds">30s</Link>
            <Link href="/draw/one-minute">1m</Link>
        </DropNav>
    );
}
