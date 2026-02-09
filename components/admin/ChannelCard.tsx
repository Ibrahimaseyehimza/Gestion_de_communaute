import { View, Text, StyleSheet, Switch } from "react-native"

type Props = {
  title: string
  description: string
  value: boolean
  onChange: (v: boolean) => void
}

export default function ChannelCard({ title, description, value, onChange }: Props) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>

      <Switch value={value} onValueChange={onChange} />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
  },
  title: {
    fontWeight: "bold"
  },
  desc: {
    fontSize: 12,
    color: "#666"
  }
})
