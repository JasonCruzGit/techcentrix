import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name: String(name).slice(0, 191),
        email: String(email).slice(0, 191),
        subject: subject ? String(subject).slice(0, 191) : null,
        message: String(message),
      },
    });

    return NextResponse.json({
      success: true,
      id: submission.id,
      message: "Thank you. Your message has been saved.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to save your message. Please try again." },
      { status: 500 }
    );
  }
}
