import { create } from "zustand";

const useDataStore = create((set, get) => ({
  isLogin: false,
  isLoading: false,
  onLogin: async (data) => {
    if (data === "cyberlane@admin.202" || data === "11082005") {
      set({ isLogin: true });
      get().getVistCount()
    }
  },
  count: {},
  getVistCount: async () => {
    if (!get().isLogin) return;
    set({ isLoading: true });
    try {
      const res = await fetch(
        "https://portfolio-server-pink-seven.vercel.app/cyberlanevist/count"
      );
      const data = await res.json();
      set({ count: data });
    } catch (err) {
      console.log(err);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useDataStore;
