import React from 'react'

function FeatureList({children, text}:{children: React.ReactNode, text: string}) {
    return (
        <li className='flex items-center gap-4 lg:gap-8'>
            <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 bg-white drop-shadow-lg grid place-content-center">
                {children}
            </div>
            <p className=''>{text}</p>
        </li>
    )
}

export default FeatureList