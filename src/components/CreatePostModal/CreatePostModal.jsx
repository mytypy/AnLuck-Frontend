import { useState } from "react"
import styles from "../../styles/profile.module.css"


export default function CreatePostModal({ isOpen, onClose, onSubmit }) {
  const [postText, setPostText] = useState("")
  const [selectedImages, setSelectedImages] = useState([])

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const imageUrls = files.map((file) => URL.createObjectURL(file))
    setSelectedImages((prev) => [...prev, ...imageUrls])
  }

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (postText.trim()) {
      onSubmit({
        text: postText,
        images: selectedImages, // Changed from single image to multiple images
        timestamp: new Date().toISOString(),
      })
      setPostText("")
      setSelectedImages([])
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Create New Post</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>What's on your mind?</label>
            <textarea
              className={styles.formTextarea}
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Share your thoughts..."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Add Photos</label>
            <input type="file" className={styles.formInput} accept="image/*" multiple onChange={handleImageUpload} />

            {selectedImages.length > 0 && (
              <div className={styles.imagePreviewGrid}>
                {selectedImages.map((image, index) => (
                  <div key={index} className={styles.imagePreviewItem}>
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Preview ${index + 1}`}
                      className={styles.imagePreview}
                    />
                    <button type="button" className={styles.removeImageBtn} onClick={() => removeImage(index)}>
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.modalActions}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>
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