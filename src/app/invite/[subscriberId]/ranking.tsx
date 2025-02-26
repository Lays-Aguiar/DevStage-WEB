import { getRanking } from "@/http/api";
import Image from "next/image";
import cooper from '../../../assets/medal-cooper.svg';
import gold from '../../../assets/medal-gold.svg';
import silver from '../../../assets/medal-silver.svg';
export async function Ranking() {

    const { ranking: ranking } = await getRanking()

    return (
        <div className='w-full max-w-[440px] space-y-5'>
            <h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>
                Ranking de indicações
            </h2>
            {
                ranking.map((item, index) => {
                    const rankingPosition = index + 1
                    return (


                        <div key={item.id} className='space-y-4' >
                            <div className=' relative rounded-xl gap-3 bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center'>

                                <span className='text-sm text-gray-300 leading-none'>
                                    <span className='font-semibold'>{rankingPosition} </span>| {item.name}
                                </span>

                                <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                                    {item.score}
                                </span>
                                {rankingPosition === 1 && <Image src={gold} alt='' className='absolute top-0 right-8 ' />}
                                {rankingPosition === 2 && <Image src={silver} alt='' className='absolute top-0 right-8 ' />}
                                {rankingPosition === 3 && <Image src={cooper} alt='' className='absolute top-0 right-8 ' />}

                            </div>


                        </div>
                    )
                })
            }
        </div>
    );
}
