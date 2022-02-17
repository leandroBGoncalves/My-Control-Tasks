import { createContext, useState } from "react";
import { supabase } from '../services/supaBaseClient';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [openModalNewTask, setOpenModalNewTask] = useState(false);
    const [tasks, setTasks] = useState([])

    function closeModalNewTask() {
        setOpenModalNewTask(false)
    }

    function openNewTask() {
        setOpenModalNewTask(true)
    }

    async function getAllData() {
       const { data, error } =     await supabase
       .from('tascks_control')
       .select('*')
       if (error) {
           window.alert(`${error}`)
       } else {
        setTasks(data)
       }
    }

    return (
        <AuthContext.Provider
        value={{
            openModalNewTask,
            openNewTask,
            closeModalNewTask,
            getAllData,
            tasks,
        }}
        >
            { children }
        </AuthContext.Provider>
    )
}