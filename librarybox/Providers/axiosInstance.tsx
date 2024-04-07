import axios from 'axios';

const token: string | null = localStorage.getItem('token');
const tokenString: string | null = token !== null ? token : null;

export const instance = axios.create({
    baseURL: '${process.env.NEXT_PUBLIC_PASS}',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenString}`
    }
  });