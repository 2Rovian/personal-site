import Image from 'next/image'

export default function CreditosComp() {
    const creditosArray = [
        { domain: "kafu.ovh", site: "https://kafu.ovh", imgSource: "https://kafu.ovh/static/imgs/buttons/junko.png" },
        { domain: "july.lol", site: "https://july.lol", imgSource: "https://july.lol/img/lonelyjulybutton.gif" }
    ];

    const lainGifsArray = [
        { sourceGif: "/lain/gifs/lainGif1.gif", altDesc: "Lain Gif 1" },
        { sourceGif: "/lain/gifs/lainGif2.gif", altDesc: "Lain Gif 2" },
        { sourceGif: "/lain/gifs/lainGif4.gif", altDesc: "Lain Gif 4" }
    ]

    return (
        <section className="mt-4 flex flex-col sm:grid grid-cols-2 gap-4 ">
            {/* Bloco de créditos */}
            <div className='div-design overflow-hidden'>
                <div className="border-b-1 px-3 py-1">
                    <span className="font-semibold">creditos.</span>
                </div>

                <div className="px-3 py-1 ">
                    <p className='w-[85%]'>Este site tem grande inspiração nesses outros_</p>

                    <div className="flex gap-x-2 items-center mt-2 relative ">
                        {creditosArray.map((item, index) => (
                            <a
                                key={index}
                                href={item.site}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border border-stone-950 bg-stone-200 overflow-hidden hover:bg-stone-300 transition-colors"
                            >
                                <div className="flex flex-col items-center text-center p-1 group">
                                    <span className="font-bold text-stone-950">{item.domain}</span>
                                    <img
                                        src={item.imgSource}
                                        alt={`button ${item.domain}`}
                                        className="object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            </a>
                        ))}
                        
                        <div className='absolute -right-5 -bottom-1'>
                            <Image
                                src={'/lain/imgs/lainSidePfp-removebg.png'}
                                width={90}
                                height={90}
                                alt={'lain sidepfp'}
                                className='filter grayscale hover:grayscale-0 hover:sepia transition-all duration-300
                            
                                '
                            />
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Div de Gifs */}
            <div className='hidden sm:flex items-center bg-stone-950 group hover:outline-2 outline-indigo-400'>

                {lainGifsArray.map((item, index) => (
                    <Image
                        src={item.sourceGif}
                        width={135}
                        height={135}
                        className='object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-300
                        w-1/3 h-full '
                        alt={item.altDesc}
                        key={index}
                    />
                ))}
            </div>
            
            <div className='flex sm:hidden items-center bg-stone-950 group hover:outline-2 outline-indigo-900'>
                {Array(3).fill(null).map((_, index) => (
                    <Image
                        key={index}
                        src={lainGifsArray[2].sourceGif}
                        width={135}
                        height={135}
                        alt={lainGifsArray[2].altDesc}
                        className='w-1/3 h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-300'
                    />
                ))}
            </div>
        </section>
    );
}
