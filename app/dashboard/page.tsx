import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { DashboardContent } from "./dashboard-content";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=/dashboard");
  }

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id)
    .eq("status", "paid")
    .order("created_at", { ascending: false });

  const hasBasic = orders?.some((o: any) => o.product_id === "basic");
  const hasPro = orders?.some((o: any) => o.product_id === "pro");

  return (
    <DashboardContent
      email={user.email!}
      hasBasic={hasBasic || false}
      hasPro={hasPro || false}
      orders={orders || []}
    />
  );
}
