import { useCallback, useState } from 'react';

import { ThumbIcon } from '@Atoms/ThumbIcon';
import { ThumbButtonContainer, ThumbButtonWrapper } from './ThumbButton.styled';
import { Divider } from '@Atoms/Divider';
import { ThumbType } from '@Atoms/ThumbIcon/ThumbIcon';

interface ThumbButtonProp {
    className?: string;
}

export function ThumbButton({ className }: ThumbButtonProp) {
    const [selectedThumbType, setSelectedThumbType] = useState<
        ThumbType | undefined
    >(undefined);

    const onClickThumbIcon = useCallback((type: ThumbType) => {
        return () =>
            setSelectedThumbType((prev) => (prev === type ? undefined : type));
    }, []);

    return (
        <ThumbButtonContainer className={className}>
            <ThumbButtonWrapper onClick={onClickThumbIcon('up')}>
                <ThumbIcon type="up" isSelected={selectedThumbType === 'up'} />
            </ThumbButtonWrapper>
            <Divider direction="vertical" />
            <ThumbButtonWrapper onClick={onClickThumbIcon('down')}>
                <ThumbIcon
                    type="down"
                    isSelected={selectedThumbType === 'down'}
                />
            </ThumbButtonWrapper>
        </ThumbButtonContainer>
    );
}
