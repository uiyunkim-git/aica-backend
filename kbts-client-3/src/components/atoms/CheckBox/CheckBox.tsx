import { ColorType } from '@Styles/colors';
import { TextSizeType } from '@Styles/fonts';
import {
    CheckBoxContainer,
    CheckBoxInput,
    CheckBoxLabelText,
    Label,
} from './CheckBox.styled';

export type CheckBoxValue = string | number;

interface CheckBoxProp {
    checked: boolean;
    onCheck: () => void;
    className?: string;
    label?: string;
    labelSize?: TextSizeType;
    labelColor?: ColorType;
    disabled?: boolean;
}

export function CheckBox({
    checked,
    onCheck,
    className,
    label,
    labelSize,
    labelColor,
    disabled,
}: CheckBoxProp) {
    return (
        <CheckBoxContainer>
            <CheckBoxInput
                id={`checkbox_${className ?? ''}_${label}`}
                onChange={onCheck}
                className={className}
                checked={checked}
                disabled={disabled}
                type="checkbox"
            />
            <Label htmlFor={`checkbox_${className ?? ''}_${label}`}>
                {label && (
                    <CheckBoxLabelText
                        $notSelectable
                        labelSize={labelSize}
                        labelColor={labelColor}
                        className="checkbox-label"
                    >
                        {label}
                    </CheckBoxLabelText>
                )}
            </Label>
        </CheckBoxContainer>
    );
}
