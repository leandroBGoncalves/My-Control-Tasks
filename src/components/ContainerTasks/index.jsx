import { useState, useContext, useEffect } from 'react';
import Task from '../task';
import { AuthContext } from '../../Contexts/AuthContext';

import styles from './style.module.scss';
import ModalNewTask from '../ModalNewTask';

export default function ContainerTasks() {
    const { getAllData, tasks } = useContext(AuthContext);
    const [getdata, setGetData] = useState(false);

    const filterChecked = tasks.filter(tasck => {
        return tasck.checked === false 
    })

    const filterUnChecked = tasks.filter(tasck => {
        return tasck.checked === true 
    })

    useEffect(() => {
        getAllData()
        setGetData(false)
    }, [getdata])

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
                    {filterChecked.map((task) => <Task data={task} key={task.id} setGetData={setGetData} />)}
                        <tr className={styles.DividerTasks}>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                        </tr>
                    {filterUnChecked.map((task) => <Task data={task} key={task.id} setGetData={setGetData} />)}
                </tbody>
            </table>
            <ModalNewTask />
        </main>
    );
}