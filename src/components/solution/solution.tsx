import Image from 'next/image'
import React from 'react'

function Solution() {
    return (
        <section>
            <div className="container mx-auto">
                <h3 className='text-3xl font-bold text-blue mb-4'>All-in-one <span className='text-turqoise'>Cloud Solution</span></h3>
                <p className="max-w-3xl mx-auto">TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
            </div>
        </section>
    )
}

function Cards({icon, title, note, bgColor}: {icon: string, title: string, note: string, bgColor: string}){
    return(
        <div>
            <div className='bg-white rounded-[1.25rem]'>
                <div className={`rounded-full mb-20 h-16 w-16 ${'bg-'+bgColor} grid place-content-center drop-shadow-[0px_10px_40px_rgba(54,61,136,0.06)]`}>
                    <Image
                        src={icon}
                        height={40}
                        width={40}
                        alt=''
                    />
                </div>
                <h5>{title}</h5>
                <p>{note}</p>
            </div>
        </div>
    )
}

export default Solution