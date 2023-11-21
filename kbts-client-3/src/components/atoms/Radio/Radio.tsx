import { useCallback, useEffect, useState } from 'react';

import {
    RadioContainer,
    RadioInput,
    RadioLabelText,
    Label,
} from './Radio.styled';

export type RadioValue = string | number;

interface RadioProp {
    value: RadioValue;
    selectedValue: RadioValue;
    setSelectedValue: (selectedValue: RadioValue) => void;
    className?: string;
    label?: string;
    disabled?: boolean;
    callback?: (selected?: RadioValue) => void;
}

export function Radio({
    value,
    selectedValue,
    setSelectedValue,
    className,
    label,
    disabled,
    callback,
}: RadioProp) {
    const [selected, setSelected] = useState<boolean>(false);

    useEffect(() => {
        setSelected(value === selectedValue);
    }, [value, selectedValue]);

    const onSelect = useCallback(() => {
        setSelected(!selected);
        setSelectedValue(value);
        callback && callback(value);
    }, [callback, selected, setSelectedValue, value]);

    return (
        <RadioContainer>
            <RadioInput
                id={`radio_${value}_${className}`}
                onChange={onSelect}
                className={className}
                checked={selected}
                disabled={disabled}
                type="radio"
                value={value}
            />
            <Label htmlFor={`radio_${value}_${className}`} />
            <RadioLabelText>{label}</RadioLabelText>
        </RadioContainer>
    );
}
