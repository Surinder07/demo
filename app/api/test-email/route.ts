import { NextResponse } from 'next/server';

export async function GET() {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  return NextResponse.json({
    emailConfigured: !!(emailUser && emailPass),
    emailUser: emailUser ? 'Set' : 'Not set',
    emailPass: emailPass ? 'Set' : 'Not set',
    message: emailUser && emailPass 
      ? 'Email is properly configured' 
      : 'Email environment variables are missing'
  });
}
