import { View, Text, StyleSheet, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function AdminHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={require("../../assets/images/logo_ipps.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Super Admin</Text>
      </View>
      <Ionicons name="person-circle-outline" size={45} color="#C49A3A" />
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
    // margin: 0
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  logo: {
    width: 45,
    height: 45
  },

  title: {
    fontWeight: "bold",
    color: "#C49A3A",
    fontSize: 20,
  }
})


// import { View, Text, StyleSheet, Image } from "react-native"
// import { Ionicons } from "@expo/vector-icons"

// export default function AdminHeader() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.left}>
//         <Image
//           source={require("../../assets/images/logo_ipps.png")}
//           style={styles.logo}
//         />
//         <Text style={styles.title}>Super Admin</Text>
//       </View>
//       <Ionicons name="person-circle-outline" size={45} color="#C49A3A" />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "white",
//     padding: 12,
//     borderRadius: 16,
//     marginBottom: 16,
//   },

//   left: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10
//   },

//   logo: {
//     width: 45,
//     height: 45,
//     borderRadius: 8,
//   },

//   title: {
//     fontWeight: "bold",
//     color: "#C49A3A",
//     fontSize: 20,
//   }
// })