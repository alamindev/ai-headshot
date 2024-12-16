import SearchImg from "@/components/Svgs/SearchImg";
import { Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
});
 

export const metadata = {
  title: "GrantTouir Italia",
  description: `Emilia-Romagna: Where Every Meal is a Celebration. Immerse yourself in vibrant traditions, savor exquisite flavors,
and experience warmth like nowhere else.`,
};

export default function notFound() {
    return (
    <html lang="en">
      <body
        className={`${roboto.variable}   font-roboto`}
      > 
        <main className="overflow-x-clip">
            <div className="flex px-4 flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
                <div className="  pb-10">
                    <SearchImg/>
                 </div> 
                <p className="text-lg mb-6  text-center">Oops! The page you're looking for doesn't exist.</p>
                <Link href="/" 
                    className="px-6 rounded-full py-3 bg-primary text-white  hover:bg-primary/80 transition">
                    Go Back Home 
                </Link>
            </div>
        </main>
      </body>
    </html>

  )
}
