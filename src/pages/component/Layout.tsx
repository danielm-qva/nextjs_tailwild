import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react';
import {useTask} from '../context/appContext'

function Layout({children} : { children: React.ReactNode}) {
  const router = useRouter();
  const {task} = useTask();
  
  return ( 
      <div className="h-screen bg-gray-900">
        <header className=" flex items-center bg-gray-800 text-white px-28 py-4">
          <Link   className="font-black text-lg" href='/'>
                  Task App
          </Link>
          <span className='text-gray-100 ml-3 font-bold bg-green-500 px-2 py-3 rounded-full'> {task.length} TASK</span>
           <div className="flex-grow text-right">
           <button onClick={()=> router.push('/newTask')} className="bg-green-500 hover:bg-green-400 px-5 py-2 font-bold rounded-md">Add Task</button>
           </div>
        </header>
        <main className="px-28 py-10">
        {children}
        </main>
      </div>
  )
}

export default Layout;