import { Text } from '@Atoms/Typography';
import {
    BaseToggle,
    ToggleContainer,
    VisibleToggle,
    ToggleSizeType,
    TextLabelBox,
    Label,
} from './Toggle.styled';

interface ToggleProp {
    checked: boolean;
    setChecked: (checked: boolean) => void;
    callback?: (checked: boolean) => void;
    toggleSize?: ToggleSizeType;
    className?: string;
    disabled?: boolean;
    label?: string;
}

export function Toggle({
    checked,
    setChecked,
    toggleSize = 'medium',
    className,
    disabled,
    callback,
    label,
}: ToggleProp) {
    return (
        <Label htmlFor={`${className}_toggle`}>
            <ToggleContainer>
                <BaseToggle
                    id={`${className}_toggle`}
                    className={className}
                    type="checkbox"
                    disabled={disabled}
                    checked={checked}
                    onChange={() => {
                        callback && callback(!checked);
                        requestAnimationFrame(() => setChecked(!checked));
                    }}
                    toggleSize={toggleSize}
                />
                <VisibleToggle toggleSize={toggleSize} />
                {label && (
                    <TextLabelBox>
                        <Text size="b2" color={disabled ? 'gray4' : 'black1'}>
                            {label}
                        </Text>
                    </TextLabelBox>
                )}
            </ToggleContainer>
        </Label>
    );
}
