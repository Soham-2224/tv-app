import { useState, useEffect, useContext } from "react"

import { HankoContext } from "@/components/auth/HankoProvider"

interface HankoUser {
    id: string
    email: string
    loading: boolean
    error: string | null
}

export function useUserData(): HankoUser {
    const hanko = useContext(HankoContext)
    const [userState, setUserState] = useState<HankoUser>({
        id: "",
        email: "",
        loading: true,
        error: null
    })

    useEffect(() => {
        hanko?.user
            .getCurrent()
            .then(({ id, email }) => {
                setUserState({ id, email, loading: false, error: null })
            })
            .catch((error) => {
                setUserState((prevState) => ({ ...prevState, loading: false, error }))
            })
    }, [hanko])

    return userState
}
