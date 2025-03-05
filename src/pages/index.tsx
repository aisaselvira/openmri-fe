import FormExample from "@/components/FormExample";
import {} from "next/font/google";

export default function Home() {
    return (
        <>
            <main className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Selamat Datang!</h1>
                <FormExample />
            </main>
        </>
    );
}
