"use client"

import { useEffect } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import Header from "../components/layout/_header";
import { toast } from "react-toastify";
import jwt from 'jsonwebtoken'

export default function Dashboard() {
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const JWT = searchParams.get('redirect_url')?.toString();
        
        if (JWT) {
            // localStorage.setItem('JWT', JWT);
            Cookies.set('token', JWT, {expires: 1, secure: true})
            history.pushState(null, '', process.env.SUB_DOMAIN +'/dashboard');

            const data = {
                jwt: JWT
            }

            console.log(data);
            

            axios.post(process.env.SERVER_API + '/user/login', data)
                .then((res) => {
                    if (res.data.status == 401) {

                    }
                    console.log(res);
                })
        }
    }, [])

    return (
        <>
            <Header />

            <div className="w-full pt-[80px] px-[40px]">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                Dashboard
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    )
}
