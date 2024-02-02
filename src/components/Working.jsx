import { useState } from "react"

const Working = () => {
  const [days ,setDays] = useState('Sunday')
  return (
    <>

    <section>
        <div className='flex items-center justify-cente py-10'>
            <ul  className='flex items-center justify-center mx-auto  gap-9 text-gray-500 text-xl'>
            <li onClick={()=>setDays('Sunday')} className={`cursor-pointer ${days === 'Sunday' ? 'text-[#A1F75E]' :''}`}>Sunday</li>
            <li onClick={()=>setDays('Monday')} className={`cursor-pointer ${days === 'Monday' ? 'text-[#A1F75E]' :''}`}>Monday</li>
            <li onClick={()=>setDays('tuesday')} className={`cursor-pointer ${days === 'tuesday' ? 'text-[#A1F75E]' :''}`}>tuesday</li>
            <li onClick={()=>setDays('wednesday')} className={`cursor-pointer ${days === 'wednesday' ? 'text-[#A1F75E]' :''}`}>wednesday</li>
            <li onClick={()=>setDays('thursday')} className={`cursor-pointer ${days === 'thursday' ? 'text-[#A1F75E]' :''}`}>thursday</li>
            <li onClick={()=>setDays('Friday')} className={`cursor-pointer ${days === 'Friday' ? 'text-[#A1F75E]' :''}`} >Friday</li>
            <li onClick={()=>setDays('Saturday')}className={`cursor-pointer ${days === 'Saturday' ? 'text-[#A1F75E]' :''}`} >Saturday</li>
            
          </ul>
        </div>



        

<div className={`relative overflow-x-auto shadow-md sm:rounded-lg px-20 ${days === 'Sunday' ? 'block' : 'hidden'}`}>
    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-10 bg-gray-50 dark:bg-gray-800">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Workout
                </th>
                <th scope="col" className="px-6 py-3">
                    Trainer 
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00
                </th>
                <td className="px-6 py-4">
                Beginners
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                Cross Fit / Pilates
                </td>
                <td className="px-6 py-4">
                    trainer Number 1
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                07.00 - 09.00
                </th>
                <td className="px-6 py-4">
                Advanced
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                Mixed Circuit Cardio Workout   </td>
                <td className="px-6 py-4">
                    Trainer number 2
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                09.00 - 10.00                </th>
                <td className="px-6 py-4">
                Intermediate
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                Yoga / Athletic Class

</td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00                </th>
                <td className="px-6 py-4">
                    Beginners
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Fit Body
                </td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00                </th>
                <td className="px-6 py-4">
                    Intermidiate
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Power Club/Boxing
                </td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div className={`relative overflow-x-auto shadow-md sm:rounded-lg px-20 ${days === 'Monday' ? 'block' : 'hidden'}`}>
    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-10 bg-gray-50 dark:bg-gray-800">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Workout
                </th>
                <th scope="col" className="px-6 py-3">
                    Trainer
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Yoga / Athletic Class


                </th>
                <td className="px-6 py-4">
                Beginners
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    
                </th>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    
                </td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                </th>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    
                </td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                </th>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    
                </td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div className={`relative overflow-x-auto shadow-md sm:rounded-lg px-20 ${days === 'tuesday' ? 'block' : 'hidden'}`}>
    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-10 bg-gray-50 dark:bg-gray-800">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Workout
                </th>
                <th scope="col" className="px-6 py-3">
                    Trainer
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                </th>
                <td className="px-6 py-4">
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                </td>
                <td className="px-6 py-4">
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                   
                </th>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  
                </td>
                <td className="px-6 py-4">
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">                </th>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    
                </td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                </th>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    
                </td>
                <td className="px-6 py-4">
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  
                </th>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    
                </td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div className={`relative overflow-x-auto shadow-md sm:rounded-lg  px-20 ${days === 'wednesday' ? 'block' : 'hidden'}`}>
    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-10 bg-gray-50 dark:bg-gray-800">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Workout
                </th>
                <th scope="col" className="px-6 py-3">
                    Trainer
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                </th>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    
                </td>
                <td className="px-6 py-4">
                
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div className={`relative overflow-x-auto shadow-md sm:rounded-lg   px-20 ${days === 'thursday' ? 'block' : 'hidden'}`}>
    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-10 bg-gray-50 dark:bg-gray-800">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Workout
                </th>
                <th scope="col" className="px-6 py-3">
                    Triner
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div className={`relative overflow-x-auto shadow-md sm:rounded-lg px-20 ${days === 'Friday' ? 'block' : 'hidden'}`}>
    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-10 bg-gray-50 dark:bg-gray-800">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Workout
                </th>
                <th scope="col" className="px-6 py-3">
                    Trainer 
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div className={`relative overflow-x-auto shadow-md sm:rounded-lg px-20 ${days === 'Saturday' ? 'block' : 'hidden'}`}>
    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-10 bg-gray-50 dark:bg-gray-800">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Workout
                </th>
                <th scope="col" className="px-6 py-3">
                    Trainer 
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                06.00 - 07.00                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
            </tr>
        </tbody>
    </table>
</div>
</section>
    </>
  )
}

export default Working