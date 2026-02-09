import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { Platform } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
export default function AdminLayout() {
  return (
    // <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: Platform.OS === "ios", // iOS seulement
        tabBarStyle: {
          backgroundColor: "white",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#C49A3A",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        // Important : padding des icônes
        tabBarIconStyle: {
          marginTop: 4,
        }
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="users"
        options={{
          title: "Utilisateurs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="security"
        options={{
          title: "Roles & Permissions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shield-outline" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Réglages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          )
        }}
      />
        <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          )
        }}
      />
    </Tabs>
    </SafeAreaView>



  )
}


// import { Tabs } from "expo-router"
// import { Ionicons } from "@expo/vector-icons"
// import { Platform, StyleSheet } from "react-native"
// import { SafeAreaView } from "react-native-safe-area-context"

// export default function AdminLayout() {
//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
//       {/* ✅ SafeArea géré UNE SEULE FOIS ici au niveau global */}
      
//       <Tabs 
//         screenOptions={{
//           headerShown: false,
//           tabBarHideOnKeyboard: Platform.OS === "ios",
//           tabBarStyle: {
//             backgroundColor: "white",
//             borderTopLeftRadius: 24,
//             borderTopRightRadius: 24,
//             elevation: 0,
//             shadowOpacity: 0,
//             borderTopWidth: 0,
//             height: 60,
//             paddingBottom: 8,
//             paddingTop: 8,
//           },
//           tabBarActiveTintColor: "#C49A3A",
//           tabBarInactiveTintColor: "#888",
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontWeight: "600",
//           },
//           tabBarIconStyle: {
//             marginTop: 4,
//           }
//         }}
//       >
//         <Tabs.Screen
//           name="dashboard"
//           options={{
//             title: "Accueil",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="grid-outline" size={size} color={color} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="messages"
//           options={{
//             title: "Messages",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="chatbubble-outline" size={size} color={color} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="users"
//           options={{
//             title: "Utilisateurs",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="people-outline" size={size} color={color} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="security"
//           options={{
//             title: "Sécurité",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="shield-outline" size={size} color={color} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="settings"
//           options={{
//             title: "Réglages",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="settings-outline" size={size} color={color} />
//             )
//           }}
//         />
//       </Tabs>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ECE8D8",
//   }
// })





// import { Tabs } from "expo-router"
// import { Ionicons } from "@expo/vector-icons"
// import { Platform, StyleSheet } from "react-native"
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
// import * as SplashScreen from "expo-splash-screen"
// import { useEffect, useState } from "react"
// import { Asset } from "expo-asset"

// // Empêche le splash screen de se cacher automatiquement
// SplashScreen.preventAutoHideAsync()

// export default function AdminLayout() {
//   const [appIsReady, setAppIsReady] = useState(false)

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Précharge les images
//         await Asset.loadAsync([
//           require("../../assets/images/logo_ipps.png"),
//         ])
//       } catch (e) {
//         console.warn(e)
//       } finally {
//         setAppIsReady(true)
//       }
//     }

//     prepare()
//   }, [])

//   useEffect(() => {
//     if (appIsReady) {
//       SplashScreen.hideAsync()
//     }
//   }, [appIsReady])

//   if (!appIsReady) {
//     return null
//   }

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
//       {/* ✅ SafeArea géré ici avec top et bottom */}
      
//       <Tabs 
//         screenOptions={{
//           headerShown: false,
//           tabBarHideOnKeyboard: Platform.OS === "ios",
//           tabBarStyle: {
//             backgroundColor: "white",
//             borderTopLeftRadius: 24,
//             borderTopRightRadius: 24,
//             elevation: 0,
//             shadowOpacity: 0,
//             borderTopWidth: 0,
//             height: 60,
//             paddingBottom: 8,
//             paddingTop: 8,
//           },
//           tabBarActiveTintColor: "#C49A3A",
//           tabBarInactiveTintColor: "#888",
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontWeight: "600",
//           },
//           tabBarIconStyle: {
//             marginTop: 4,
//           }
//         }}
//       >
//         <Tabs.Screen
//           name="dashboard"
//           options={{
//             title: "Accueil",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="grid-outline" size={size} color={color} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="messages"
//           options={{
//             title: "Messages",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="chatbubble-outline" size={size} color={color} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="users"
//           options={{
//             title: "Utilisateurs",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="people-outline" size={size} color={color} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="security"
//           options={{
//             title: "Sécurité",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="shield-outline" size={size} color={color} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="settings"
//           options={{
//             title: "Réglages",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="settings-outline" size={size} color={color} />
//             )
//           }}
//         />
//       </Tabs>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ECE8D8",
//   }
// })



