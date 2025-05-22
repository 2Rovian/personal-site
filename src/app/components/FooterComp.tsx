import Image from 'next/image';

export default function FooterComp() {
    return (
        <footer className='div-design max-w-4xl w-[90%] mx-auto mt-4 mb-6 h-[200px] flex flex-col rounded-b-xl'>
            {/* <div className="border-b-1 px-3 py-1">
                    <span className="font-semibold">footer.</span>
                </div> */}
            <div className='relative size-full group overflow-hidden'>

                <Image
                    src="/lain/lain6.jpeg"
                    alt="Lain"
                    fill // preenche o container
                    className="object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                {/* <div className="absolute inset-0 bg-transparent group-hover:bg-stone-300/70 text-stone-950 flex items-center justify-center transition-all duration-300">
                    <p className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Texto ao passar o mouse</p>
                </div> */}
            </div>
            <div className="border-t-1 px-3 py-1">
                <p className="font-semibold">eis o footer. Se este site te trouxe algum entretenimento, confira meu <span className="hover:text-[#171515] hover:underline"><a href="https://github.com/2Rovian">github</a></span></p>
            </div>
        </footer>
    );
}
