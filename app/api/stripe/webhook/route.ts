import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  const stripe = getStripe();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { productId } = session.metadata || {};
    const userId = session.metadata?.userId || session.client_reference_id;

    if (productId) {
      const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY || ""
      );

      const productNames: Record<string, string> = {
        basic: "科研小棉袄 基础版",
        pro: "科研小棉袄 专业版",
      };
      const amounts: Record<string, number> = { basic: 29900, pro: 59900 };

      await supabaseAdmin.from("orders").insert({
        user_id: userId,
        product_id: productId,
        product_name: productNames[productId] || productId,
        amount: amounts[productId] || 0,
        currency: "cny",
        status: "paid",
        stripe_session_id: session.id,
      });
    }
  }

  return NextResponse.json({ received: true });
}
