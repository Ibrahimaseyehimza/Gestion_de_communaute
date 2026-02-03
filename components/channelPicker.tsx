import { View, TouchableOpacity, Text, Animated } from "react-native"
import { useRef, useEffect } from "react"

export default function ChannelPicker({ value, onChange }: any) {
  const waScale = useRef(new Animated.Value(1)).current
  const smsScale = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.spring(value === "whatsapp" ? waScale : smsScale, {
      toValue: 1.05,
      useNativeDriver: true
    }).start()
  }, [value])

  const pick = (v: string) => {
    onChange(v)

    Animated.sequence([
      Animated.spring(v === "whatsapp" ? waScale : smsScale, {
        toValue: 1.15,
        useNativeDriver: true
      }),
      Animated.spring(v === "whatsapp" ? waScale : smsScale, {
        toValue: 1,
        useNativeDriver: true
      })
    ]).start()
  }

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Animated.View style={{ transform: [{ scale: waScale }] }}>
        <TouchableOpacity onPress={() => pick("whatsapp")}>
          <Text>WhatsApp {value === "whatsapp" && "✔"}</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={{ transform: [{ scale: smsScale }] }}>
        <TouchableOpacity onPress={() => pick("sms")}>
          <Text>SMS {value === "sms" && "✔"}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}
