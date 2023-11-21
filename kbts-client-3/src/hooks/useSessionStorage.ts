import { useEffect, useReducer, useCallback } from 'react';

type StorageHandler<S> = [S, (newValue: S) => void, () => void];

const reducer = <S>(state: S, action: any) => {
    switch (action.type) {
        case 'set':
            return action.payload;
        default:
            return state;
    }
};

const getValue = (key: string) => {
    if (typeof sessionStorage === 'undefined') {
        return null;
    }
    const storedValue = sessionStorage.getItem(key) || 'null';
    try {
        return JSON.parse(storedValue, reviver);
    } catch (error) {
        console.error(error);
    }

    return storedValue;
};

const setValue = <S>(key: string, valueToSet: S | null) => {
    if (typeof sessionStorage === 'undefined') {
        return null;
    }

    return sessionStorage.setItem(key, JSON.stringify(valueToSet, replacer));
};

export const useSessionStorage = <S>(
    key: string,
    defaultValue: S | null = null,
    preventEmptyValue = false,
): StorageHandler<S> => {
    const [value, dispatch] = useReducer(reducer, getValue(key));

    const dispatchValue = <S>(payload: S | null) => {
        dispatch({ payload, type: 'set' });
    };

    const set = useCallback(
        <S>(newValue: S | null) => {
            setValue(key, newValue);
            dispatchValue(newValue);
        },
        [key],
    );

    const init = useCallback(() => {
        const initialValue = getValue(key);

        if (initialValue === null || initialValue === 'null') {
            set(defaultValue);
        }
    }, [defaultValue, key, set]);

    const remove = () => {
        if (typeof sessionStorage === 'undefined') {
            return null;
        }
        sessionStorage.removeItem(key);
        dispatchValue(null);
        return key;
    };

    useEffect(() => {
        init();
    }, [init]);

    const listen = useCallback(
        (event: StorageEvent) => {
            if (event.storageArea === sessionStorage && event.key === key) {
                set(event.newValue);
            }
        },
        [key, set],
    );

    useEffect(() => {
        window.addEventListener('storage', listen);

        return () => {
            window.removeEventListener('storage', listen);
        };
    }, [listen]);

    return [preventEmptyValue ? value ?? defaultValue : value, set, remove];
};

const replacer = (key: string, value: any) => {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    }
    return value;
};

function reviver(key: string, value: any) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}
