import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, mobile, businessType, city, companyName, websiteLink, preferredDate } = body;

    // Validation for required fields
    if (!name || !email || !mobile || !companyName || !preferredDate) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, Mobile, Company Name, Preferred Date)." },
        { status: 400 }
      );
    }

    // Prepare default values for optional fields just like the SQL fallback logic
    const structuredData = {
      name,
      email,
      mobile,
      businessType: businessType || "Builder",
      city: city || "N/A",
      companyName,
      websiteLink: websiteLink || "N/A",
      preferredDate,
    };

    // ── 1. Append to Google Sheets ───────────────────────────────────────────
    await appendToSheet(structuredData);
    console.log("✅ Google Sheets: row appended successfully.");

    return NextResponse.json({
      success: true,
      message: "Demo request recorded successfully in Google Sheets.",
    });

  } catch (error) {
    console.error("Google Sheets operation failed:", error);
    return NextResponse.json(
      { error: `Google Sheets integration error: ${error.message}` },
      { status: 500 }
    );
  }
}