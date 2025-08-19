export function CloseButton({ onClose, class_name }) {
    return (
        <button className={class_name} onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
            </svg>
        </button>
    )
}

export function CloseAllButton({ onClose, class_name }) {
    return (
        <button className={class_name} onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
            </svg>
            Закрыть все
        </button>
    )
}