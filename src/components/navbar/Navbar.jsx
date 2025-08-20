import styles from "../../styles/baseuser.module.css"


export default function NavBar({avatar}) {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <a href="#" className={styles.logo}>
                    AnLuck
                </a>
                <ul className={styles.navLinks}>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#">Messages</a>
                    </li>
                    <li>
                      <a href="#">Settings</a>
                    </li>
                </ul>
                  <div className={styles.navProfile}>
                    <img
                      src={avatar}
                      alt="Profile"
                      className={styles.navAvatar}
                    />
                  </div>
            </div>
        </nav>
    )
}