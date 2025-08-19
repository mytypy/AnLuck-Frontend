export function Success() {
    return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12l2 2 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
}

export function Warring() {
    return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
    )
}

export function Info() {
    return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
    )
}

export function Default() {
    return(
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
        </svg>
    )
}