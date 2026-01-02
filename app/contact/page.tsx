export default function ContactPage() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-16 text-center">
            <h1 className="text-3xl font-bold mb-6">Contacto</h1>

            <p className="mb-6 text-gray-700">
                ¡Escríbeme para proyectos, consultas u oportinidades labores.
            </p>

            <div className="flex flex-col gap-4 text-gray-700">
                <p>Email: <a href="mailto:cmejia8989@gmail.com" className="text-blue-600 h-4"></a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/cristian-mej%C3%ADa-364404152/" target="_blank"></a></p>
                <p>Github: <a href="https://github.com/CristianJulio89" target="_blank" className="text-blue-600 h-4"></a></p>
            </div>
        </section>
    );
}