import moment, { now } from "moment";
import { useEffect, useState } from "react";

import styles from './style.module.scss';

export default function Task({ data }) {
    const [status, setStatus] = useState(false);
    const [currentyClass, setCurrentyClass] = useState(styles.rowTask);
    const [checkTask, setCheckTask] = useState(data.checked);

    function handleStatus() {
        if (data.checked === true) {
            setStatus(true)
            setCurrentyClass(styles.taskChecked)
        } else {
            setStatus(false);
            setCurrentyClass(styles.rowTask)
        }
    }

    useEffect(() => {
        handleStatus()
    })

    return (
        <tr className={currentyClass}>
            <td>
                <input 
                type="checkbox" 
                checked={checkTask} 
                onChange={(e) => setCheckTask(e.target.checked)}
                />
            </td>
            <td>
                {data.task}
            </td>
            <td>
                {moment(data.time).fromNow()}
            </td>
            <td>
                {data.checked === true ? "Concluido" : "Em andamento"}
            </td>
        </tr>
    );
}