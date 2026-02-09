import { ScrollView, StyleSheet } from "react-native"
import { useState } from "react"
import AdminHeader from "@/components/admin/adminHeader"
import ChannelCard from "@/components/admin/ChannelCard"

export default function ChannelsScreen() {
  const [whatsapp, setWhatsapp] = useState(true)
  const [sms, setSms] = useState(true)

  return (
    <ScrollView 
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <AdminHeader />

      <ChannelCard
        title="WhatsApp"
        description="API Business"
        value={whatsapp}
        onChange={setWhatsapp}
      />

      <ChannelCard
        title="SMS"
        description="Twilio / Vonage"
        value={sms}
        onChange={setSms}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ECE8D8",
  },

  content: {
    padding: 16,
    paddingBottom: 20,
    gap: 12,  // Espace entre AdminHeader et les cartes
  }
})