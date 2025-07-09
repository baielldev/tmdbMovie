import { create } from "zustand";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
export const useAuth = create((set) => ({
  user: null,
  error: null,

  singUpWithGoogle: async () => {
    try {
      let { user } = await signInWithPopup(auth, googleProvider);
      set({ user: user });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
  },
  checkUser: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user: user });
    });
  },

  register: async (name, email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });

      set({ user, error: null });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
  },

  logoutUser: () => {
    try {
      signOut(auth);
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
  },
}));

//GET https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=en-US&sort_by=popularity.desc&page=1
