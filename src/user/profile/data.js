export const postsUser = [
    {
      id: 1,
      author: "Никита Григорьев",
      text: "Just finished an amazing photoshoot in the mountains! The golden hour lighting was absolutely perfect. Can't wait to share the results with you all! 📸✨",
      time: "2 hours ago",
      avatar: "https://avatars.githubusercontent.com/u/143941740?v=4",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KEkt9WNlawOqMoSiy5DAnjFlWoAH9H.png",
      likes: 42,
      comments: 8,
      shares: 3,
      commentsList: [
        {
          id: 1,
          author: "Анна",
          text: "Потрясающие фотографии! 😍",
          time: "1 hour ago",
          avatar: "/diverse-female-avatar.png",
          replies: [
            {
              id: 11,
              author: "Никита Тик Ток",
              text: "Спасибо большое! ❤️",
              time: "30 min ago",
              avatar: "https://avatars.githubusercontent.com/u/143941740?v=4",
            },
          ],
        },
        {
          id: 2,
          author: "Максим",
          text: "Золотой час действительно волшебный",
          time: "45 min ago",
          avatar: "/diverse-female-avatar.png",
          replies: [],
        },
      ],
    },
    {
      id: 2,
      author: "Никита Григорьев",
      text: "Coffee and creativity go hand in hand. Starting my day with a fresh cup and some new ideas brewing! ☕️",
      time: "1 day ago",
      avatar: "https://avatars.githubusercontent.com/u/143941740?v=4",
      likes: 28,
      comments: 5,
      shares: 2,
      commentsList: [
        {
          id: 1,
          author: "Елена",
          text: "Кофе - это жизнь! ☕",
          time: "12 hours ago",
          avatar: "/diverse-female-avatar.png",
          replies: [],
        },
      ],
    }
  ]

export const userFriends = [
    { id: 1, name: "Вика", avatar: "/Vika.jpeg" },
    { id: 2, name: "Артём", avatar: "/Артемка.jpeg" },
    { id: 3, name: "Женя", avatar: "/Женя.jpeg" },
    { id: 4, name: "Даша", avatar: "/Даша.jpeg" }
  ]

export const userData = {
    name: "Никита Тик Ток",
    tag: "@kavinski",
    bio: "Backend developer and tech enthusiast passionate about building scalable applications. Love coding in Python, exploring new technologies, and bringing ideas to life through clean and efficient code.",
    location: "San Francisco, CA",
    website: "kavinski.dev",
    avatar: "https://avatars.githubusercontent.com/u/143941740?v=4",
    joinDate: "March 2023",
    work: "Tech Corp • 3 years",
    stats: {
      Posts: 993,
      Followers: 12314,
      Following: 1212122
    }
}

export const dataSmiles = [
  {type: 'location', smile: '📍'},
  {type: 'website', smile: '🌐'},
  {type: 'joinDate', smile: '📅'},
  {type: 'work', smile: '💼'}
]