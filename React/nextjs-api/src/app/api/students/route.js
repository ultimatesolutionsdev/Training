import { NextResponse } from "next/server";
import * as yup from "yup";

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

// Get Student List API
export async function GET() {
  return NextResponse.json(StudentData);
}

//Validation Schema to validate client request.
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  fatherName: yup.string().required("Father Name is required"),
  address: yup.string().required("Address is required"),
  age: yup.number().required("Age is required"),
  major: yup.string().required("Major is required"),
});

// Create Student API
export async function POST(req) {
  try {
    const body = await req.json(); //Get requested body data from client
    await schema.validate(body, { abortEarly: false }); // Call validation Schema
    return NextResponse.json({
      message: "Student is successfully created.",
      bodyData: body,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: error.inner.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Unexpected error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
