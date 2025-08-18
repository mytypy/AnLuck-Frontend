import styles from "../../styles/error.module.css"


export default function ErrorMessage({ messages = [], message, type = "error", onClose }) {
  const messageList = messages.length > 0 ? messages : message ? [{ text: message, type }] : []

  if (messageList.length === 0) return null

  const getIcon = (messageType) => {
    switch (messageType) {
      case "success":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12l2 2 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
      case "warning":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        )
      case "info":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
    }
  }

  if (messageList.length === 1) {
    const singleMessage = messageList[0]
    return (
      <div className={`${styles.errorMessage} ${styles[singleMessage.type || type]}`}>
        <div className={styles.errorContent}>
          <div className={styles.errorIcon}>{getIcon(singleMessage.type || type)}</div>
          <span className={styles.errorText}>{singleMessage.text}</span>
          {onClose && (
            <button className={styles.closeButton} onClick={onClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.errorMessageList}>
      {messageList.map((msg, index) => (
        <div key={index} className={`${styles.errorMessage} ${styles[msg.type]} ${styles.listItem}`}>
          <div className={styles.errorContent}>
            <div className={styles.errorIcon}>{getIcon(msg.type)}</div>
            <span className={styles.errorText}>{msg.text}</span>
          </div>
        </div>
      ))}
      {onClose && (
        <button className={styles.closeAllButton} onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
          </svg>
          Закрыть все
        </button>
      )}
    </div>
  )
}