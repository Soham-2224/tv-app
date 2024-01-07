import { useState, useEffect, useContext } from "react"

import { HankoContext } from "@/components/auth/HankoProvider"
import useUserStore from "@/store/useUser"
import { toast } from 'sonner'

export type HankoUser = {
    email: string
    loading: boolean
    error: string | null
}

type Errors = {
    noError: Omit<HankoUser, "email">,
    loggedOut: Omit<HankoUser, "email">,
    connectionError: Omit<HankoUser, "email">,
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

    const ErrorMessages : Errors = {
        noError: { loading: false, error: null },
        loggedOut: { loading: false, error: "logged out" },
        connectionError: { loading: false, error: "Error connecting" }
    }

    useEffect(() => {

        if (!navigator.onLine) {
             toast.error("Check your internet connection")
        }

        if (!hanko) return
        
        if (!hanko.session.isValid()) {
            setUserState({ email: "", ...ErrorMessages.loggedOut })
            updateUser({ email: "", ...ErrorMessages.loggedOut })
            return 
        }
        
        if (storedUser.length) {
            return setUserState({ email: storedUser, ...ErrorMessages.noError })
        }

        hanko.user
            ?.getCurrent()
            .then(({ email }) => {
                updateUser({ email, ...ErrorMessages.noError })
                setUserState({  email, ...ErrorMessages.noError })
            })
            .catch((error) => {
                setUserState((prevState) => ({ ...prevState, loading: false, error }))
            })
    }, [hanko])

    return userState
}
