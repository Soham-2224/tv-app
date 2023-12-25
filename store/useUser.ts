import { create } from "zustand"
import { HankoUser } from "@/lib/hooks/useUserData"

type ActionType = {
    setUser: (user: HankoUser) => void
}

const useUserStore = create<HankoUser & ActionType>()((set) => ({
    email: "",
    loading: true,
    error: null,
    setUser: (user) => set(() => ({email: user.email, loading: user.loading, error: user.error}))
}))

export default useUserStore