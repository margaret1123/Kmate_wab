import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

const PRODUCTS: Record<string, { name: string; amount: number }> = {
  basic: { name: "科研小棉袄 基础版", amount: 29900 },
  pro: { name: "科研小棉袄 专业版", amount: 59900 },
};

export async function POST(req: NextRequest) {
  try {
    const { productId, email } = await req.json();

    const product = PRODUCTS[productId];
    if (!product) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cny",
            product_data: { name: product.name },
            unit_amount: product.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.nextUrl.origin}/dashboard?success=true`,
      cancel_url: `${req.nextUrl.origin}/dashboard?canceled=true`,
      customer_email: email,
      metadata: {
        productId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
