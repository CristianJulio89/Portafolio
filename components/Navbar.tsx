import Link from "next/link";


const navItems = [
    { name: "Inicio", href: "/"},
    { name: "Sobre mí", href: "/about"},
    { name: "Proyectos", href: "/projects"},
    { name: "Certificaciones", href: "/certifications"},
    { name: "Contacto", href: "/contact"}
];

export default function Navbar() {
    return (
        <header className="w-full border-b border-gray-200">
            <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                <Link href = "/" className="font-semibold text-shadow-lg">
                Cristian Julio
                </Link>

                <ul className="hidden md:flex gap-6 text-sm">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                            href = {item.href}
                            className="hidden md:flex gap-6 text-sm text-gray-600 hover:text-black transition">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}