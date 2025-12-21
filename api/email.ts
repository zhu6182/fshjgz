import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { subject, html } = request.body;

  if (!subject || !html) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  // 获取环境变量配置
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiveEmail = process.env.RECEIVE_EMAIL || smtpUser; // 默认发给发送者自己

  if (!smtpUser || !smtpPass) {
    console.error('Missing SMTP configuration');
    return response.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // 创建传输器 (以 QQ 邮箱为例，也支持 163 等)
    const transporter = nodemailer.createTransport({
      service: 'qq', // 如果用其他邮箱，可以改用 host/port 配置
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 发送邮件
    await transporter.sendMail({
      from: `"好家改造官网" <${smtpUser}>`,
      to: receiveEmail,
      subject: subject,
      html: html,
    });

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return response.status(500).json({ error: 'Failed to send email' });
  }
}
