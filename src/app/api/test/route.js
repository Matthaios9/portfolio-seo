import { NextResponse } from "next/server";
// import { sendTestEmail } from "../../../helper/mailer";

export async function GET(request) {
  // await sendTestEmail("r3ddy03@gmail.com", "Goutham");
  return NextResponse.json({ msg: "test" });
}
