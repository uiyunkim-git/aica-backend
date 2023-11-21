import { LogoWrapper } from './Logo.styled';
import LogoWhite from '@Icons/logo-white.svg';
import LogoBlack from '@Icons/logo-black.svg';

interface LogoProp {
    color?: 'black' | 'white';
    width?: string;
    height?: string;
}

export function Logo({ color, width, height }: LogoProp) {
    return (
        <LogoWrapper width={width} height={height}>
            {color === 'black' ? <LogoBlack /> : <LogoWhite />}
        </LogoWrapper>
    );
}
