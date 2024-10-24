"use client"
import React, { useState, useEffect } from 'react'
import TableBody from './TableBody'
import data from '@/app/data'


function TableIndex() {
// 103 completions   
 
    const [Participationdata, setParticipationdata] = useState([...data]);
    const [EligibleforSwags, setEligibleforSwags] = useState(0);

    useEffect(() => {
        calculateTotalEligibility();
    }, [])

    const calculateTotalEligibility = () => {
        let total = 0;
        data.forEach((ele) => {
            ele["All 3 Pathways Completed - Yes or No"] == "Yes" && total++;
        })
        setEligibleforSwags(total)
    }

    const searchname = (name) => {
        const newArr = [];
        for (let i = 0; i < data.length; i++) {
            let participant = data[i]["User Name"].toLowerCase();
            let match = participant.includes(name.toLowerCase());
            if (match) newArr.push(data[i]);

        }
        // console.log(newArr);
        setParticipationdata(newArr);
    }

    return (
        <div className='w-full relative px-3'>



            <div className="sec m-auto my-10 space-y-8 md:w-1/2 w-full mob:flex mob:flex-col">
               

                <div className="info md:flex md:flex-row  flex flex-col mob:justify-center items-center md:space-y-0 space-y-5 p-5 justify-evenly space-x-0">
                    <div className="eligibleforswag md:w-fit w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-green-50 shadow-lg shadow-green-300/30 border border-green-200">
                        <p className="text-center mob:text-start text-sm text-green-400">No of Eligible <br /> Participants for swags</p>
                        <p className="no text-2xl border-l-2 border-l-green-700 pl-3 text-green-800">{EligibleforSwags}</p>
                    </div>
                    <div className="participationdata md:w-fit w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200">
                        <p className="text-center mob:text-start text-sm text-blue-400">Total No of <br />Participants</p>
                        <p className="no text-2xl border-l-2 border-l-blue-700 pl-3 text-blue-800">{data.length}</p>
                    </div>
                </div>

                <div className="search m-auto mt-3 mob:py-3 py-2  space-x-5  flex justify-start items-center shadow-lg shadow-blue-400/30 bg-blue-50 w-full rounded-full">
                    <div className="icon px-3 "><svg xmlns="http://www.w3.org/2000/svg" className='h-5'  viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#3b82f6" /></svg></div>
                    <div className="input w-full">
                        <input
                            onChange={(e) => {
                                searchname(e.target.value)
                            }}
                            className='bg-transparent mob:text-lg text-base outline-none w-full' type="text" name="searchbar" id="searchbar" placeholder='Search Your Name Here' />
                    </div>
                </div>
            </div>

            <div className="w-full overflow-x-auto">
  <table className='table-fixed mx-auto'>
    <thead className='shadow-md text-sm bg-amber-500 text-gray-200 sticky top-2 z-10'>
      <tr className='text-center'>
        <td className="rounded-ss-lg w-10 p-2 border-r-2 border-r-gray-300">#</td>
        <td className="rounded-ss-lg w-72 p-2 border-r-2 border-r-gray-300">Name</td>
        <td className="mob:rounded-se-lg p-2 border-r-2 border-r-gray-300 max-w-[150px]">Completions of 3 Skill Badges</td>
        <td className="p-2 border-r-2 border-r-gray-300 max-w-[150px]">Prompt Design in Vertex AI </td>
        <td className="p-2 border-r-2 border-r-gray-300 max-w-[150px]">Develop GenAI Apps with Gemini... </td>
        <td className="rounded-se-lg p-2 max-w-[150px]">GenAI Game Completed</td>
      </tr>
    </thead>
    <TableBody
      Participationdata={Participationdata}
      setParticipationdata={setParticipationdata}
    />
  </table>
</div>




        </div>
        
    )
}

export default TableIndex
