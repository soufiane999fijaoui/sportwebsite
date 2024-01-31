import { useState } from "react"

const Working = () => {
  const [color ,setColor] = useState('black')
  return (
    <>

    <section>
        <div className='flex items-center justify-cente py-10'>
            <ul  className='flex items-center justify-center mx-auto  gap-9 text-gray-500 text-xl'>
            <li onClick={()=>setColor('black')} className={`cursor-pointer ${color === 'black' ? 'text-[#A1F75E]' :''}`}>black</li>
            <li onClick={()=>setColor('red')} className={`cursor-pointer ${color === 'red' ? 'text-[#A1F75E]' :''}`}>red</li>
            <li onClick={()=>setColor('blue')} className={`cursor-pointer ${color === 'blue' ? 'text-[#A1F75E]' :''}`}>blue</li>
            <li onClick={()=>setColor('green')} className={`cursor-pointer ${color === 'green' ? 'text-[#A1F75E]' :''}`}>green</li>
            <li onClick={()=>setColor('yellow')} className={`cursor-pointer ${color === 'yellow' ? 'text-[#A1F75E]' :''}`}>yellow</li>
            <li onClick={()=>setColor('')} className='cursor-pointer '>Friday</li>
            <li onClick={()=>setColor('')} className='cursor-pointer '>Saturday</li>
            
          </ul>
        </div>



        

<div className={`relative overflow-x-auto shadow-md sm:rounded-lg px-20 ${color === 'black' ? 'block' : 'hidden'}`}>
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

<div className={`relative overflow-x-auto shadow-md sm:rounded-lg bg-red-600 px-20 ${color === 'red' ? 'block' : 'hidden'}`}>
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
<div className={`relative overflow-x-auto shadow-md sm:rounded-lg bg-blue-600 px-20 ${color === 'blue' ? 'block' : 'hidden'}`}>
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
<div className={`relative overflow-x-auto shadow-md sm:rounded-lg bg-green-600  px-20 ${color === 'green' ? 'block' : 'hidden'}`}>
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
<div className={`relative overflow-x-auto shadow-md sm:rounded-lg bg-yellow-600  px-20 ${color === 'yellow' ? 'block' : 'hidden'}`}>
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

</section>
    </>
  )
}

export default Working