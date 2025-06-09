import { writeFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { mkdirSync, existsSync } from 'fs';

export const POST = async (req) => {
  const data = await req.formData();
  const file = data.get('image');

  if (!file) {
    return NextResponse.json({ error: 'No file received' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadDir = path.join(process.cwd(), 'public/uploads');

  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
  }

  const filename = `${Date.now()}-${file.name.replace(/\s/g, '_')}`;
  const filepath = path.join(uploadDir, filename);

  await writeFile(filepath, buffer);

  return NextResponse.json({ url: `/uploads/${filename}` });
};
