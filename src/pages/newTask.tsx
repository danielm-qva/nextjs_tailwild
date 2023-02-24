import { useEffect, useState } from 'react';
import Layout from './component/Layout';
import { useTask } from './context/appContext'
import { useRouter } from 'next/router'

function newTask() {
     const { push, query } = useRouter();

     const { task, createTask, updateTask, } = useTask();

     useEffect(() => {
          if (query.id) {
               const taskFound = task.find((item: any) => item.id === Number(query.id));
               setTask({ title: taskFound.title, description: taskFound.description, priority: taskFound.priority })
          }
     }, [])

     const [tasks, setTask] = useState({ title: '', description: '', priority: '' })

     const handeOnchange = (e: any) => {
          const { name, value } = e.target;
          setTask({ ...tasks, [name]: value })
     }

     const handleSubmit = (e: any) => {
          e.preventDefault();
          createTask(tasks.title, tasks.description, tasks.priority)

          push('/')
     }

     return (
          <Layout>
               <div className="w-full py-6 flex justify-center">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                       {
                           !query.id ? (<h1 className='text-center py-3 mb-3 font-bold'>Create Task</h1>) : (<h1 className='text-center py-3 mb-3 font-bold'>View Task</h1>)
                       }
                         <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" >
                                   Name Task
                              </label>

                              {
                                   !query.id ?
                                        (<input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                             name="title" type="text" placeholder='Write the title' onChange={handeOnchange} value={tasks.title} />)
                                        :
                                        (<input disabled className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:cursor-no-drop"
                                             name="title" type="text"  value={tasks.title} />)}

                         </div>

                         <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" >
                                   Priority
                              </label>

                              {
                                   !query.id ?
                                        (<select value={tasks.priority} required name='priority' onChange={handeOnchange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                             <option defaultValue={''}></option>
                                             <option value="low">Low</option>
                                             <option value="medium">Medium</option>
                                             <option value="high">High</option>
                                        </select>) :
                                        (<select disabled value={tasks.priority}  name='priority' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:cursor-no-drop">
                                             <option defaultValue={''}></option>
                                             <option value="low">Low</option>
                                             <option value="medium">Medium</option>
                                             <option value="high">High</option>
                                        </select>)
                              }

                         </div>
                         <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                   Descriptions
                              </label>
                              {
                                   !query.id ? 
                                   ( <textarea required value={tasks.description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                                   focus:shadow-outline" onChange={handeOnchange} name="description" rows={3} placeholder="write and description"></textarea>) : 
                                   (<textarea disabled  value={tasks.description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none hover:cursor-no-drop
                                   focus:shadow-outline"  rows={3} ></textarea>)
                              }
                             
                         </div>
                         <div className="flex items-center justify-between">
                              {
                                   !query.id ? (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Save
                                   </button>) : (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => push('/')}>
                                        Atras
                                   </button>)
                              }

                         </div>
                    </form>
               </div>
          </Layout>
     )

}

export default newTask;