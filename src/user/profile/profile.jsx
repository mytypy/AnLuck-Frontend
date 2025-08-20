import styles from "../../styles/profile.module.css"
import NavBar from "../../components/navbar/Navbar"


export default function Profile() {
  return (
    <div>
      <NavBar avatar='https://avatars.githubusercontent.com/u/143941740?v=4'/>

      <main className={styles.mainContent}>
        <section className={styles.profileHeader}>
          <img
            src="https://avatars.githubusercontent.com/u/143941740?v=4"
            alt="Profile Picture"
            className={styles.profileAvatar}
          />
          <h1 className={styles.profileName}>Никита Тик Ток</h1>
          <p className={styles.profileUsername}>@kavinski</p>
          <p className={styles.profileBio}>
            Backend developer and tech enthusiast passionate about building scalable applications. Love coding in
            Python, exploring new technologies, and bringing ideas to life through clean and efficient code.
          </p>

          <div className={styles.profileStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1000 - 7</span>
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
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Edit Profile</button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>Share Profile</button>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <section className={styles.contentCard}>
            <h2 className={styles.cardTitle}>Recent Posts</h2>

            <div>
              <div className={styles.postItem}>
                <img src="/diverse-user-avatars.png" alt="User" className={styles.postAvatar} />
                <div className={styles.postContent}>
                  <div className={styles.postAuthor}>Никита Тик Ток</div>
                  <div className={styles.postText}>
                    Just finished an amazing photoshoot in the mountains! The golden hour lighting was absolutely
                    perfect. Can't wait to share the results with you all! 📸✨
                  </div>
                  <div className={styles.postTime}>2 hours ago</div>
                </div>
              </div>

              <div className={styles.postItem}>
                <img src="/diverse-user-avatars.png" alt="User" className={styles.postAvatar} />
                <div className={styles.postContent}>
                  <div className={styles.postAuthor}>Никита Тик Ток</div>
                  <div className={styles.postText}>
                    Coffee and creativity go hand in hand. Starting my day with a fresh cup and some new ideas brewing!
                    ☕️
                  </div>
                  <div className={styles.postTime}>1 day ago</div>
                </div>
              </div>

              <div className={styles.postItem}>
                <img src="/diverse-user-avatars.png" alt="User" className={styles.postAvatar} />
                <div className={styles.postContent}>
                  <div className={styles.postAuthor}>Никита Тик Ток</div>
                  <div className={styles.postText}>
                    Grateful for all the support on my latest project. Your comments and shares mean the world to me! 🙏
                  </div>
                  <div className={styles.postTime}>3 days ago</div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.contentCard}>
            <h2 className={styles.cardTitle}>Friends</h2>

            <div>
              <div className={styles.friendItem}>
                <img src="/diverse-female-avatar.png" alt="Vika" className={styles.friendAvatar} />
                <div className={styles.friendInfo}>
                  <div className={styles.friendName}>Вика 👍</div>
                  <div className={styles.friendUsername}>@sellm1x</div>
                </div>
                <button className={styles.friendBtn}>Send Message</button>
              </div>

              <div className={styles.friendItem}>
                <img src="/diverse-female-avatar.png" alt="Vera" className={styles.friendAvatar} />
                <div className={styles.friendInfo}>
                  <div className={styles.friendName}>Вера Ассистент</div>
                  <div className={styles.friendUsername}>@ilythy</div>
                </div>
                <button className={styles.friendBtn}>Send Message</button>
              </div>

              <div className={styles.friendItem}>
                <img src="/diverse-female-avatar.png" alt="Dasha" className={styles.friendAvatar} />
                <div className={styles.friendInfo}>
                  <div className={styles.friendName}>Даша тю-тю-тю</div>
                  <div className={styles.friendUsername}>@D_brdb</div>
                </div>
                <button className={styles.friendBtn}>Send Message</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
