import { getSubscribersSubscriberIdRankingClicks, getSubscribersSubscriberIdRankingCounts, getSubscribersSubscriberIdRankingPosition } from '@/http/api';
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react';


interface StatsProps {
    subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
    const { count: accessCounts } = await getSubscribersSubscriberIdRankingClicks(subscriberId)
    const { count: inviteCounts } = await getSubscribersSubscriberIdRankingCounts(subscriberId)
    const { position: rankingPosition } = await getSubscribersSubscriberIdRankingPosition(subscriberId)
    return (
        <div className='grid gap-3 md:grid-cols-3'>
            <div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
                <span className='font-heading text-2xl font-semibold  text-gray-200 leading-none'>
                    {accessCounts}
                </span>
                <span className='font-heading text-gray-300 leading-none text-center'>
                    Acessos ao link
                </span>
                <MousePointerClick className='size-5 text-purple absolute top-3 left-3' />
            </div>
            <div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
                <span className='font-heading text-2xl font-semibold  text-gray-200 leading-none'>
                    {inviteCounts}
                </span>
                <span className='font-heading text-gray-300 leading-none text-center'>
                    Inscrição feitas
                </span>
                <BadgeCheck className='size-5 text-purple absolute top-3 left-3' />
            </div>

            <div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
                <span className='font-heading text-2xl font-semibold  text-gray-200 leading-none'>
                    {rankingPosition ? `${rankingPosition}°` : '-'}
                </span>
                <span className='font-heading text-gray-300 leading-none text-center'>
                    Posição no ranking
                </span>
                <Medal className='size-5 text-purple absolute top-3 left-3' />
            </div>
        </div>
    );
}
