'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Chat } from '@Templates/Chat';

export default function HomePage() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Chat />;
        </QueryClientProvider>
    );
}
