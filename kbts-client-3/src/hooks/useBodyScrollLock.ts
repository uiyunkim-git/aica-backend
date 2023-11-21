import { useEffect, useState } from 'react';

export const useBodyScrollLock = (initialLocked = false) => {
    const [locked, setLocked] = useState(initialLocked);

    useEffect(() => {
        if (!locked) {
            return () => 0;
        }

        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;

        document.body.style.overflow = 'hidden';

        const root = document.getElementById('__next');
        const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

        if (scrollBarWidth) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight;
            }
        };
    }, [locked]);

    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
    }, [initialLocked]);

    return { locked, setLocked };
};
