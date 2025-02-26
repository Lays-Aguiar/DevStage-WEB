'use client'
import { IconButton } from '@/components/iconButton';
import { Input } from '@/components/input';
import { Copy, Link } from 'lucide-react';

interface InviteLinkInputProps {
    inviteLink: string
}
export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {

    function onCopy() {
        navigator.clipboard.writeText(inviteLink)
    }

    return (
        <Input readOnly defaultValue={inviteLink} icon={<Link className='size-5' />} >
            <IconButton className='-mr-2' onClick={onCopy} ><Copy className='size-5' /></IconButton>
        </Input>

    );
}
