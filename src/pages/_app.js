import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
})

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </main>
  );
}
