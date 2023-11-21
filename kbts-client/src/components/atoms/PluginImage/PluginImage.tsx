import Image from 'next/image';

import { PluginImageShadow, PluginImageWrapper } from './PluginImage.styled';

interface PluginImageProp {
    title?: string;
}

export function PluginImage({ title }: PluginImageProp) {
    return (
        <PluginImageWrapper>
            {title && (
                <Image
                    src={`/assets/images/${title}-image.png`}
                    alt="plugin image"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            )}
            <PluginImageShadow />
        </PluginImageWrapper>
    );
}
