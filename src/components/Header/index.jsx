import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { BiAddToQueue } from "react-icons/bi";
import Fab from '@mui/material/Fab';
import styles from './style.module.scss';


export default function Header() {
    const { openNewTask } = useContext(AuthContext)
    return (
        <header className={styles.containerHeader}>
            <div className={styles.contentHeader}>
                <h1>Control Tasks</h1>
                <button
                onClick={() => openNewTask()}
                >
                    <BiAddToQueue />
                    Add Task
                </button>
            </div>
        </header>
    )
}