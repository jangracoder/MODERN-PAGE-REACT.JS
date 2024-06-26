import React from 'react'
import { resourcesLinks ,platformLinks ,communityLinks } from '../constants'

function Footer() {
  return (
        <footer>
            <div className='flex flex-wrap my-10 px-5 gap-4 md:justify-start md:gap-x-48 lg:justify-evenly '>
                <div className='mt-4 ' >
                    <h3 className='font-medium '>Resources</h3>
                    <div className='flex flex-col mt-5 '>
                        {resourcesLinks.map((link,index)=>(
                           <a key={index} className='mb-1  text-neutral-300 hover:text-white' href={link.href}><span className=''>{link.text}</span></a>

                        )  )}
                    </div>
                </div>
                <div className='mt-4 '>
                    <h3 className='font-medium'>
                        Platform
                    </h3>
                    <div className='flex flex-col mt-5'>
                        {platformLinks.map((link,index)=>(

                           <a key={index} className='mb-1 text-neutral-300 hover:text-white' href={link.href}><span >{link.text}</span></a>

                        )  )}
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='font-medium'>Community</h3>
                    <div className='flex flex-col mt-5'>
                        {communityLinks.map((link,index)=>(

                           <a key={index} className='mb-1 text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>

                        ))}
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer