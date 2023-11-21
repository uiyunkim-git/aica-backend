import { ChangeEvent, useState } from 'react';
import SearchIcon from '@Icons/search.svg';

import {
    EnterButton,
    SearchBarContainer,
    SearchTextFieldContainer,
    SearhTextField,
} from './SearchBar.styled';

interface SearchBarProp {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: () => void;
    placeholder?: string;
    className?: string;
    border?: boolean;
    noShadow?: boolean;
    width?: string;
}

export function SearchBar({
    value,
    onChange,
    onPressEnter,
    placeholder,
    className,
    border,
    noShadow,
    width,
}: SearchBarProp) {
    const [$isFocused, setIsFocused] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const key = e.key || e.keyCode;
        if ((key === 'Enter' || key === 13) && onPressEnter) {
            if (e.nativeEvent.isComposing) {
                return;
            }
            handlePressEnter();
        }
    };

    const blurSlowly = () => {
        setTimeout(() => {
            setIsFocused(false);
        }, 200);
    };

    const handlePressEnter = () => {
        if (onPressEnter === undefined) {
            return;
        }
        if (!disabled) {
            setDisabled(true);
            onPressEnter();
        }
        setTimeout(() => {
            setDisabled(false);
        }, 100);
        setIsFocused(false);
    };

    return (
        <SearchBarContainer className={className} style={{ width }}>
            <SearchTextFieldContainer
                $isFocused={$isFocused}
                border={border}
                noShadow={noShadow}
            >
                <SearchIcon width={20} height={20} />
                <SearhTextField
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={blurSlowly}
                    onKeyDown={handleEnterKeyDown}
                    disabled={disabled}
                    spellCheck={false}
                />
                <EnterButton $isFocused={$isFocused} onClick={onPressEnter}>
                    Enter
                </EnterButton>
            </SearchTextFieldContainer>
        </SearchBarContainer>
    );
}
