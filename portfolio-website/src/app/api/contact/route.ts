import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('🔍 API Route called');
  
  try {
    const { name, email, message } = await request.json();
    console.log('📨 Form data received');

    // Check environment variables
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Set' : '❌ Missing');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Set' : '❌ Missing');

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('❌ Missing environment variables');
      return NextResponse.json(
        { message: 'Server configuration error - check environment variables' },
        { status: 500 }
      );
    }

    console.log('🚀 Attempting to send email...');

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Test the connection
    try {
      await transporter.verify();
      console.log('✅ Email transporter verified');
    } catch (verifyError) {
      console.error('❌ Transporter verification failed:', verifyError);
      return NextResponse.json(
        { message: 'Email service configuration failed' },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.messageId);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Error details:');
    console.error('Error name:', error?.name);
    console.error('Error code:', error?.code);
    console.error('Error message:', error?.message);
    
    let userMessage = 'Failed to send message. Please try again.';
    
    if (error?.code === 'EAUTH') {
      userMessage = 'Email authentication failed. Please check your email credentials.';
    } else if (error?.code === 'ECONNECTION') {
      userMessage = 'Cannot connect to email service. Please check your internet connection.';
    }

    return NextResponse.json(
      { message: userMessage },
      { status: 500 }
    );
  }
}