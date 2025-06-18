import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'; // You'll need to install this: npm install bcryptjs

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { message: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Find user by username
    const user = await prisma.pengguna.findFirst({
      where: {
        username: username
      }
    });

    // Check if user exists
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid username or password' },
        { status: 401 }
      );
    }

    // Compare password
    // If passwords are stored as plain text (not recommended), use:
    // const isPasswordValid = user.password === password;
    
    // If passwords are hashed (recommended), use:
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid username or password' },
        { status: 401 }
      );
    }

    // Login successful - return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json(
      { 
        message: 'Login successful',
        user: userWithoutPassword
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}