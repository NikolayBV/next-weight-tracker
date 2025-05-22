"use client"
import {redirect} from "next/navigation";
import {useAuthStore} from "@/stores/authStore";

export default function Home() {
  const token = useAuthStore(state => state.accessToken);
  console.log(token);
  if (token) {
    return redirect('/dashboard');
  } else {
    redirect('/public/login'); 
  }
}
