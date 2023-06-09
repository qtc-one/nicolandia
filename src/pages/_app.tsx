import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter/Inter-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      nProgress.start()
    }

    const handleStop = () => {
      nProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
