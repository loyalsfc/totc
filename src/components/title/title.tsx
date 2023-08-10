import React from 'react'

function Title({blueText, turqoiseText, note}:{blueText:string, turqoiseText:string, note:string}) {
    return (
        <>
            <h3 className='text-3xl font-bold text-blue mb-4 text-center'>{blueText} <span className='text-turqoise'>{turqoiseText}</span></h3>
            <p className="max-w-3xl mx-auto text-center">{note}</p>
        </>
    )
}

export default Title