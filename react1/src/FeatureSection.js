import React from 'react'
import FeatureTile from './FeatureTile'
function FeatureSection() {
    const bio = [
        {name:"naman", age:"10"},
        {name:"naman1", age:"101"},
        {name:"naman2", age:"1023"},
        {name:"naman3", age:"104"},
    ]
  return (
    <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A better way to start building.</h2></div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                {
                                    bio.map(({name, age})=>(
                                        <FeatureTile name={name} age={age}/>
                                    ))
                                    // bio.map((val)=>(
                                    //     <FeatureTile name={val.name} age={val.age}/>
                                    // ))
                                    /* map -> ?? */
                                    /* 
                                        
                                    */
                                }
                                {/* <FeatureTile />
                                <FeatureTile />
                                <FeatureTile /> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default FeatureSection