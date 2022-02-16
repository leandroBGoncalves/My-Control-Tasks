import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [openModalNewTask, setOpenModalNewTask] = useState(false);

    function closeModalNewTask() {
        setOpenModalNewTask(false)
    }

    function openNewTask() {
        setOpenModalNewTask(true)
    }

    return (
        <AuthContext.Provider
        value={{
            openModalNewTask,
            openNewTask,
            closeModalNewTask,
        }}
        >
            { children }
        </AuthContext.Provider>
    )
}