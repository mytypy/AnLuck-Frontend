import styles from "../../styles/profile.module.css"

export default function CreatePostModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Create New Post</h2>
          <button className={styles.closeBtn}>×</button>
        </div>

        <form>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>What's on your mind?</label>
            <textarea className={styles.formTextarea} placeholder="Share your thoughts..." defaultValue="" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Add Photos</label>
            <input type="file" className={styles.formInput} accept="image/*" multiple />

            <div className={styles.imagePreviewGrid}>
              <div className={styles.imagePreviewItem}>
                <img src="/sample-image-preview.png" alt="Preview 1" className={styles.imagePreview} />
                <button type="button" className={styles.removeImageBtn}>
                  ×
                </button>
              </div>
              <div className={styles.imagePreviewItem}>
                <img src="/sample-image-preview-2.png" alt="Preview 2" className={styles.imagePreview} />
                <button type="button" className={styles.removeImageBtn}>
                  ×
                </button>
              </div>
            </div>
          </div>

          <div className={styles.modalActions}>
            <button type="button" className={styles.btnCancel}>
              Cancel
            </button>
            <button type="submit" className={styles.btnSubmit}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
