import Image from 'next/image';
import Link from 'next/link'
export default function Header(){
    return(
        <div className="my-6 md:mb-2 md:-mt-3">
        <Link href="/">
            <Image
                className="cursor-pointer"
                src="/saint-machine-animated-VHS.svg"
                alt='Saint-Machine logo image'
                width={800}
                height={100}
            />
        </Link>
        </div>
    )
}