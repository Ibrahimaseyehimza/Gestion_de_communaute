// import { supabase } from '../src/supabase'

// // Envoi OTP PAR SMS "PAYANT"
// export async function signInWithPhone(phone: string) {
//   const { error } = await supabase.auth.signInWithOtp({ phone })
//   if (error) throw error
// }

// // Vérification OTP
// export async function verifyOtp(phone: string, token: string) {
//   const { data, error } = await supabase.auth.verifyOtp({
//     phone,
//     token,
//     type: 'sms',
//   })
//   if (error) throw error
//   return data
// }


import { supabase } from '@/src/supabase'

// Envoi OTP par email (GRATUIT)
export async function signInWithEmail(email: string) {
  const { error } = await supabase.auth.signInWithOtp({
    email,
  })

  if (error) throw error
}

// Vérification OTP email
// export async function verifyEmailOtp(email: string, token: string) {
//   const { data, error } = await supabase.auth.verifyOtp({
//     email,
//     token,
//     type: 'email',
//   })

//   if (error) throw error
//   return data
// }

export async function verifyEmailOtp(email: string, token: string) {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: 'email',
  })

  if (error) throw error

  if (!data?.user) {
    throw new Error('Utilisateur non trouvé après validation OTP')
  }

  return data.user
}


// Session actuelle
export async function getSession() {
  return supabase.auth.getSession()
}

// Déconnexion
export async function signOut() {
  return supabase.auth.signOut()
}

