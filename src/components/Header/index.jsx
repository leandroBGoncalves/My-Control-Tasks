import styles from './style.module.scss';

import { BiAddToQueue } from "react-icons/bi";

export default function Header() {
    return (
        <header className={styles.containerHeader}>
            <div className={styles.contentHeader}>
                <h1>Control Tasks</h1>
                <button>
                    <BiAddToQueue />
                    Add Task
                </button>
            </div>
        </header>
    )
}