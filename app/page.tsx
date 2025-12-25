import Link from "next/link";


export default function HomePage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Ingeniero de Sistemas
      </h1>

      <h2 className="text-lg md:text-xl text-gray-600 mb-6">
        Análisis de Datos -Ciberseguridad -Desarrollo
      </h2>

      <p className="max-w-xl text-gray-700 mb-8">
        Construyo solucones tecnológicas claras, seguras y funcionales.
        Me enfoco en enteder el problema antes de escribir código.
      </p>

      <div className="flex gap-4">
        <Link 
        href= "/projects"
        className="px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800">
          Ver proyectos
        </Link>

        <Link
        href="https://github.com/usuario"
        target="_blank"
        className="px-6 py-3 rounde-md border border-black hover:bg-gray-100">
          GitHub
        </Link>
      </div>
    </section>
  );
}