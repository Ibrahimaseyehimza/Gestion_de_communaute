import { Stack, useRouter } from "expo-router"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"

// Empêche disparition auto
SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const router = useRouter()

  useEffect(() => {
    async function prepare() {
      // Petite pause pour être safe
      await new Promise(resolve => setTimeout(resolve, 500))

      // Cache splash natif
      await SplashScreen.hideAsync()

      // Go splash React
      router.replace("/splash")
    }

    prepare()
  }, [])

  return <Stack screenOptions={{ headerShown: false }} />
}
