import { useEffect, useState, useContext } from "react";
import moment, { now } from "moment";
import { supabase } from '../../services/supaBaseClient'

import styles from './style.module.scss';

export default function Task({ data, setGetData }) {
    const idItem = data.id;
    const [status, setStatus] = useState();
    const [currentyClass, setCurrentyClass] = useState(styles.rowTask);
    const [checkTask, setCheckTask] = useState(data.checked);
    const [descriptionStatus, setDescriptionStatus] = useState('')

    function handleStatus() {
        if (checkTask === true) {
            setStatus(true)
            setCurrentyClass(styles.taskChecked)
            setDescriptionStatus('Concluido')
        } else {
            setStatus(false);
            setCurrentyClass(styles.rowTask)
            setDescriptionStatus('Em andamento')
        }
    }


    useEffect(() => {
        handleStatus()
        setGetData(true)
    }, [checkTask])

    async function updateStatusTasck() {
        const { data, error } = await supabase
        .from('tascks_control')
        .update({ 
            checked: status,
         })
        .match({ id: idItem })
        if (error) {
            window.alert(`${error}`)
        }
    }

    useEffect(() => {
        updateStatusTasck()
    }, [status])

    return (
        <tr className={currentyClass}>
            <td>
                <input 
                type="checkbox" 
                checked={checkTask} 
                onChange={(e) => {
                    setCheckTask(e.target.checked)
                }}
                />
            </td>
            <td>
                {data.tasck}
            </td>
            <td>
                {moment(data.created_at).fromNow()}
            </td>
            <td>
                {descriptionStatus}
            </td>
        </tr>
    );
}