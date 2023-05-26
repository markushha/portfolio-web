import Head from "next/head"
import Navbar from "../Navbar"
import Footer from "../Footer"

import { useThemeStore } from "../../../store";

interface ILayout {
  title: string,
  description?: string,
  children: React.ReactNode
}

function Layout({ title, description, children }: ILayout) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={theme === "light" ? "" : "dark"}>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <nav className="container">
          <Navbar />
        </nav>
        <main className="dark:bg-slate-900 bg-slate-200">
          {children}
        </main>
        <footer className="container">
          <Footer />
        </footer>
    </div>
  )
}

export default Layout
