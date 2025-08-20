import styles from '../../styles/actionsbuttons.module.css'


export function Like({likes}) {
    return (
        <button
            className={`${styles.postActionBtn} ${styles.liked}`}
        >
            <svg
                className={styles.actionIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
            >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
                <span>{likes}</span>
        </button>
    )
}

export function Comment({comments}) {
    return (
        <button className={styles.postActionBtn}>
            <svg
                className={styles.actionIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>{comments}</span>
        </button>
    )
}

export function Shares({shares}) {
    return (
        <button className={styles.postActionBtn}>
            <svg
                className={styles.actionIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M17 1l4 4-4 4" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <path d="M7 23l-4-4 4-4" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
            </svg>
            <span>{shares}</span>
        </button>
    )
}