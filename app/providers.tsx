import { PropsWithChildren } from "react";
import FilterContextProvider from "./_contexts/FilterContext/FilterContext";

export default function Providers(props: PropsWithChildren) {
    const { children } = props;
    return <FilterContextProvider>{children}</FilterContextProvider>
}