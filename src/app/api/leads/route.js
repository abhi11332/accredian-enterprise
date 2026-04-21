import { NextResponse } from 'next/server'

// In-memory store (replace with DB like MongoDB/Prisma in production)
const leads = []

export async function POST(request) {
  try {
    const body = await request.json()

    const { name, email, company } = body

    // Basic validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required.' },
        { status: 400 }
      )
    }

    const lead = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    }

    leads.push(lead)

    console.log('New lead captured:', lead)

    return NextResponse.json(
      { message: 'Lead captured successfully', id: lead.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ leads, total: leads.length })
}
