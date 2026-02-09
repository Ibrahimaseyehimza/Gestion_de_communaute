import { View, Image, StyleSheet } from "react-native"
import { useEffect } from "react"
import { useRouter } from "expo-router"

export default function Splash() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/")
    // }, 2000)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash-logo.png")}
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9A44C", // background splash (différent auth)
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  }
})
