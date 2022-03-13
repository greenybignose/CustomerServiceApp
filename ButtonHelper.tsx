import React from 'react';

interface Props{
    className?: string;
    colornow: string;
}

export const ButtonHelper:React.FC<Props> =({className, children}) => {
    return (
      <button className={className}>{children}</button>
    )
}

