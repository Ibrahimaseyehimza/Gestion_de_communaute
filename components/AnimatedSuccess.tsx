import { View, Text, Animated } from "react-native"
import { useEffect, useRef } from "react"

export default function AnimatedSuccess() {
  const scale = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Text style={{ fontSize: 48 }}>✅</Text>
      <Text>Inscription réussie !</Text>
    </Animated.View>
  )
}
