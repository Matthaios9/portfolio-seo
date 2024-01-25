import { NextResponse } from "next/server";
import { sendTestEmail } from "../../../helper/mailer";

export async function GET(request) {
  try {
    await sendTestEmail("r3ddy03@gmail.com", "Goutham");
    return NextResponse.json({ msg: "test" });
  } catch (err) {
    return NextResponse.json({ errror: err }, { status: 404 });
  }
}
