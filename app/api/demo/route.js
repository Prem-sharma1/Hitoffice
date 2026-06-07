import { NextResponse } from "next/server";
import { query } from "@/lib/db";
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

    // ── 1. Save to MySQL ───────────────────────────────────────────────────────
    const sql = `
      INSERT INTO demo_requests (
        name, email, mobile, business_type, city, company_name, website_link, preferred_date
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      name,
      email,
      mobile,
      businessType || "Builder",
      city || null,
      companyName,
      websiteLink || null,
      preferredDate,
    ];

    const result = await query(sql, values);

    // ── 2. Append to Google Sheets (non-blocking — won't fail the request) ────
    try {
      await appendToSheet({ name, email, mobile, businessType, city, companyName, websiteLink, preferredDate });
      console.log("✅ Google Sheets: row appended successfully.");
    } catch (sheetsError) {
      // Log but don't fail — MySQL is the source of truth
      console.error("⚠️ Google Sheets write failed (data saved to DB):", sheetsError.message);
    }

    return NextResponse.json({
      success: true,
      message: "Demo request recorded successfully.",
      insertId: result.insertId,
    });
  } catch (error) {
    console.error("Database connection/query error:", error);
    return NextResponse.json(
      { error: `Database error: ${error.message}` },
      { status: 500 }
    );
  }
}
