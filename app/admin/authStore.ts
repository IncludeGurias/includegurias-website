import { create } from "zustand"
import { supabase } from "utils/supabaseClient"

interface User {
  id: string
  name?: string // Opcional, dependendo do que o Supabase retorna
  email?: string // Adjusted to match Supabase user object
}

interface AuthState {
  email: string
  password: string
  user: User | null
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  setUser: (user: User | null) => void
  login: () => Promise<void>
}

const useAuthStore = create<AuthState>((set, get) => ({
  email: "",
  password: "",
  user: null,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUser: (user) => set({ user }),
  login: async () => {
    const { email, password } = get()
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      const user = data?.user

      if (error) {
        console.error("Login failed:", error)
        throw error
      } else {
        console.log("Login successful:", user)
        set({ user })
      }
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    }
  },
}))

export default useAuthStore
