import { BaseTextButton, TextButtonText } from './TextButton.styled';

interface TextButtonProp {
    onClick: () => void;
    disabled?: boolean;
    text?: string;
}

export function TextButton({ onClick, disabled, text }: TextButtonProp) {
    return (
        <BaseTextButton disabled={disabled} onClick={onClick}>
            <TextButtonText $notSelectable>{text}</TextButtonText>
        </BaseTextButton>
    );
}
