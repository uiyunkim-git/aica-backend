import { BaseDivider, VerticalBaseDivider } from './Divider.styled';

interface DividerProp {
    height?: string;
    width?: string;
    margin?: string;
    direction?: 'horizontal' | 'vertical';
}

export function Divider({
    height,
    width,
    margin,
    direction = 'horizontal',
}: DividerProp) {
    if (direction === 'vertical') {
        return (
            <VerticalBaseDivider
                width={width}
                height={height}
                margin={margin}
            />
        );
    }
    return <BaseDivider height={height} width={width} margin={margin} />;
}
