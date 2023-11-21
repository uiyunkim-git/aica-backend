import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const date = new Date();
    return NextResponse.json({
        data: {
            original_text: `원본 텍스트 입니다${date.toString()}`,
            translated_text: `번역된 텍스트를 보내주겠지?히히${date.toString()}`,
        },
    });
}
