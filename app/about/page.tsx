export default function AboutPage() {
    return (
        <section className="max max-w-4xl mx-auto px-6 py-6">
            <h1 className="text-3xl font-bold mb-6 py-16">Sobre mí</h1>
            <p className="mb-4 text-gray-700">
                Como entusiasta en análisis y administración de información, mi
                objetivo es proporcionar soluciones eficientes para la
                estructuración, procesamiento y gestión de datos. A través de
                metodologías organizadas y estrategias basadas en precisión,
                facilito el acceso a información relevante, optimizando procesos y
                mejorando la toma de decisiones. Mi experiencia en gestión
                documental y análisis estratégico permite transformar datos en
                herramientas clave para garantizar eficiencia y confiabilidad en
                entornos empresariales.
            </p>

            <p className="mb-4 text-gray-700">
                Poseo experiencia académica y práctica en procesamiento de datos,
                seguridad informática y desarrollo de sistemas.
                Recientemente obtuve certificación GeneXus para desarrollo rápido de aplicaciones.
            </p>

             <p className="mb-4 text-gray-700">
                Mi enfoque siempre es primero entender el problema,
                luego planificar y finalmente ejecutar,
                priorizando código claro, documentación y buenas prácticas.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Habilidades Principales</h2>
            <ul className="flex flex-wrap gap-4">
                <li className="px-3 py-1 bg-gray-100 rounded">Python</li>
                <li className="px-3 py-1 bg-gray-100 rounded">SQL</li>
                <li className="px-3 py-1 bg-gray-100 rounded">Ciberseguridad</li>
                <li className="px-3 py-1 bg-gray-100 rounded">Genexus</li>
                <li className="px-3 py-1 bg-gray-100 rounded">Power BI</li>
            </ul>
        </section>
    );
}