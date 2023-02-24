import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextTask } from './context/appContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextTask>
      <Component {...pageProps} />
    </ContextTask>
  )
}
