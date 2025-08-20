import { useState } from "react"
import styles from "../../styles/profile.module.css"

export default function EditProfileModal({ isOpen, onClose, currentProfile, onSubmit }) {
  const [profile, setProfile] = useState({
    name: currentProfile?.name || "",
    username: currentProfile?.username || "",
    bio: currentProfile?.bio || "",
    location: currentProfile?.location || "",
    website: currentProfile?.website || "",
    avatar: currentProfile?.avatar || "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(profile)
    onClose()
  }

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfile((prev) => ({ ...prev, avatar: event.target.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Edit Profile</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name</label>
            <input
              type="text"
              className={styles.formInput}
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your display name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Username</label>
            <input
              type="text"
              className={styles.formInput}
              value={profile.username}
              onChange={(e) => handleChange("username", e.target.value)}
              placeholder="@username"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Bio</label>
            <textarea
              className={styles.formTextarea}
              value={profile.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              placeholder="Tell us about yourself..."
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Location</label>
            <input
              type="text"
              className={styles.formInput}
              value={profile.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Where are you based?"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Website</label>
            <input
              type="url"
              className={styles.formInput}
              value={profile.website}
              onChange={(e) => handleChange("website", e.target.value)}
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Profile Photo</label>
            <div className={styles.photoUploadContainer}>
              {profile.avatar && (
                <img src={profile.avatar || "/placeholder.svg"} alt="Preview" className={styles.photoPreview} />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className={styles.photoUploadInput}
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className={styles.photoUploadBtn}>
                📷 Upload Photo
              </label>
            </div>
          </div>

          <div className={styles.modalActions}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>
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
