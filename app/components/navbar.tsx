import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();
  return (
    <header className="bg-white text-black">
      <nav className="flex justify-between items-center h-16 max-w-6xl mx-auto px-4">
        <Link href={"/"}>
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </Link>
        <div className="flex items-center space-x-4">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <button
              onClick={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <span className="text-blue-500">Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
