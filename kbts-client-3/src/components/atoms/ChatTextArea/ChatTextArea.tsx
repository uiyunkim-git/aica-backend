import { ChangeEvent, useRef } from 'react';

import { BaseChatTextArea } from './ChatTextArea.styled';

interface ChatTextAreaProp {
    text?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function ChatTextArea({ text, onChange }: ChatTextAreaProp) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleResizeHeight = () => {
        if (!textAreaRef.current) {
            return undefined;
        }
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    };

    return (
        <BaseChatTextArea
            ref={textAreaRef}
            wrap="hard"
            rows={1}
            onChange={(e) => {
                if (onChange !== undefined) onChange(e);
                handleResizeHeight();
            }}
            placeholder="send a message"
            value={text}
        />
    );
}
