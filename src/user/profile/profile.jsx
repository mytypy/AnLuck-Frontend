import styles from "../../styles/profile.module.css"
import NavBar from "../../components/navbar/Navbar"
import CreatePostModal from "../../components/CreatePostModal/CreatePostModal"
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal"
import {Like, Comment, Shares} from "../../components/ActionsButton/Buttons"
import {postsUser, userFriends, dataSmiles} from "./data"
import { useAuth } from "../../providers/AuthProvider"
import { useProfile } from "../../providers/ProfileProvaider"


export default function Profile() {
  const { user } = useAuth()
  const { sayMeow } = useProfile()

  const userData = user
  userData.stats = {
      Posts: 'Артём пидор',
      Followers: 'Все переходим в тг бота: @dashgamebot',
      Following: 'Сириус автодром'
    }
  
  console.log(sayMeow())
  return (
    <div>
      <NavBar avatar={userData['avatar']} />

      <div className={styles.mainContent}>
        <div className={styles.profileHeader}>
          <img src={userData['avatar']} alt="Profile" className={styles.profileAvatar} />
          <h1 className={styles.profileName}>{userData['name']}</h1>
          <p className={styles.profileUsername}>{userData['tag']}</p>
          <p className={styles.profileBio}>
            {userData['bio']}
          </p>

          <div className={styles.userInfo}>
            {dataSmiles.map((dict) => {
              if (dict.type === 'website') {
                return (
                  <div className={styles.infoItem}>
                    <span>{dict.smile}</span>
                    <a href={`https://${userData['website']}`} target="_blank" rel="noopener noreferrer">
                      {userData['website']}
                    </a>
                  </div>
                )
              } else {
                return (
                  <div className={styles.infoItem}>
                    <span>{dict.smile}</span>
                    <span>{userData[dict.type]}</span>
                  </div>
                )
              }
            })}
            
          </div>

          <div className={styles.profileStats}>
            {Object.entries(userData.stats).map(([key, value]) => {
              return (
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{value}</span>
                  <span className={styles.statLabel}>{key}</span>
                </div>
              )
            })}
          </div>

          <div className={styles.profileActions}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Edit Profile</button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>Share</button>
          </div>
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          
          <div className={styles.postsSection}>
            <div className={styles.postsHeader}>
              <div className={styles.recentPostsTitle}>
                <h2 className={styles.titleGradient}>Recent Posts</h2>
                <div className={styles.titleUnderline}></div>
              </div>
              <button className={styles.createPostBtn}>✨ Create Post</button>
            </div>

            <div className={styles.postsContainer}>
              {postsUser.map((post) => {
                return (
              <div className={styles.postCard}>
                <div className={styles.postHeader}>
                  <img src={userData['avatar']} alt="User" className={styles.postAvatar} />
                  <div className={styles.postUserInfo}>
                    <div className={styles.postAuthor}>{post['author']}</div>
                    <div className={styles.postTime}>{post['time']}</div>
                  </div>
                  <button className={styles.postMenuBtn}>⋯</button>
                </div>

                <div className={styles.postContent}>
                  <p className={styles.postText}>
                    {post['text']}
                  </p>
                  { post['image'] ? <img src={post['image']} alt="Post content" className={styles.postImage} /> : '' }
                </div>

                <div className={styles.postActions}>
                    <Like likes={post['likes']}/>
                    <Comment comments={post['comments']}/>
                    <Shares shares={post['shares']}/>
                 </div>
              </div>)
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            {/* Friends Section */}
            <div className={styles.friendsSection}>
              <h3 className={styles.cardTitle}>Friends</h3>
              <div className={styles.friendsGrid}>
                {userFriends.map((friend) => {
                  return (
                    <>
                    <div className={styles.friendGridItem}>
                      <img src={friend['avatar']} alt="Friend" className={styles.friendGridAvatar} />
                      <span className={styles.friendGridName}>{friend['name']}</span>
                    </div>
                    </>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      <CreatePostModal isOpen={false} />
      <EditProfileModal isOpen={false} />
    </div>
  )
}
