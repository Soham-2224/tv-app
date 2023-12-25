import { useState, useEffect, useContext } from "react"

import { HankoContext } from "@/components/auth/HankoProvider"
import useUserStore from "@/store/useUser"

export type HankoUser = {
    email: string
    loading: boolean
    error: string | null
}

export function useUserData(): HankoUser {
    const hanko = useContext(HankoContext)
    const [userState, setUserState] = useState<HankoUser>({
        email: "",
        loading: true,
        error: null
    })
    const storedUser = useUserStore((state) => state.email)
    const updateUser = useUserStore((state) => state.setUser)

    useEffect(() => {

        if (!hanko) return
        
        if (!hanko.session.isValid()) {
            setUserState({ email: "", loading: false, error: "logged out" })
            updateUser({ email: "", loading: false, error: "logged out" })
            return 
        }
        
        if (storedUser.length) {
            return setUserState({ email: storedUser, loading: false, error: null })
        }

        hanko.user
            ?.getCurrent()
            .then(({ email }) => {
                updateUser({ email, loading: false, error: null })
                setUserState({  email, loading: false, error: null })
            })
            .catch((error) => {
                setUserState((prevState) => ({ ...prevState, loading: false, error }))
            })
    }, [hanko])

    return userState
}
