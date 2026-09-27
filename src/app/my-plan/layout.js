import ExcerciseMuniteAndCalSection from '@/components/my-plan-page-components/ExcerciseMuniteAndCalSection'
import HeadingAndSubHeading from '@/components/my-plan-page-components/HeadingAndSubHeading'
import TodaysPlanSavedAndSortbySec from '@/components/my-plan-page-components/TodaysPlanSavedAndSortbySec'
import React from 'react'

const layout = ({children}) => {
  return (
    <section className='w-full  mt-[-20]'> 
        <div className='wraper max-w-270 mx-auto px-5 desktop:px-0'>
           <HeadingAndSubHeading/>
           <ExcerciseMuniteAndCalSection/>
           <TodaysPlanSavedAndSortbySec/>

           <div >
            {children}
           </div>

        </div>
    </section>
  )
}

export default layout
