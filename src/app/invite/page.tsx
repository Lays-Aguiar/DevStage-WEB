import { IconButton } from '@/components/iconButton'
import { Input } from '@/components/input'
import { Copy, Link } from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/logo.svg'
export default function InvitePage() {
    return (
        <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
            <div className="flex flex-col gap-10 w-full max-w-[550px]">
                <Image src={logo} alt="devstage" className="h-[30px] w-[108.5px]" />

                <div className="space-y-2">
                    <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
                        Inscrição confirmada!
                    </h1>
                    <p className="text-gray-300">
                        Para entrar no evento, acesse o link enviado para seu e-mail.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                            Indique e ganhe
                        </h2>
                        <p className="text-gray-300">
                            Convide mais pessoas para o evento e concorra a prêmios
                            exclusivos! É só compartilhar o link abaixo e acompanhar as
                            inscrições:
                        </p>
                    </div>

                    <Input readOnly defaultValue="http://localhost:3000/invite/12893712083971209837" icon={<Link className='size-5' />} >

                        <IconButton className='-mr-4'  ><Copy className='size-5' /></IconButton>

                    </Input>
                    <div className='grid gap-3 md:grid-cols-3'>
                        <div className='bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
                            etste
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
