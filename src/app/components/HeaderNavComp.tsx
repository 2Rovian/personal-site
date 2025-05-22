'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function HeaderNavComp() {
    const pathname = usePathname();

    const navLinkClass = (path: string) =>
        `block px-4 py-2 duration-200 font-medium ease-in-out ${
            pathname === path
                ? 'bg-stone-950 text-white'
                : 'hover:bg-stone-950 hover:text-white'
        }`;

    return (
        <nav className="flex justify-between">
            <ul className="flex text-lg border-t-1 border-r-1 font-bold">
                <li className="list-none border-r-1">
                    <Link href="/" className={navLinkClass('/')}>Home</Link>
                </li>
            </ul>

            <ul className="flex text-lg border-t-1 border-l-1 font-bold">
                <li>
                    <Link href="/stuff" className={navLinkClass('/stuff')}>Stuff</Link>
                </li>
                <li>
                    <Link href="/projects" className={navLinkClass('/projects')}>Projects</Link>
                </li>
                <li>
                    <Link href="/blog" className={navLinkClass('/blog')}>Blog</Link>
                </li>
            </ul>
        </nav>
    );
}
