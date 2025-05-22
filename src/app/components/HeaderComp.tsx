import Image from 'next/image'
import Link from 'next/link';
import { IoTriangle } from "react-icons/io5";
import HeaderNavComp from './HeaderNavComp';

export default function HeaderComp() {

    return (
        <header className="mx-auto h-[200px] mt-6 max-w-4xl w-[90%] div-design rounded-t-xl">
            <div className="size-full flex flex-col relative">
                <div className="flex flex-col px-5 flex-1 pt-3 w-fit font-semibold">
                    <span className=" cursor-pointer hover:underline mt-0 text-6xl font-bold ">Rovian.</span>
                    <div className='flex justify-between mt-2 font-mono text-sm text-neutral-600 tracking-wide'>
                        <span>First Seen</span>
                        <span>&nbsp;-&nbsp;</span>  
                        <span>[ 21/05/2025 ]</span>
                    </div>
                    <div className='flex justify-between font-mono text-sm text-neutral-600 tracking-wide'>
                        <span>Last Seen    </span>  
                        <span>&nbsp;-</span>
                        <span>[ 21/05/2025 ]</span>
                    </div>
                    <div className='flex justify-between font-mono text-sm text-neutral-500 tracking-wide'>
                        <span>Maybe Seen</span>  
                        <span>&nbsp;-&nbsp;</span>
                        <span >[ ??/??/???? ]</span>
                    </div>
                </div>

                <div className='absolute top-3 right-5 group'>
                    <Image
                        src="/lain/lain2.jpg"
                        alt="Lain"
                        width={80}
                        height={80}
                        className="rounded-full hover:shadow-2xl shadow-blue-950
                        filter grayscale group-hover:grayscale-0 transition-all duration-300
                        "
                    />
                    <div className='absolute top-21 -left-18 bg-blue-950 hidden group-hover:block text-blue-50 px-2 py-1 rounded-xs '>
                        <span>Let's all love lain</span>
                        <IoTriangle className='text-blue-950 absolute -top-2 right-2'/>
                    </div>
                    
                </div>
                {/* <nav className="flex justify-between ">
                    <Link href='/' className="px-4 py-2 cursor-pointer hover:bg-stone-950 hover:text-white duration-200 font-medium ease-in-out text-lg border-t-1 border-r-1">Home</Link>

                    <ul className="flex flex-row text-lg border-t-1 border-l-1 font-bold">
                        <Link href='/stuff'>
                            <li className="px-4 py-2 cursor-pointer hover:bg-stone-950 hover:text-white duration-200 font-medium ease-in-out">
                                Stuff
                            </li>
                        </Link>

                        <Link href='/projects'>
                            <li className="px-4 py-2 cursor-pointer hover:bg-stone-950 hover:text-white duration-200 font-medium ease-in-out">Projects</li>
                        </Link>
                        <Link href='/blog'>
                            <li className="px-4 py-2 cursor-pointer hover:bg-stone-950 hover:text-white duration-200 font-medium ease-in-out">Blog</li>
                        </Link>
                    </ul>
                </nav> */}
                <HeaderNavComp />
            </div>
        </header>
    )
}