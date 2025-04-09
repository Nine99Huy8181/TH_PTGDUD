import { Children, createContext, useContext, useState } from "react";

export const LabelContext = createContext();

export const LabelProvider = ({children}) => {
    const [labelHeader, setLabelHeader] = useState('Dashboard');
        const [updatePage, setUpdatePage] = useState(false);

    return (
        <LabelContext.Provider
            value={{labelHeader, setLabelHeader, updatePage, setUpdatePage}}
            >
            {children}
        </LabelContext.Provider>
    )
}

export const useLabelContext = () => useContext(LabelContext);