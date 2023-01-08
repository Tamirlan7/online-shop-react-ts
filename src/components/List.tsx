import React from 'react';

interface ListProps<T> extends React.PropsWithChildren {
    list: T[];
    renderComponent: (listItem: T) => React.ReactNode;
    loading?: boolean
    error?: string
};  

function List <T> ({list, renderComponent, loading, error}: ListProps<T>) {



    return (
        <>
            {error
            ? error
            : loading 
            ? 'Идет загрузка...'
            : list.map(renderComponent)
            }
        </>
    );
};

export default List;