'use client';
import "./layout.css";
import Button from "@/components/ui/button/Button";
import {redirect} from "next/navigation";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    function onClickLoginBtn(): void {
        redirect("/public/login");
    }
    function onClickRegisterBtn(): void {
        redirect("/public/register");
    }
    return (
        <>
            <section>
                {children}
            </section>
            <nav className="nav">
                <Button onClick={onClickLoginBtn} buttonTitle={"Войти"}></Button>
                <Button onClick={onClickRegisterBtn} buttonTitle={"Зарегистрироваться"}></Button>
            </nav>
        </>
    );
}