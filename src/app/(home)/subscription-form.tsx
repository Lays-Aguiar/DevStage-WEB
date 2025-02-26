'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { postSubscriptions } from "@/http/api";
import { zodResolver } from "@hookform/resolvers/zod";

import { ArrowRight, Mail, User } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from 'zod';

const subscriptionSchema = z.object({
    name: z.string().min(2, 'Digite seu nome completo'),
    email: z.string().email('Digite um e-mail valido')
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm<SubscriptionSchema>({
        resolver: zodResolver(subscriptionSchema)
    })

    async function onSubscribe({ name, email }: SubscriptionSchema) {
        const referrer = searchParams.get('referrer')
        const { subscriberId } = await postSubscriptions({
            name, email, referrer
        })
        router.push(`/invite/${subscriberId}`)

    }

    return (
        <form onSubmit={handleSubmit(onSubscribe)} className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Inscrição
            </h2>
            <div className='space-y-2'>
                <Input error={errors.name} {...register('name')} icon={<User />} placeholder='Nome Completo' type='text' />
                {errors.name && (<p className="text-danger text-xs font-semibold">{errors.name?.message}</p>)}
            </div>
            <div className="space-y-2">
                <Input error={errors.email}  {...register('email')} icon={<Mail />} placeholder='E-mail' type='email' />
                {errors.name && (<p className="text-danger text-xs font-semibold">{errors.email?.message}</p>)}
            </div>
            <Button type="submit" icon={<ArrowRight />} >Confirmar </Button>
        </form >
    );
}
