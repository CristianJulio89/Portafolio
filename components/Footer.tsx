export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 mt-12 py-6 text-center">
            <p>(c) {new Date().getFullYear()}Cristian Julio. Todos los derechos reservado</p>
            <p>
                <a 
                href="https://github.com/usuario"
                target="_blank"
                className="hover:text-black transition">
                    GitHub
                </a>{" "}
                |{" "}
                <a
                href="https://github.com/usuario"
                target="_blank"
                className="hover:text-black transition">
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}