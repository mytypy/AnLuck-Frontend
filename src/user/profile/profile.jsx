import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import CreatePostModal from "../../components/CreatePostModal/CreatePostModal"
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal"
import styles from "../../styles/profile.module.css"
import { postsUser, userFriends } from "./data"


export default function Profile() {
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [expandedComments, setExpandedComments] = useState({})
  const [replyingTo, setReplyingTo] = useState({})
  const [commentPhotos, setCommentPhotos] = useState({})
  const [likedPosts, setLikedPosts] = useState({})

  const [posts, setPosts] = useState(postsUser)

  const [friends] = useState(userFriends)

  const [profile, setProfile] = useState({
    name: "Никита Тик Ток",
    username: "@kavinski",
    bio: "Backend developer and tech enthusiast passionate about building scalable applications. Love coding in Python, exploring new technologies, and bringing ideas to life through clean and efficient code.",
    location: "San Francisco, CA",
    website: "kavinski.dev",
    avatar: "https://avatars.githubusercontent.com/u/143941740?v=4",
    joinDate: "March 2023",
    work: "Tech Corp • 3 years",
  })

  const handleCreatePost = (newPost) => {
    const post = {
      id: posts.length + 1,
      author: profile.name,
      text: newPost.text,
      time: "Just now",
      avatar: profile.avatar,
      likes: 0,
      comments: 0,
      shares: 0,
      commentsList: [],
    }
    setPosts([post, ...posts])
  }

  const handleEditProfile = (updatedProfile) => {
    setProfile({ ...profile, ...updatedProfile })
  }

  const toggleComments = (postId) => {
    setExpandedComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  const addComment = (postId, commentText, photos = []) => {
    if (!commentText.trim() && photos.length === 0) return

    const newComment = {
      id: Date.now(),
      author: profile.name,
      text: commentText,
      time: "Just now",
      avatar: profile.avatar,
      photos: photos,
      replies: [],
    }

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              commentsList: [...post.commentsList, newComment],
              comments: post.comments + 1,
            }
          : post,
      ),
    )
  }

  const addReply = (postId, commentId, replyText, photos = []) => {
    if (!replyText.trim() && photos.length === 0) return

    const newReply = {
      id: Date.now(),
      author: profile.name,
      text: replyText,
      time: "Just now",
      avatar: profile.avatar,
      photos: photos,
    }

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              commentsList: post.commentsList.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: [...(comment.replies || []), newReply],
                    }
                  : comment,
              ),
            }
          : post,
      ),
    )

    setReplyingTo((prev) => ({ ...prev, [`${postId}-${commentId}`]: false }))
  }

  const handleCommentPhotoUpload = (postId, files) => {
    const photoUrls = Array.from(files).map((file) => URL.createObjectURL(file))
    setCommentPhotos((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), ...photoUrls],
    }))
  }

  const removeCommentPhoto = (postId, photoIndex) => {
    setCommentPhotos((prev) => ({
      ...prev,
      [postId]: prev[postId].filter((_, index) => index !== photoIndex),
    }))
  }

  const handleLike = (postId) => {
    console.log("[v0] Like button clicked for post:", postId)

    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: likedPosts[postId] ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  return (
    <div>
      <Navbar avatar={profile.avatar} />

      <main className={styles.mainContent}>
        <section className={styles.profileHeader}>
          <img src={profile.avatar || "/placeholder.svg"} alt="Profile Picture" className={styles.profileAvatar} />
          <h1 className={styles.profileName}>{profile.name}</h1>
          <p className={styles.profileUsername}>{profile.username}</p>
          <p className={styles.profileBio}>{profile.bio}</p>

          <div className={styles.userInfo}>
            <div className={styles.infoItem}>
              <span>📍</span>
              <span>{profile.location}</span>
            </div>
            <div className={styles.infoItem}>
              <span>🌐</span>
              <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer">
                {profile.website}
              </a>
            </div>
            <div className={styles.infoItem}>
              <span>📅</span>
              <span>Joined {profile.joinDate}</span>
            </div>
            <div className={styles.infoItem}>
              <span>💼</span>
              <span>{profile.work}</span>
            </div>
          </div>

          <div className={styles.profileStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>993</span>
              <span className={styles.statLabel}>Posts</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>12.5K</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>993</span>
              <span className={styles.statLabel}>Following</span>
            </div>
          </div>

          <div className={styles.profileActions}>
            <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => setShowEditProfile(true)}>
              Edit Profile
            </button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>Share Profile</button>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <section className={styles.postsSection}>
            <div className={styles.postsHeader}>
              <h2 className={styles.recentPostsTitle}>
                <span className={styles.titleGradient}>Recent Posts</span>
                <div className={styles.titleUnderline}></div>
              </h2>
              <button className={styles.createPostBtn} onClick={() => setShowCreatePost(true)}>
                + Create New Post
              </button>
            </div>

            <div className={styles.postsContainer}>
              {posts.map((post) => (
                <div key={post.id} className={styles.postCard}>
                  <div className={styles.postHeader}>
                    <img src={post.avatar || "/placeholder.svg"} alt="User" className={styles.postAvatar} />
                    <div className={styles.postUserInfo}>
                      <div className={styles.postAuthor}>{post.author}</div>
                      <div className={styles.postTime}>{post.time}</div>
                    </div>
                    <button className={styles.postMenuBtn}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>

                  <div className={styles.postContent}>
                    <div className={styles.postText}>{post.text}</div>
                    {post.image && (
                      <img src={post.image || "/placeholder.svg"} alt="Post content" className={styles.postImage} />
                    )}
                  </div>

                  <div className={styles.postActions}>
                    <button
                      className={`${styles.postActionBtn} ${likedPosts[post.id] ? styles.liked : ""}`}
                      onClick={() => handleLike(post.id)}
                    >
                      <svg
                        className={styles.actionIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={likedPosts[post.id] ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span>{post.likes}</span>
                    </button>
                    <button className={styles.postActionBtn} onClick={() => toggleComments(post.id)}>
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
                      <span>{post.comments}</span>
                    </button>
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
                        <path d="M17 1l4 4-4 4" />
                        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                        <path d="M7 23l-4-4 4-4" />
                        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                      </svg>
                      <span>{post.shares}</span>
                    </button>
                  </div>

                  {expandedComments[post.id] && (
                    <div className={styles.commentsSection}>
                      <div className={styles.commentsList}>
                        {post.commentsList.map((comment) => (
                          <div key={comment.id} className={styles.commentItem}>
                            <img
                              src={comment.avatar || "/placeholder.svg"}
                              alt="User"
                              className={styles.commentAvatar}
                            />
                            <div className={styles.commentContent}>
                              <div className={styles.commentHeader}>
                                <span className={styles.commentAuthor}>{comment.author}</span>
                                <span className={styles.commentTime}>{comment.time}</span>
                              </div>
                              <div className={styles.commentText}>{comment.text}</div>
                              {comment.photos && comment.photos.length > 0 && (
                                <div className={styles.commentPhotos}>
                                  {comment.photos.map((photo, index) => (
                                    <img
                                      key={index}
                                      src={photo || "/placeholder.svg"}
                                      alt="Comment attachment"
                                      className={styles.commentPhoto}
                                    />
                                  ))}
                                </div>
                              )}
                              <button
                                className={styles.replyBtn}
                                onClick={() =>
                                  setReplyingTo((prev) => ({
                                    ...prev,
                                    [`${post.id}-${comment.id}`]: !prev[`${post.id}-${comment.id}`],
                                  }))
                                }
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {post.commentsList.map((comment) =>
                        comment.replies && comment.replies.length > 0 ? (
                          <div key={`replies-${comment.id}`} className={styles.repliesContainer}>
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className={styles.replyItem}>
                                <img
                                  src={reply.avatar || "/placeholder.svg"}
                                  alt="User"
                                  className={styles.commentAvatar}
                                />
                                <div className={styles.commentContent}>
                                  <div className={styles.commentHeader}>
                                    <span className={styles.commentAuthor}>{reply.author}</span>
                                    <span className={styles.commentTime}>{reply.time}</span>
                                  </div>
                                  <div className={styles.commentText}>{reply.text}</div>
                                  {reply.photos && reply.photos.length > 0 && (
                                    <div className={styles.commentPhotos}>
                                      {reply.photos.map((photo, index) => (
                                        <img
                                          key={index}
                                          src={photo || "/placeholder.svg"}
                                          alt="Reply attachment"
                                          className={styles.commentPhoto}
                                        />
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : null,
                      )}

                      {post.commentsList.map((comment) =>
                        replyingTo[`${post.id}-${comment.id}`] ? (
                          <div key={`reply-form-${comment.id}`} className={styles.replyForm}>
                            <img
                              src={profile.avatar || "/placeholder.svg"}
                              alt="Your avatar"
                              className={styles.commentAvatar}
                            />
                            <div className={styles.replyInputContainer}>
                              <input
                                type="text"
                                placeholder={`Reply to ${comment.author}...`}
                                className={styles.commentInput}
                                id={`reply-input-${post.id}-${comment.id}`}
                                onKeyPress={(e) => {
                                  if (e.key === "Enter") {
                                    addReply(
                                      post.id,
                                      comment.id,
                                      e.target.value,
                                      commentPhotos[`reply-${post.id}-${comment.id}`] || [],
                                    )
                                    e.target.value = ""
                                    setCommentPhotos((prev) => ({ ...prev, [`reply-${post.id}-${comment.id}`]: [] }))
                                  }
                                }}
                              />

                              {commentPhotos[`reply-${post.id}-${comment.id}`] &&
                                commentPhotos[`reply-${post.id}-${comment.id}`].length > 0 && (
                                  <div className={styles.commentPhotoPreview}>
                                    {commentPhotos[`reply-${post.id}-${comment.id}`].map((photo, index) => (
                                      <div key={index} className={styles.photoPreviewItem}>
                                        <img
                                          src={photo || "/placeholder.svg"}
                                          alt="Preview"
                                          className={styles.previewImage}
                                        />
                                        <button
                                          className={styles.removePhotoBtn}
                                          onClick={() => {
                                            const key = `reply-${post.id}-${comment.id}`
                                            setCommentPhotos((prev) => ({
                                              ...prev,
                                              [key]: prev[key].filter((_, i) => i !== index),
                                            }))
                                          }}
                                        >
                                          ×
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                )}

                              <div className={styles.commentActions}>
                                <input
                                  type="file"
                                  multiple
                                  accept="image/*"
                                  className={styles.hiddenFileInput}
                                  id={`reply-photo-${post.id}-${comment.id}`}
                                  onChange={(e) =>
                                    handleCommentPhotoUpload(`reply-${post.id}-${comment.id}`, e.target.files)
                                  }
                                />
                                <label htmlFor={`reply-photo-${post.id}-${comment.id}`} className={styles.photoBtn}>
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21,15 16,10 5,21" />
                                  </svg>
                                </label>
                                <button
                                  className={styles.sendBtn}
                                  onClick={() => {
                                    const input = document.getElementById(`reply-input-${post.id}-${comment.id}`)
                                    addReply(
                                      post.id,
                                      comment.id,
                                      input.value,
                                      commentPhotos[`reply-${post.id}-${comment.id}`] || [],
                                    )
                                    input.value = ""
                                    setCommentPhotos((prev) => ({ ...prev, [`reply-${post.id}-${comment.id}`]: [] }))
                                  }}
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22,2 15,22 11,13 2,9 22,2" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : null,
                      )}

                      <div className={styles.addComment}>
                        <img
                          src={profile.avatar || "/placeholder.svg"}
                          alt="Your avatar"
                          className={styles.commentAvatar}
                        />
                        <div className={styles.commentInputContainer}>
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            className={styles.commentInput}
                            id={`comment-input-${post.id}`}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                addComment(post.id, e.target.value, commentPhotos[post.id] || [])
                                e.target.value = ""
                                setCommentPhotos((prev) => ({ ...prev, [post.id]: [] }))
                              }
                            }}
                          />

                          {commentPhotos[post.id] && commentPhotos[post.id].length > 0 && (
                            <div className={styles.commentPhotoPreview}>
                              {commentPhotos[post.id].map((photo, index) => (
                                <div key={index} className={styles.photoPreviewItem}>
                                  <img
                                    src={photo || "/placeholder.svg"}
                                    alt="Preview"
                                    className={styles.previewImage}
                                  />
                                  <button
                                    className={styles.removePhotoBtn}
                                    onClick={() => removeCommentPhoto(post.id, index)}
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className={styles.commentActions}>
                            <input
                              type="file"
                              multiple
                              accept="image/*"
                              className={styles.hiddenFileInput}
                              id={`comment-photo-${post.id}`}
                              onChange={(e) => handleCommentPhotoUpload(post.id, e.target.files)}
                            />
                            <label htmlFor={`comment-photo-${post.id}`} className={styles.photoBtn}>
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21,15 16,10 5,21" />
                              </svg>
                            </label>
                            <button
                              className={styles.sendBtn}
                              onClick={() => {
                                const input = document.getElementById(`comment-input-${post.id}`)
                                addComment(post.id, input.value, commentPhotos[post.id] || [])
                                input.value = ""
                                setCommentPhotos((prev) => ({ ...prev, [post.id]: [] }))
                              }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22,2 15,22 11,13 2,9 22,2" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <aside className={styles.sidebar}>
            <section className={styles.friendsSection}>
              <h2 className={styles.cardTitle}>Друзья {friends.length}</h2>
              <div className={styles.friendsGrid}>
                {friends.map((friend) => (
                  <div key={friend.id} className={styles.friendGridItem}>
                    <img
                      src={friend.avatar || "/placeholder.svg"}
                      alt={friend.name}
                      className={styles.friendGridAvatar}
                    />
                    <span className={styles.friendGridName}>{friend.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>

      <CreatePostModal isOpen={showCreatePost} onClose={() => setShowCreatePost(false)} onSubmit={handleCreatePost} />

      <EditProfileModal
        isOpen={showEditProfile}
        onClose={() => setShowEditProfile(false)}
        currentProfile={profile}
        onSubmit={handleEditProfile}
      />
    </div>
  )
}
