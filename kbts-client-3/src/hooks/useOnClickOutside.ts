import { useRef, useEffect } from 'react';

export const useOnClickOutside = <T extends HTMLElement>(
    handler?: (event?: Event) => void,
) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const listener: EventListener = (event) => {
            const { current } = ref;
            if (!current || current.contains(event.target as Node)) {
                return;
            }
            if (handler !== undefined) handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);

    return ref;
};
