import { NextResponse } from "next/server";
import * as yup from "yup";

//Validation Schema to validate client request.
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  fatherName: yup.string().required("Father Name is required"),
  address: yup.string().required("Address is required"),
  age: yup.number().required("Age is required"),
  major: yup.string().required("Major is required"),
});

// Update Student API
export async function PUT(req, { params }) {
  try {
    const studentId = params.id; // get URI params field;
    const body = await req.json();
    await schema.validate(body, { abortEarly: false }); // Call validation Schema
    return NextResponse.json({
      message: "Student is successfully updated.",
      studentId,
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

// Delete Student API
export async function DELETE(req, { params }) {
  const studentId = params.id; // get URI params field;
  return NextResponse.json({
    message: "Student is successfully deleted.",
    studentId,
  });
}

// Get Student Detail API
export async function GET(req, { params }) {
  const studentId = params.id; // get URI params field;
  const student = {
    id: studentId,
    name: "Su Su",
    age: 18,
    gender: "female",
    fatherName: "U Maung",
    address: "Hledan",
    major: "Computer Science",
  };
  return NextResponse.json(student);
}
