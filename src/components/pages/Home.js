import React from 'react'
import HomeBtns from '../imports/HomeBtns'

export default function Home() {
  return (
    <div>
      <main>
         <div>
           <h1 className="mt-4">Wags & Whiskers</h1>
          <div className="p-2">
           <h4>Let us help you find the perfect pet addition for your family! <br /> Wags & Whiskers will search near and far to match you with the ideal adoptable pet. </h4>
           </div>
           <HomeBtns />
           
         </div>
        </main>
    </div>
  )
}
