import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const experience = formData.get('experience') as string;
    const skills = formData.get('skills') as string;
    const portfolio = formData.get('portfolio') as string;
    const resume = formData.get('resume') as File;

    // Validate required fields
    if (!firstName || !lastName || !email || !position || !coverLetter) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    console.log('Environment check:');
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    console.log('EMAIL_USER value:', process.env.EMAIL_USER ? 'Set' : 'Not set');
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create email transporter (using Gmail SMTP)
    const emailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare email content
    const emailContent = `
      <h2>New Job Application Received</h2>
      
      <h3>Personal Information:</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      
      <h3>Position Details:</h3>
      <p><strong>Position Applied For:</strong> ${position}</p>
      <p><strong>Years of Experience:</strong> ${experience || 'Not specified'}</p>
      
      <h3>Cover Letter:</h3>
      <p>${coverLetter}</p>
      
      <h3>Skills & Technologies:</h3>
      <p>${skills || 'Not provided'}</p>
      
      <h3>Portfolio/Links:</h3>
      <p>${portfolio || 'Not provided'}</p>
      
      <h3>Resume:</h3>
      <p>${resume ? `Resume attached: ${resume.name}` : 'No resume uploaded'}</p>
      
      <hr>
      <p><em>This application was submitted from your careers page.</em></p>
    `;

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nextbooleanofficial@gmail.com',
      subject: `New Job Application: ${position} - ${firstName} ${lastName}`,
      html: emailContent,
      attachments: resume ? [
        {
          filename: resume.name,
          content: Buffer.from(await resume.arrayBuffer()),
        },
      ] : [],
    };

    await emailTransporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting application:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { error: 'Failed to submit application', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
