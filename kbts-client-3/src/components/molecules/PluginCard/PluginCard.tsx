import { StaticImageData } from 'next/image';

import { PluginLogo } from '@Atoms/PluginLogo';
import {
    PluginCardContainer,
    PluginInfoContainer,
    PluginLogoTitleContainer,
    PluginTitle,
} from './PluginCard.styled';
import { PluginImage } from '@Atoms/PluginImage';
import { PluginExplanation } from '@Atoms/PluginExplanation';

export interface PluginCardProp {
    logo?: StaticImageData;
    title?: string;
    text?: string;
}

export function PluginCard({ logo, title, text }: PluginCardProp) {
    return (
        <PluginCardContainer>
            <PluginImage title={title} />
            <PluginInfoContainer>
                <PluginLogoTitleContainer>
                    <PluginLogo logo={logo} />
                    <PluginTitle>{title}</PluginTitle>
                </PluginLogoTitleContainer>
                <PluginExplanation text={text} />
            </PluginInfoContainer>
        </PluginCardContainer>
    );
}
