import { BgColorType, FormButtonContainer } from './FormButton.styled';

interface FormButtonProp {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    width?: string;
    height?: string;
    bgColor?: BgColorType;
}

export function FormButton({
    children,
    onClick,
    disabled,
    width,
    height,
    bgColor,
}: FormButtonProp) {
    return (
        <FormButtonContainer
            onClick={onClick}
            disabled={disabled}
            width={width}
            height={height}
            bgColor={bgColor}
        >
            {children}
        </FormButtonContainer>
    );
}
