import { MouseEventHandler } from 'react';

import { BaseChip, ChipColorType, ChipSizeType, IconBox } from './Chip.styled';

interface ChipProp {
    icon?: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
    text?: string;
    size?: ChipSizeType;
    color?: ChipColorType;
    active?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    className?: string;
    thin?: boolean;
}

export function Chip({
    icon,
    text,
    size = 'large',
    color = 'black',
    active,
    onClick,
    className,
    thin,
}: ChipProp) {
    const Icon = icon;
    return (
        <BaseChip
            className={className}
            size={size}
            color={color}
            onlyIcon={!!icon && !text}
            onlyText={!icon && !!text}
            active={active}
            onClick={onClick}
            thin={thin}
        >
            {Icon && (
                <IconBox className="icon-box">
                    <Icon />
                </IconBox>
            )}
            {text}
        </BaseChip>
    );
}
