import Image from "next/image";
import logo from '../../assets/images/logo-dark.png'
import { HeartIcon } from "lucide-react";
import Slider from "@/components/Slider";


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const currentYear = new Date().getFullYear();
    return (
        <main>
            <div className=" w-full h-dvh flex">
                <div className="flex-1 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <Image src={logo} alt="logo" className=" w-[15rem]" />

                        {children}

                        <div>
                            <p className="text-sm md:flex items-center justify-center mt-2 text-center whitespace-nowrap">
                                &copy; {currentYear} AmeriTex Pipe & Products, made with
                                <span className="inline-flex">
                                    <HeartIcon className="h-4 w-4 text-red-600 mx-1 translate-y-1 md:translate-y-0" />
                                </span>
                                by Ieko Media
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" flex-1 relative h-dvh w-[50%] overflow-hidden ">

                    <Slider />
                </div>
            </div>
        </main>
    );
}