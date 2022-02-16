import { useState } from 'react';
import moment from 'moment';
import Task from '../task';

import styles from './style.module.scss';
import ModalNewTask from '../ModalNewTask';

export default function ContainerTasks() {
    const [tasks, setTasks] = useState([
        {
            checked: false,
            task: 'task fake 1 para control tasks',
            time: moment("2021-12-31"),
        },
        {
            checked: false,
            task: 'task fake 2 para control tasks',
            time: moment("2022-01-30"),
        },
        {
            checked: true,
            task: 'task fake 3 para control tasks',
            time: moment("2022-02-01"),
        },
        {
            checked: false,
            task: 'task fake 4 para control tasks',
            time: moment("2022-01-30"),
        },
        {
            checked: true,
            task: 'task fake 5 para control tasks',
            time: moment("1995-12-25"),
        },
    ])

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
                    {tasks.map((task) => <Task data={task} />)}
                </tbody>
            </table>
            <ModalNewTask />
        </main>
    );
}