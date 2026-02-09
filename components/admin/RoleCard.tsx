import { View, Text, StyleSheet } from "react-native"

type Props = {
  title: string
  tag: string
  permissions: string[]
}

export default function RoleCard({ title, tag, permissions }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.tag}>{tag}</Text>
      </View>

      <Text style={styles.subtitle}>Autorisation</Text>

      <View style={styles.permissions}>
        {permissions.map((p) => (
          <Text key={p} style={styles.permission}>✓ {p}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontWeight: "bold"
  },
  tag: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    backgroundColor: "#F3E4B5"
  },
  subtitle: {
    marginTop: 8,
    fontWeight: "600",
    fontSize: 13
  },
  permissions: {
    marginTop: 6
  },
  permission: {
    fontSize: 12,
    color: "#444"
  }
})
