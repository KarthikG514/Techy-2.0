import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Techy 2.0 - Gamified Learning Platform",
  description: "Learn through gamification with AI assistance, quizzes, and social features",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Neon Learn</title>
      </head>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>

        {/* Chatbase Chatbot Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(!window.chatbase || window.chatbase("getState")!=="initialized"){
                  window.chatbase = (...arguments) => {
                    if(!window.chatbase.q){ window.chatbase.q = [] }
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase = new Proxy(window.chatbase, {
                    get(target, prop) {
                      if(prop === "q") { return target.q }
                      return (...args) => target(prop, ...args)
                    }
                  });
                }
                const onLoad = function() {
                  const script = document.createElement("script");
                  script.src = "https://www.chatbase.co/embed.min.js";
                  script.id = "I7slAB-coRoD9g3DoLoLS"; // Replace with your actual Chatbase Agent ID
                  script.domain = "www.chatbase.co";
                  document.body.appendChild(script);
                };
                if(document.readyState === "complete") { onLoad() }
                else { window.addEventListener("load", onLoad) }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}





import './globals.css'