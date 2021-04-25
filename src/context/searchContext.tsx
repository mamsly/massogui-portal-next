import * as React from 'react';

export type SearchProps = {
    children: React.ReactNode;
    value: string;
};

type SearchContext = {
    value: string;
};

const SearchContext = React.createContext<SearchContext | null>(null);

function useSearchContext() {
    const context = React.useContext(SearchContext);
    if (!context) {
        throw new Error('#SearchContext must be used inside #SearchProvider.');
    }
    return context;
}

function SearchProvider({ children, value }: SearchProps) {
    return (
        <SearchContext.Provider
            value={{
                value,
            }}>
            {children}
        </SearchContext.Provider>
    );
}

export { SearchContext, SearchProvider, useSearchContext };
