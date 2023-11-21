import { BaseHeaderButton } from './HeaderButton.styled';
import { Text } from '@Atoms/Typography';

interface HeaderButtonProp {
    onClick: () => void;
    text?: string;
    isSelected?: boolean;
    disabled?: boolean;
}

export function HeaderButton({
    onClick,
    text,
    isSelected = false,
    disabled = false,
}: HeaderButtonProp) {
    return (
        <BaseHeaderButton
            disabled={disabled}
            onClick={onClick}
            isSelected={isSelected}
        >
            <Text $notSelectable>{text}</Text>
        </BaseHeaderButton>
    );
}
