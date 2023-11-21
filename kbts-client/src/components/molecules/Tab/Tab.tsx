import { MouseEventHandler } from 'react';

import { Badge } from '@Atoms/Badge';
import {
    TabButton,
    TabContainer,
    TabStatusBadge,
    UnderBar,
} from './Tab.styled';

export const TabStatusTypeArray = ['normal', 'error', 'complete'] as const;
export type TabStatusType = (typeof TabStatusTypeArray)[number];

interface TabProp {
    title?: string;
    selected?: boolean;
    status?: TabStatusType;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export function Tab({
    title,
    selected = false,
    status = 'normal',
    onClick,
    className,
}: TabProp) {
    return (
        <TabContainer className={className}>
            {status !== 'normal' && (
                <TabStatusBadge>
                    <Badge type={status} />
                </TabStatusBadge>
            )}
            <TabButton size="small" selected={selected} onClick={onClick}>
                {title}
            </TabButton>
            <UnderBar selected={selected} />
        </TabContainer>
    );
}
