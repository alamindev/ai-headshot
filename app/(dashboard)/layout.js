import "@/app/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
  
const  jakarta_Sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

 

export const metadata = {
  title: "The Leading AI Headshot Generator",
  description: "Get professional AI headshots in minutes with our new AI headshot generator. Save hundreds of dollars and hours of your time. Built by AI researchers.",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakarta_Sans.variable} font-plus_jakarta font-normal  `}
      > 
        <main> {children}</main> 
      
      </body>
    </html>
  );
}
