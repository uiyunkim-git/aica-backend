import Image, { StaticImageData } from 'next/image';

import { SSOLoginButtonIconBox } from './SSOLoginButton.styled';
import { FormButton } from '@Atoms/FormButton';

interface SSOLoginButtonProp {
    icon?: StaticImageData;
    text?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export function SSOLoginButton({
    icon,
    text,
    disabled,
    onClick,
}: SSOLoginButtonProp) {
    return (
        <FormButton bgColor="white" disabled={disabled} onClick={onClick}>
            {icon && (
                <SSOLoginButtonIconBox>
                    <Image
                        src={icon}
                        alt="sso login icon"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </SSOLoginButtonIconBox>
            )}
            {text}
        </FormButton>
    );
}
