import React from 'react'

const NewTask = ({data}) => {
  return (
    <div id='scrol' className='flex-shrink-0 h-full overflow-auto w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-3 text-xl font-semibold'>{data.taskTtile}</h2>
            <p className='text-sm mt-2 '>
                {data.taskDescription}
            </p>
            <div className='mt-4'>
                <button className='hover:bg-blue-700'>Accept task</button>
            </div>
    </div>
  )
}

export default NewTask
