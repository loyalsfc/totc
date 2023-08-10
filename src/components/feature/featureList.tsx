import React from 'react'

function FeatureList({children, text}:{children: React.ReactNode, text: string}) {
    return (
        <li className='flex items-center gap-8'>
            <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 bg-white drop-shadow-lg grid place-content-center">
                {children}
            </div>
            <p>{text}</p>
        </li>
    )
}

export default FeatureList