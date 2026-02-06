import { FrappeApp } from "frappe-js-sdk";

// Vercel will provide these values from the "Environment Variables" settings
const getFrappeApp = () => {
  return new FrappeApp({
    url: process.env.NEXT_PUBLIC_FRAPPE_PATH, 
    useToken: true,
    token: () => `${process.env.API_KEY}:${process.env.API_SECRET}`,
    type: "token",
  });
};

export const frappe = getFrappeApp();
