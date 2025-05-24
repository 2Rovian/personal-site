import Image from 'next/image'

export default function ImagesBgComp(){
    return(
        <>
            <div className='fixed bottom-0 right-0 '>
                <Image 
                    src={'/lain/imgsBg/lainBR2(menor).png'}
                    width={200}
                    height={200}
                    alt={'LainBG top-left'}
                    className='w-[250px]
                    filter grayscale hover:grayscale-0 transition-all duration-300
                    '
                />
            </div>

        </>
    )
}