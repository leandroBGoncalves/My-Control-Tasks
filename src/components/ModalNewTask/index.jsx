import { useContext, useState } from 'react';
import { ref, set } from "firebase/database";
import { AuthContext } from '../../Contexts/AuthContext';
import { FaTasks, FaCloudUploadAlt } from 'react-icons/fa'

import moment from 'moment';
import Dialog from '@mui/material/Dialog';

import innerData from '../../pages/api/api'

import styles from './style.module.scss';

export default function ModalNewTask() {
    const { openModalNewTask, closeModalNewTask } = useContext(AuthContext)
    const [newTask, setNewTask] = useState('');

    const checked = false;

    async function setData() {
        await innerData( checked, newTask )
    }


    return (
        <Dialog
        open={openModalNewTask}
        onClose={closeModalNewTask}
        fullWidth
        maxWidth="sm"
        >
            <div className={styles.ContainerModal}>
                <h1>New Task <FaTasks /></h1>
                <div>
                    <input 
                    type="text" 
                    placeholder="Enter your task here" 
                    onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button onClick={setData}><FaCloudUploadAlt />Send</button>
                </div>
            </div>
        </Dialog>
    );
}