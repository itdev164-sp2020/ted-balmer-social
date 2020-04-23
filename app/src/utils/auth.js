const isBrowser = typeof window !== `undefined`

const getUser = () =>
    window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
    if (!isBrowser) return false

    if (username === `gatsby` && password === `demo`) {
        console.log(`credentials match!`)
        return setUser({
            name: `Jim`,
            legalname: `James User`,
            email: `jim@gmail.com`,
        })
    }

    return false
}

export const isLoggedIn = () => {
    if (!isBrowser) return false

    const user = getUser()

    return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
    if (!isBrowser) return

    console.log(`stuff`)
    setUser({})
    callback()
}