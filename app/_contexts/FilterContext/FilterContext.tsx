"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react";

interface FilterState {
    activeFilter: string;
    setActiveFilter: (id: string) => void;
}

const FilterContext = createContext<FilterState | undefined>(undefined);

export default function FilterContextProvider(props: PropsWithChildren) {
    const { children } = props;

    const [activeFilter, setActiveFilter] = useState<string>("all");

    return <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>{children}</FilterContext.Provider>
}

export const useFilter = () => {
    return useContext(FilterContext);

}