
import React, { createContext, useContext, useState } from 'react';

export const TaskContext = createContext({});

export const useTask = () => useContext(TaskContext);

export const ContextTask = ({ children }: { children: React.ReactNode }) => {

  //State the context
  const [task, setTask] = useState([])

  //Add task
  const createTask = (title: string, description: string, priority: string) =>
    setTask([...task, { id: task.length + 1, title, description, priority }])

  //Delet task  the context
  const deleteTask = (id: number,) =>
    setTask(task.filter((item: any) => item.id !== id))

  //Updata task 
  // const updateTask = (id:Number, updata: object) => 
  //     setTask([...task.map((item:any)=> item.id === Number(id) ? {...updata} : null)])

  return (
    <TaskContext.Provider value={{ task, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )

};
