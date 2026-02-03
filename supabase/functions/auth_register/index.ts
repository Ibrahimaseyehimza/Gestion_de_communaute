import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return new Response(
        JSON.stringify({ error: "Phone is required" }),
        { status: 400 }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // 1️⃣ Envoyer OTP
    const { error: otpError } = await supabase.auth.signInWithOtp({
      phone,
    });

    if (otpError) throw otpError;

    // 2️⃣ Récupérer l'utilisateur
    const { data } = await supabase.auth.admin.getUserByPhone(phone);
    const user = data?.user;

    if (!user) {
      throw new Error("User not found after OTP");
    }

    // 3️⃣ Vérifier si profil existe
    const { data: profile } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", user.id)
      .maybeSingle();

    if (!profile) {
      // 4️⃣ Récupérer rôle Lecteur
      const { data: role } = await supabase
        .from("roles")
        .select("id")
        .eq("name", "Lecteur")
        .single();

      if (!role) throw new Error("Role Lecteur not found");

      // 5️⃣ Créer profil
      await supabase.from("profiles").insert({
        id: user.id,
        role_id: role.id,
        preferred_channel: "WHATSAPP",
        status: "active",
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
});
