import Image from 'next/image';

export default function FooterComp() {
    return (
        <footer className='div-design  mt-4 mb-6 h-[200px] flex flex-col rounded-b-xl z-[100]'>
            <div className='relative size-full group overflow-hidden'>

                <Image
                    src="/lain/lain6.jpeg"
                    alt="Lain"
                    fill // preenche o container
                    className="image-filter"
                />
                
            </div>
            <div className="border-t-1 px-3 py-1">
                <p className="font-semibold">eis o footer. Se este site te trouxe algum entretenimento, confira meu <span className="hover:text-[#171515] hover:underline"><a href="https://github.com/2Rovian">github</a></span></p>
            </div>
        </footer>
    );
}
