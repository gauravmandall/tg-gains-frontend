import { P } from "@/components/custom/p"
import { cn } from "@/lib/utils"
import type React from "react"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="flex-1 w-full h-full bg-zinc-900 md:flex items-center justify-center p-6 hidden">
        <div>
          <h1 className={cn("text-white tracking-wider text-3xl font-bold")}>Group Gains</h1>
          <P className="text-zinc-300 max-w-md mt-4">
            The only platform that enables you to monetize your Telegram group with ease. Set up subscriptions, manage
            members, and get paid.
          </P>
        </div>
      </div>

      <div className="flex-1 w-full h-full flex items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-900">
        {children}
      </div>
    </main>
  )
}

export default Layout
