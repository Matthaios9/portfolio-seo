import { NextResponse } from "next/server";
import data from "../../sections/portfolio/data";

export async function GET(request) {
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  return NextResponse.json({ error: "Database not available" }, { status: 503 });
}
