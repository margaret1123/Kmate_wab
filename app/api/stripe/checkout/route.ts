import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase-server";

type Market = "cny" | "usd";

const PRICE_ENV_BY_MARKET: Record<Market, string> = {
  cny: "STRIPE_PRICE_SCINEST_CNY",
  usd: "STRIPE_PRICE_SCINEST_USD",
};

function isMarket(value: unknown): value is Market {