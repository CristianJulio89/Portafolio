export default function CertificationsPage() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-8"> Certificaciones</h1>

            <ul className="flex flex-col gap-6">
                <li className="border rounded-md p-4 hover:shadow-lg transition">
                    <h3 className="font-semibold text-lg mb-2">Curso de Desarrollo con GeneXus</h3>
                    <p className="text-gray-700 mb-1">Certificado oficial</p>
                </li>

                <li className="border rounded-md p-4 hover:shadow-lg transition">
                    <h3 className="font-semibold text-lg mb-2">Formaciòn en Análisis de Datos</h3>
                    <p className="text-gray-700 mb-1">Procesamiento y visualización de datos</p>
                </li>

                <li className="border rounded-md p-4 hover:shadow-lg transition">
                    <h3 className="font-semibold text-lg mb-2">Fundamentos de Ciberseguridad</h3>
                    <p className="text-gray-700 mb-1">Buenas prácticas y gestión de riesgos</p>
                </li>
            </ul>
        </section>
    );
}