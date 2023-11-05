import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
        <a href="http://localhost:3000" className="flex items-center auth-logo">
            <img src="/assets/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Backstory</span>
        </a>

        <div className="flex flex-col items-center md:flex-row md:h-screen justify-center">
            <div className="flex items-center justify-center w-full md:w-2/5">
                <Image src="/assets/images/auth/login.png" alt="Login Image" width={500} height={350} />
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-1/4">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h1 className="text-2xl font-bold">Welcome back!</h1>
                        <p className="mt-2 text-gray-600">
                        Please sign in to your account.
                        </p>
                    </div>
                        
                      <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                        >
                          Login with Backstory
                        </button>
                      </div>
                </div>
            </div>
        </div>
    </>
  )
}
