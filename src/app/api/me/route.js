import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Anuwat Aeamsri",
    studentId: "650610819",
  });
};
