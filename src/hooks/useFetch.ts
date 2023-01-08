import React from 'react';

export function useFetch (callback: () => void) {
    const [error, setError] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false); 

    async function fetching () {
        try {
            setLoading(true);
            await callback();
        } catch (e) {
            const err = e as Error
            setError(`name: ${err.name} ||| error: ${err.message} ||| cause: ${err.cause}`)
        } finally {
            setLoading(false);
        };
    };

    return [fetching, error, loading] as const;
};