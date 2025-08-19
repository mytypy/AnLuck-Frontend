import styles from "../../styles/error.module.css"
import { Warring, Success, Info, Default} from './FiledsErrors'
import { CloseButton, CloseAllButton } from "./Buttons"


export default function ErrorMessage({ messages = [], message, type = "error", onClose }) {
  const messageList = messages.length > 0 ? messages : message ? [{ text: message, type }] : []

  if (messageList.length === 0) return null

  const getIcon = (messageType) => {
    switch (messageType) {
      case "success":
        return (
          <Success />
        )
      case "warning":
        return (
          <Warring />
        )
      case "info":
        return (
          <Info />
        )
      default:
        return (
          <Default />
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
            <CloseButton class_name={styles.closeButton} onClose={onClose}/>
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
        <CloseAllButton class_name={styles.closeAllButton} onClose={onClose}/>
      )}
    </div>
  )
}