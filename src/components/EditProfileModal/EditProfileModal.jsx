import styles from "../../styles/profile.module.css"


export default function EditProfileModal({ isOpen, onClose, currentProfile, onSubmit }) {
  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Edit Profile</h2>
          <button className={styles.closeBtn}>×</button>
        </div>

        <form>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name</label>
            <input type="text" className={styles.formInput} defaultValue="John Doe" placeholder="Your display name" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Username</label>
            <input type="text" className={styles.formInput} defaultValue="@johndoe" placeholder="@username" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Bio</label>
            <textarea
              className={styles.formTextarea}
              defaultValue="Software developer passionate about creating amazing user experiences."
              placeholder="Tell us about yourself..."
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Location</label>
            <input
              type="text"
              className={styles.formInput}
              defaultValue="San Francisco, CA"
              placeholder="Where are you based?"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Website</label>
            <input
              type="url"
              className={styles.formInput}
              defaultValue="https://johndoe.dev"
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Profile Photo</label>
            <div className={styles.photoUploadContainer}>
              <img src="/profile-photo-preview.png" alt="Preview" className={styles.photoPreview} />
              <input type="file" accept="image/*" className={styles.photoUploadInput} id="photo-upload" />
              <label htmlFor="photo-upload" className={styles.photoUploadBtn}>
                📷 Upload Photo
              </label>
            </div>
          </div>

          <div className={styles.modalActions}>
            <button type="button" className={styles.btnCancel}>
              Cancel
            </button>
            <button type="submit" className={styles.btnSubmit}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
