import "@/styles/globals.css";
import { Roboto } from "next/font/google";
// import { AuthProvider } from "@/context/AuthContext";
import { Auth0Provider } from "@auth0/auth0-react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
})

const AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
const AUTH0_CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID
const REDIRECT_URL = process.env.NEXT_PUBLIC_REDIRECT_URL

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Auth0Provider
        domain={AUTH0_DOMAIN}
        clientId={AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: REDIRECT_URL 
        }}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </main>
  );
}
