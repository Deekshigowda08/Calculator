"use client"
import React from 'react'
import {useState,useRef } from 'react'

    
const Page = () => {
  const sub = useRef();
  const tohide = useRef();
  const [formData, setformData] = useState(0);
  const [chemistry, setchemistry] = useState(false);
  const [physics, setphysics] = useState(false);
  const chemistry1 = useRef();
  let handlechange=()=>{
     if (sub.current.value==="Chemistry"||sub.current.value==='chemistry'||sub.current.value==="Chemistry ") {
             setchemistry(true)
             tohide.current.style.display="none";
     }
     else if (sub.current.value==="Physics"||sub.current.value==='physics'||sub.current.value==="Physics ") {
        setphysics(true)
             tohide.current.style.display="none";
     }
     else{
        window.location.reload();
     }
     }
     const refi1 = useRef()
    const refi2 = useRef()
    const refi3 = useRef()
    const refi4 = useRef()
    const refi5 = useRef()
    const refi6 = useRef()
    const refi7 = useRef()
    const refi8 = useRef()
    const refi9 = useRef()
    const refe1 = useRef()
    const refe2 = useRef()
    const refe3 = useRef()
    const refe4 = useRef()
    const refe5 = useRef()
    const refe6 = useRef()
    const refe7 = useRef()
    const refe8 = useRef()
    const refe9 = useRef()
    const refi11 = useRef()
    const refi21 = useRef()
    const refi31 = useRef()
    const refi41 = useRef()
    const refi51 = useRef()
    const refi61 = useRef()
    const refi71 = useRef()
    const refi81 = useRef()
    const refi91 = useRef()
    const refe110 = useRef()
    const refe210 = useRef()
    const refe310 = useRef()
    const refe410 = useRef()
    const refe510 = useRef()
    const refe610 = useRef()
    const refe710 = useRef()
    const refe810= useRef()
    const refe910= useRef()
    const refi110 = useRef()
    const refi210 = useRef()
    const refi310 = useRef()
    const refi410 = useRef()
    const refi510 = useRef()
    const refi610 = useRef()
    const refi710 = useRef()
    const refi810 = useRef()
    const refi910 = useRef()
    const refe11 = useRef()
    const refe21 = useRef()
    const refe31 = useRef()
    const refe41 = useRef()
    const refe51 = useRef()
    const refe61 = useRef()
    const refe71 = useRef()
    const refe81= useRef()
    const refe91= useRef()
    const red = useRef();
    const red1 = useRef()
    const red2 = useRef()

    const HandleChange = () => {
        
        const check=(((Math.ceil((parseInt(refi1.current.value) + parseInt((refe1.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi2.current.value) + parseInt((refe2.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi3.current.value) + parseInt((refe3.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi4.current.value) + parseInt((refe4.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi5.current.value) + parseInt((refe5.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi6.current.value) + parseInt((refe6.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi7.current.value) + parseInt((refe7.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi8.current.value) + parseInt((refe8.current.value / 2))) / 10) * 2) + (Math.ceil((parseInt(refi9.current.value) + parseInt((refe9.current.value / 2))) / 10) * 3)) / 20);
 
        if (check>0 && check<=10) {
            setformData(((Math.ceil((parseInt(refi1.current.value) + parseInt((refe1.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi2.current.value) + parseInt((refe2.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi3.current.value) + parseInt((refe3.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi4.current.value) + parseInt((refe4.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi5.current.value) + parseInt((refe5.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi6.current.value) + parseInt((refe6.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi7.current.value) + parseInt((refe7.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi8.current.value) + parseInt((refe8.current.value / 2))) / 10) * 2) + (Math.ceil((parseInt(refi9.current.value) + parseInt((refe9.current.value / 2))) / 10) * 3)) / 20);
        chemistry1.current.style.display="none";
        }
        else{
            red.current.style.backgroundColor="red";
        }
          }
    const HandleChange1 = () => {
        const check=(((Math.ceil((parseInt(refi11.current.value) + parseInt((refe11.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi21.current.value) + parseInt((refe21.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi31.current.value) + parseInt((refe31.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi41.current.value) + parseInt((refe41.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi51.current.value) + parseInt((refe51.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi61.current.value) + parseInt((refe61.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi71.current.value) + parseInt((refe71.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi81.current.value) + parseInt((refe81.current.value / 2))) / 10) * 2) + (Math.ceil((parseInt(refi91.current.value) + parseInt((refe91.current.value / 2))) / 10) * 3)) / 20);
 
        if (check>0 && check<=10) {
            setformData(((Math.ceil((parseInt(refi11.current.value) + parseInt((refe11.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi21.current.value) + parseInt((refe21.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi31.current.value) + parseInt((refe31.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi41.current.value) + parseInt((refe41.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi51.current.value) + parseInt((refe51.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi61.current.value) + parseInt((refe61.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi71.current.value) + parseInt((refe71.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi81.current.value) + parseInt((refe81.current.value / 2))) / 10) * 2) + (Math.ceil((parseInt(refi91.current.value) + parseInt((refe91.current.value / 2))) / 10) * 3)) / 20);
            chemistry1.current.style.display="none"; 
        }
        else{
            red2.current.style.backgroundColor="red";
        }
        
                   }
    const HandleChange75=()=>{
           
        const check=(((Math.ceil((parseInt(refi1.current.value) + parseInt((refe1.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi2.current.value) + parseInt((refe2.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi3.current.value) + parseInt((refe3.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi4.current.value) + parseInt((refe4.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi5.current.value) + parseInt((refe5.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi6.current.value) + parseInt((refe6.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi7.current.value) + parseInt((refe7.current.value))) / 10)) + (Math.ceil((parseInt(refi8.current.value) + parseInt((refe8.current.value / 2))) / 10) * 2) + (Math.ceil((parseInt(refi9.current.value) + parseInt((refe9.current.value / 2))) / 10) * 3)) / 20);
 
        if (check>0 && check<=10) {
            setformData(((Math.ceil((parseInt(refi1.current.value) + parseInt((refe1.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi2.current.value) + parseInt((refe2.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi3.current.value) + parseInt((refe3.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi4.current.value) + parseInt((refe4.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi5.current.value) + parseInt((refe5.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi6.current.value) + parseInt((refe6.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi7.current.value) + parseInt((refe7.current.value))) / 10)) + (Math.ceil((parseInt(refi8.current.value) + parseInt((refe8.current.value / 2))) / 10) * 2) + (Math.ceil((parseInt(refi9.current.value) + parseInt((refe9.current.value / 2))) / 10) * 3)) / 20);
        chemistry1.current.style.display="none";
        }
        else{
            red.current.style.backgroundColor="red";
        }
    }  
    const HandleChange34 = () => {
        const check=(((Math.ceil((parseInt(refi110.current.value) + parseInt((refe110.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi210.current.value) + parseInt((refe210.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi310.current.value) + parseInt((refe310.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi410.current.value) + parseInt((refe410.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi510.current.value) + parseInt((refe510.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi610.current.value) + parseInt((refe610.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi710.current.value) + parseInt((refe710.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi810.current.value) + parseInt((refe810.current.value / 2))) / 10) * 2) + (Math.ceil((parseInt(refi910.current.value) + parseInt((refe910.current.value))) / 10) * 3)) / 20);
        console.log(check);
        if (check>0 && check<=10) {
            setformData(((Math.ceil((parseInt(refi110.current.value) + parseInt((refe110.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi210.current.value) + parseInt((refe210.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi310.current.value) + parseInt((refe310.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi410.current.value) + parseInt((refe410.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi510.current.value) + parseInt((refe510.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi610.current.value) + parseInt((refe610.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi710.current.value) + parseInt((refe710.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi810.current.value) + parseInt((refe810.current.value / 2))) / 10) * 2) + (Math.ceil((parseInt(refi910.current.value) + parseInt((refe910.current.value))) / 10) * 3)) / 20);
            chemistry1.current.style.display="none"; 
        }
        else{
            console.log("done")
            red1.current.style.backgroundColor="red";
        }
        
                   }           
  
  return (
    <>
    <div ref={tohide} className='md:fixed md:top-[15%] md:left-[10%] bg-stone-300 sm:flex sm:justify-center sm:h-screen md:w-[80%]  md:h-[80%]'>
    <div className='md:w-[60%] h-[40%] md:m-auto sm:my-auto md:mt-[15%]  gap-8 grid md:place-items-center'>
      <div className='text-3xl font-bold m-auto sm:h-2'>Enter Your Semester</div>
      <input ref={sub} placeholder='Physics or Chemistry etc..' type="text" className='border-2  border-indigo-700 rounded-full py-3 px-5 text-center md:w-[70%] m-auto' />
      <button onClick={handlechange} className='bg-green-500 p-5   rounded-full w-[30%] m-auto text-white font-bold'>Submit</button>
      </div>
    </div>
    {chemistry && <div ref={chemistry1}><div className='sm:h-screen block md:hidden md:w-[100%] sm:grid sm:place-content-center'>
        <div className='md:fixed md:top-[12%] md:left-[10%] bg-stone-300 md:w-[100%] h-[90%]'>
            <div className='h-[90%] w-[80%] sm:mx-auto'>
                <div className='sm:w-[100%] md:grid md:place-content-center  sm:flex sm:flex-col sm:align-middle sm:justify-center'><div><div className='text-sm font-semibold md:my-1 mx-12'>Subject-1:Mathematics</div>
                    <div className='flex gap-4'>
                        <div className='sm:flex sm:justify-around sm:align-middle'><div>
                            <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                            <input type="text" ref={refi110} placeholder='50' className='border  sm:w-[100%] border-indigo-700 px-5' />
                        </div></div>
                        <div className='sm:flex sm:justify-center sm:align-middle'><div>
                            <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                            <input type="text" ref={refe110} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                        </div></div>
                    </div>
                </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-2:Chemistry</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi210} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe210} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-3:Electronics</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi310} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe310} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-4:Mechanical</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi410} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe410} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-5:PPS</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi510} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe510} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-6:Chemistry lab</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi610} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe610} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-7:PPS lab</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi710} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe710} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-8:Workshop</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi810} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe810} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-9:DTI</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi910} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe910} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-4' />
                            
                        </div>
                    </div>
                    </div></div>
                            <div className='grid place-content-center  my-4'>
                            <button onClick={HandleChange34} ref={red1} className='bg-green-500  text-white text-xl font-semibold py-2 px-4 rounded-full '>Submit</button>
                            </div>
                </div>
            </div>
        </div>
        </div>
        <div className='fixed top-[12%] sm:hidden md:block left-[10%] bg-stone-300 w-[80%] h-[90%]'>
            <div><div className='text-sm font-semibold my-1 mx-12'>Subject-1:Mathematics</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi1} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe1} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-2:Chemistry</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi2} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe2} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-3:Electronics</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi3} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe3} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-4:Mechanical</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi4} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe4} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-5:Workshop Lab</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi5} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe5} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-6:Chemistry lab</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi6} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe6} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-7:DTI</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi7} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe7} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-8:PPS</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi8} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe8} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-9:PPS Lab</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi9} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe9} type="number" placeholder='100' className='border border-indigo-700 px-4' />
                    </div>
                </div>
            </div>
            <button onClick={HandleChange75} ref={red} className='bg-green-500 text-white text-xl font-semibold py-3 px-5 rounded-full fixed bottom-2 left-[47%]'>Submit</button>
        </div>
        </div>}
        {physics && <div ref={chemistry1}><div className='h-screen m-auto block md:hidden md:w-[100%] sm:grid sm:place-content-center'>
        <div className='md:fixed md:top-[12%] md:left-[10%] bg-stone-300 md:w-[100%] h-[90%]'>
            <div className='h-[90%] w-[80%] sm:mx-auto'>
                <div className='sm:w-[100%] md:grid md:place-content-center  sm:flex sm:flex-col sm:align-middle sm:justify-center'><div><div className='text-sm font-semibold md:my-1 mx-12'>Subject-1:Mathematics</div>
                    <div className='flex gap-4'>
                        <div className='sm:flex sm:justify-around sm:align-middle'><div>
                            <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                            <input type="text" ref={refi11}  placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                        </div></div>
                        <div className='sm:flex sm:justify-center sm:align-middle'><div>
                            <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                            <input type="text" ref={refe11} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                        </div></div>
                    </div>
                </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-2:Physics</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi21} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe21} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-3:Electrical</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi31} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe31} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-4:Mechanics</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi41} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe41} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-5:Graphics</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi51} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe51} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-6:Physics lab</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi61} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe61} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-7:Electrical lab</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi71} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe71} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-8:English</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi81} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe81} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-9:Media Presentation</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi91} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe91} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-4' />
                            
                        </div>
                    </div>
                    </div></div>
                            <div className='grid place-content-center  md:hidden my-4'>
                            <button ref={red2} onClick={HandleChange1} className='bg-green-500  text-white text-xl font-semibold py-2 px-4 rounded-full '>Submit</button>
                            </div>
                </div>
            </div>
        </div>
        </div>
        <div className='fixed top-[12%] md:block sm:hidden left-[10%] bg-stone-300 w-[80%] h-[90%]'>
            <div><div className='text-sm font-semibold my-1 mx-12'>Subject-1:Mathematics</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi1} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe1} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-2:Physics</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi2} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe2} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-3:Electrical</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi3} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe3} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-4:Mechanics</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi4} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe4} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-5:English</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi5} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe5} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-6:Physics lab</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi6} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe6} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-7:Media</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi7} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe7} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-8:Graphics</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi8} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe8} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-9:Electrical Lab</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi9} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe9} type="number" placeholder='100' className='border border-indigo-700 px-4' />
                    </div>
                </div>
            </div>
            <button onClick={HandleChange} ref={red} className='bg-green-500 text-white text-xl font-semibold py-3 px-5 rounded-full fixed bottom-2 left-[47%]'>Submit</button>
        </div>
        </div>}
        {(formData>0&&formData<=10) && <><div className='md:fixed md:top-[15%] md:left-[10%] bg-stone-300 md:w-[80%] md:h-[80%] sm:h-screen sm:w-screen'>
    <div className='w-[60%] md:h-[40%] sm:h-[90%] m-auto md:mt-[15%] gap-8 grid place-items-center sm:flex sm:justify-center '>
      <div className=''>
      <div className='text-3xl font-bold m-auto'>Your SGPA is:</div>
      <div className='text-6xl font-bold sm:text-center m-auto'>{formData}</div>
      </div></div>
    </div> </>}
    
    </>
  )
}

export default Page 