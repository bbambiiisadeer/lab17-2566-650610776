import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Nunnapat Sirithanachokpaisan",
    studentId: "650610776",
  });
};
