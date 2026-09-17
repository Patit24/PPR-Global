import type { User } from "@supabase/supabase-js";
import { createAuthenticatedSupabaseClient } from "./supabase";

export async function verifyAdminUser(token: string): Promise<{
  authorized: boolean;
  user: User | null;
  error?: string;
}> {
  if (!token) {
    return { authorized: false, user: null, error: "Authentication token missing." };
  }

  try {
    const supabase = createAuthenticatedSupabaseClient(token);
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
      return { authorized: false, user: null, error: "Invalid or expired session." };
    }

    const user = data.user;
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL?.trim().toLowerCase();
    const additionalAdmins = (process.env.ADMIN_EMAILS || "")
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    const allowedEmails = new Set(
      [adminEmail, ...additionalAdmins].filter((e): e is string => Boolean(e))
    );

    const userEmail = user.email?.trim().toLowerCase() || "";
    const isRoleAdmin =
      user.app_metadata?.role === "admin" || user.user_metadata?.role === "admin";

    // If allowed admin emails are configured, enforce strict match
    if (allowedEmails.size > 0) {
      if (!userEmail || (!allowedEmails.has(userEmail) && !isRoleAdmin)) {
        return { authorized: false, user, error: "Access denied. Admin account required." };
      }
    }

    return { authorized: true, user };
  } catch (err) {
    console.error("Admin verification error:", err);
    return { authorized: false, user: null, error: "Authorization verification failed." };
  }
}
