import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  email: string;
  password: string;
  user: User | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUser: (user: User | null) => void;
  login: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set, get) => ({
  email: '',
  password: '',
  user: null,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUser: (user) => set({ user }),
  login: async () => {
    const { email, password } = get();
    try {
      const response = await fakeLoginAPI(email, password);
      console.log('Login successful:', response);
      set({ user: response.user });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },
}));

export default useAuthStore;

const fakeLoginAPI = async (email: string, password: string): Promise<{ user: User }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@includegurias.com' && password === 'password') {
        resolve({ user: { id: '1', name: 'Admin', email } });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};
