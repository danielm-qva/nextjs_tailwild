
import Layout from './component/Layout';
import { useTask } from './context/appContext';
import { VscTrash } from 'react-icons/vsc';
import { useRouter } from 'next/router'

function Home() {
  const { task, deleteTask } = useTask();

  const ruter = useRouter();

  const handeDelete = (id: number) => {
    deleteTask(id)
  }

  return (
    <Layout>
      <div className="flex justify-center">
        {
          task.length === 0 ? (<h1 className=' text-white '>There are not task</h1>) : (
            <div className='w-7/12'>{
              task.map((item: any, index: number) => (
                <div onClick={() => ruter.push(`edit/${item.id}`) } className='bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start items-center' key={index}>
                  <span className='text-5xl mr-5'>{item.id}</span>
                  <div className='w-full'>
                    <div className='flex justify-between'>
                      <h1 className='font-bold'>{item.title}</h1>
                      <div className={item.priority === 'low' ? 'text-yellow-200' : item.priority === 'medium' ? 'text-red-300' : 'text-red-600'}>
                        {String(item.priority).toUpperCase()}
                      </div>
                      <button className='bg-red-700 hover:bg-red-400 px-3 py-1 inline-flex items-center rounded-full transition  hover:scale-110 ease-in-out delay-100' onClick={(e) => { e.stopPropagation(); handeDelete(item.id)}}>
                        <VscTrash className='mr-2' />
                        Delete
                      </button>

                    </div>
                    <p className='text-gray-300'>{item.description}</p>
                  </div>

                </div>
              ))
            }
            </div>
          )
        }
      </div>
    </Layout>
  )
}

export default Home;
