import { ColorType } from '@Styles/colors';
import {
    LoadingSpin,
    SpinLoaderConatiner,
    SpinLoaderSizeType,
} from './SpinLoader.styled';

interface SpinLoaderProp {
    size?: SpinLoaderSizeType;
    color?: ColorType;
}

export function SpinLoader({
    size = 'large',
    color = 'blue1',
}: SpinLoaderProp) {
    return (
        <SpinLoaderConatiner size={size} color={color}>
            <LoadingSpin delay={0} />
            <LoadingSpin delay={-0.45} />
            <LoadingSpin delay={-0.3} />
            <LoadingSpin delay={-0.15} />
        </SpinLoaderConatiner>
    );
}
