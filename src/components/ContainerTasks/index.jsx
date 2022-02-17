import { useState, useContext, useEffect } from 'react';
import moment from 'moment';
import Task from '../task';
import { AuthContext } from '../../Contexts/AuthContext';

import styles from './style.module.scss';
import ModalNewTask from '../ModalNewTask';

export default function ContainerTasks() {
    const { getAllData, tasks } = useContext(AuthContext);

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <main className={styles.ContainerTasks}>
            <table>
                <thead>
                    <th></th>
                    <th>Task</th>
                    <th>Tempo</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {tasks.map((task) => <Task data={task} key={task.id}/>)}
                </tbody>
            </table>
            <ModalNewTask />
        </main>
    );
}