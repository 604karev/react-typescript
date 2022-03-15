import React, { ReactNode } from "react";

interface Props {
    children: ReactNode,
    id?: number,
    className?: string,
}

export const Headline:React.FC<Props> = ({ children }) => {
    return (
        <h1 className="text-center py-2">{children}</h1>
    )
}   