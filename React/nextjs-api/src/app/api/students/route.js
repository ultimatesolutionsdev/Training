import { NextResponse } from "next/server";

const StudentData = [
  {
    id: 1,
    name: "Su Su",
    age: 17,
    address: "Hlaing",
    major: "Computer Science",
  },
  {
    id: 2,
    name: "Thu Thu",
    age: 18,
    address: "Hledan",
    major: "Computer Science",
  },
  {
    id: 3,
    name: "Kyaw Kyaw",
    age: 18,
    address: "Hlaing",
    major: "Computer Science",
  },
];
export async function GET() {
  return NextResponse.json(StudentData);
}

export async function POST(req) {
  const body = await req.json();//Get requested body data from client
  return NextResponse.json({
    message: "Student is successfully created.",
    bodyData: body,
  });
}
