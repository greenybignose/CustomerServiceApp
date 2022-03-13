import React from 'react';

interface Props{
    className?: string;
    ngumpet: string;
}

export const DivHelper:React.FC<Props> =({className, children}) => {
    return (
      <div className={className}>{children}</div>
    )
}

