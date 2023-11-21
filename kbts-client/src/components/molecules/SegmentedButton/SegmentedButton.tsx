import { MouseEventHandler } from 'react';

import { BaseSegmentedButton } from './SegmentedButton.styled';

interface SegmentedButtonProp {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    selected?: boolean;
    darkTheme?: boolean;
    children?: React.ReactNode;
}

export function SegmentedButton({
    onClick,
    selected,
    darkTheme,
    children,
}: SegmentedButtonProp) {
    return (
        <BaseSegmentedButton
            onClick={onClick}
            color={darkTheme ? 'white' : 'black'}
            active={selected}
            darkTheme={darkTheme}
            isDarkTheme={darkTheme}
        >
            {children}
        </BaseSegmentedButton>
    );
}
