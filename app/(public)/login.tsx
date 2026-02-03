import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
    Button
} from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"

export default function Login() {
    const router = useRouter()
    const [phone, setPhone] =  useState("")
    return (
          <View style={styles.page}>
              <View style={styles.card}>
                {/* Header */}
                <View style={styles.header}>
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} />
                  </TouchableOpacity>

                <Text style={styles.title}>Connexion</Text>                  
                </View>
                  <Text style={styles.section}>Quel est votre numéro ?</Text>
                  {/* <Text style={styles.section}>Nous vous enverrons un code de connexion sécurisé. </Text> */}
                  
                {/* Téléphone */}
                <View style={styles.input}>
                  <Ionicons name="call-outline" size={20} />
                  <TextInput
                    placeholder="Numéro de téléphone"
                    keyboardType="phone-pad"
                    style={styles.inputText}
                    value={phone}
                    onChangeText={setPhone}
                    placeholderTextColor="#999"
                  />
                </View>
        
                {/* Button */}
                {/* <TouchableOpacity style={styles.mainButton}>
                  <Text style={styles.mainButtonText}>Recevoir le code</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                style={styles.mainButton}
                onPress={() => router.push("/register-otp")}
                >
                    <Text style={styles.mainButtonText}>Se connecter</Text>

                </TouchableOpacity>
                
              </View>
        </View>
    )
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ECE8D8",
    // justifyContent: "center",
    paddingTop: 50,
    padding: 16
  },

  card: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 20,
    paddingBottom: 400
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C49A3A",
    alignItems: "center"
    // marginLeft: 8
  },

  section: {
    marginTop: 10,
    marginBottom: 8,
    fontWeight: "600",
  },

  input: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2C98B",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 6,
    height: 46,
    backgroundColor: "white",
    overflow: "hidden" 
  },

  inputText: {
    flex: 1,
    marginLeft: 8,
    padding: 0,           // ← Important
    margin: 0,            // ← Important
    backgroundColor: "transparent",
    // @ts-ignore - outline est pour le web,
    // outlineStyle: "none",
      ...({ outlineStyle: "none" } as any)

  },
//   mainButton: {
//     marginTop: 20,
//     backgroundColor: "#E6D3A3",
// }

mainButton: {
  backgroundColor: "#E6D3A3",
  borderRadius: 30,
  paddingVertical: 14,
  marginTop: 10
},

mainButtonText: {
  textAlign: "center",
  fontWeight: "bold",
  color: "white"
},

})