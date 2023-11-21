import Image, { StaticImageData } from 'next/image';

import { PluginLogoWrapper } from './PluginLogo.styled';

interface PluginLogoProp {
    logo?: StaticImageData;
}

export function PluginLogo({ logo }: PluginLogoProp) {
    return (
        <PluginLogoWrapper>
            {logo && (
                <Image
                    src={logo}
                    alt="plugin logo"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            )}
        </PluginLogoWrapper>
    );
}
