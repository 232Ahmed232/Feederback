import React from 'react';
import log from './log.png'
import yahya from "./file.jpeg"
import mussub from "./mu.jpeg"
import ahmed from "./ahmed.jpg"

function About() {
    return (
        <div className='text-center'>
            <div className='container w-1/2   pb-8 px-8  text-center m-auto bg-blue-100 shadow-lg mb-4'>

                <img className=' m-auto h-30 p-0' src={log} alt="" />
                <p className=' capitalize underline italic font font-semibold'>OUR MISSION “TO BUILD
                    PRODUCTIVE PAKISTAN” BY
                    INTRODUCING MORE
                    STARTUP AND BY
                    LEARNING AND INVENTING
                    MORE NEW TECHNILOGIES..</p>
            </div>

            <h2 className='my-10 text-3xl italic'>Our Team Memebers--CoFounders</h2>
            <div
                className='container w-1/1 bg-slate-100 lg:w-1/2  pb-8  px-10  m-auto  shadow-lg  flex flex-row   pt-10 items-center justify-center'>

                <img className=' w-1/2 h-30 p-0 h-64 mx-5' src={yahya} alt="" />
                <div className=' p-5 bg-white'>
                    <h2
                        className='text-xl font-bold  tracking-wider'
                    >Yahya Khan</h2>
                    <hr />
                    <h5>CoFounder of Weber</h5>
                    <h5>Have eyes on Big Teach</h5>
                    <h5>Abbottabad Tech Ambassador</h5>
                </div>
            </div>
            <div
                className='container w-1/1 lg:w-1/2 bg-slate-100 my-5  pb-8  px-10  m-auto  shadow-lg  flex flex-row   pt-10 items-center justify-center'>


                <div className=' p-5 bg-white '>
                    <h2
                        className='text-xl font-bold  tracking-wider'
                    >Mussub Khawar</h2>
                    <hr />
                    <h5>CoFounder of Weber</h5>
                    <h5>App Developer</h5>
                    <h5>Business Analysts </h5>
                </div>
                <img className='w-1/2 h-30 p-0 h-64 mx-5' src={mussub} alt="" />
            </div>
            <div
                className='container w-1/1 bg-slate-100 lg:w-1/2  pb-8  px-10  m-auto  shadow-lg  flex flex-row   pt-10 items-center justify-center'>

                <img className=' w-1/2 h-30 p-0 h-64 mx-5' src={ahmed} alt="" />
                <div className=' p-5 bg-white'>
                    <h2
                        className='text-xl font-bold  tracking-wider'
                    >Ahmed Ali</h2>
                    <hr />
                    <h5>CoFounder of Weber</h5>
                    <h5>Programmer And Web DEV</h5>
                    <h5>Technical Analysts</h5>
                </div>
            </div>
        </div>
    );
}

export default About;