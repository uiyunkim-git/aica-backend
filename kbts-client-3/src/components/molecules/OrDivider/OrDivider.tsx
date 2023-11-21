import {
    OrDividerContainer,
    OrDividerLine,
    OrDividerText,
} from './OrDivider.styled';

interface OrDividerProp {
    width?: string;
    height?: string;
    margin?: string;
}

export function OrDivider({ width, height, margin }: OrDividerProp) {
    return (
        <OrDividerContainer width={width} height={height} margin={margin}>
            <OrDividerLine />
            <OrDividerText color="white" $notSelectable>
                OR
            </OrDividerText>
            <OrDividerLine />
        </OrDividerContainer>
    );
}
