import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function UserHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={require("../../assets/images/logo_ipps.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Utilisateurs</Text>
      </View>
      
      <TouchableOpacity>
        <Ionicons name="person-circle-outline" size={45} color="#C49A3A" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 16,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  logo: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },

  title: {
    fontWeight: "bold",
    color: "#C49A3A",
    fontSize: 20,
  }
})