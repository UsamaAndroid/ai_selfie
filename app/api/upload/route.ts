import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = `${uuidv4()}.png`
  const filePath = path.join(process.cwd(), 'public/uploads', filename)

  // Write file to /public/uploads
  fs.writeFileSync(filePath, buffer)

  const url = `${req.nextUrl.origin}/uploads/${filename}`

  return NextResponse.json({ url })
}
