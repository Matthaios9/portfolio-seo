import { NextResponse } from "next/server";
import { sendEmail } from "../../../helper/mailer";

export async function GET(request) {
  try {
    await sendEmail("r3ddy03@gmail.com", "Goutham");
    return NextResponse.json({ msg: "test" });
  } catch (err) {
    return NextResponse.json({ errror: err }, { status: 404 });
  }
}
