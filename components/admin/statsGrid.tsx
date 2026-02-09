import { View, StyleSheet } from "react-native"
import StatCard from "./statCard"

export default function StatsGrid() {
  return (
    <View style={styles.grid}>
      <StatCard title="Utilisateurs" value="1,234" icon="people-outline" />
      <StatCard title="Rôles" value="4" icon="shield-outline" />
      <StatCard title="Canaux" value="2" icon="settings-outline" />
      <StatCard title="Stats" value="92%" icon="stats-chart-outline" />
    </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16
  }
})
