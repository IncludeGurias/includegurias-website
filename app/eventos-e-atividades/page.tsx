import Link from "next/link"

export default function EventosAndActivities() {
  return (
    <div className="mt-[100px] flex min-h-screen w-screen flex-col items-center justify-center bg-gray-100">
      {/* Banner de página em construção */}
      <h1 className="text-4xl text-gray-500">Página em construção</h1>
      <Link href="/">
        <div className="mt-4 text-blue-500">Voltar para a página inicial</div>
      </Link>

      {/* Seção principal da página */}
      <div className="mt-8 max-w-4xl px-4">
        {/* Instruções sobre o conteúdo da página */}
        <div className="mb-8">
          <p>Esta página vai conter coisas como:</p>
          <ul className="list-inside list-disc">
            <li>Oficinas</li>
            <li>Visitas Técnicas</li>
            <li>Cursos</li>
            <li>Lives</li>
            <li>Palestras</li>
            <li>Semana Nacional de Sistemas e Tecnologia</li>
            <li>Escolas que já atenderam</li>
          </ul>
        </div>

        {/* Seção de Oficinas */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Oficinas</h2>
          <p>Descrição das oficinas realizadas, incluindo objetivos, temas abordados e impacto.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Exemplo de oficina */}
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-bold">Oficina de Programação</h3>
              <p>Oficina introdutória sobre programação em Python.</p>
              {/* Placeholder de imagem */}
              <div className="mt-2 h-32 rounded bg-gray-200"></div>
            </div>
            {/* Adicione mais oficinas conforme necessário */}
          </div>
        </section>

        {/* Seção de Visitas Técnicas */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Visitas Técnicas</h2>
          <p>
            Detalhes sobre as visitas técnicas realizadas, incluindo locais visitados, aprendizados e experiências
            compartilhadas.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Exemplo de visita técnica */}
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-bold">Visita à Empresa TechX</h3>
              <p>Visita técnica à TechX para aprender sobre desenvolvimento de software.</p>
              {/* Placeholder de imagem */}
              <div className="mt-2 h-32 rounded bg-gray-200"></div>
            </div>
            {/* Adicione mais visitas técnicas conforme necessário */}
          </div>
        </section>

        {/* Seção de Cursos */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Cursos</h2>
          <p>
            Informações sobre os cursos oferecidos, incluindo conteúdo programático, duração e feedback dos
            participantes.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Exemplo de curso */}
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-bold">Curso de Web Development</h3>
              <p>Curso abrangente sobre desenvolvimento web com React e Node.js.</p>
              {/* Placeholder de imagem */}
              <div className="mt-2 h-32 rounded bg-gray-200"></div>
            </div>
            {/* Adicione mais cursos conforme necessário */}
          </div>
        </section>

        {/* Seção de Lives */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Lives</h2>
          <p>Resumo das lives realizadas, com temas discutidos e principais insights.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Exemplo de live */}
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-bold">Live sobre Inteligência Artificial</h3>
              <p>Discussão sobre as tendências e aplicações da IA.</p>
              {/* Placeholder de imagem */}
              <div className="mt-2 h-32 rounded bg-gray-200"></div>
            </div>
            {/* Adicione mais lives conforme necessário */}
          </div>
        </section>

        {/* Seção de Palestras */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Palestras</h2>
          <p>Descrição das palestras ministradas, incluindo tópicos abordados e palestrantes.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Exemplo de palestra */}
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-bold">Palestra sobre Segurança Cibernética</h3>
              <p>Palestra sobre como proteger seus dados online.</p>
              {/* Placeholder de imagem */}
              <div className="mt-2 h-32 rounded bg-gray-200"></div>
            </div>
            {/* Adicione mais palestras conforme necessário */}
          </div>
        </section>

        {/* Seção de Semana Nacional de Sistemas e Tecnologia */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Semana Nacional de Sistemas e Tecnologia</h2>
          <p>Informações sobre a participação e atividades durante a Semana Nacional de Sistemas e Tecnologia.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Exemplo de atividade */}
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-bold">Atividade de Programação</h3>
              <p>Maratona de programação realizada durante a semana.</p>
              {/* Placeholder de imagem */}
              <div className="mt-2 h-32 rounded bg-gray-200"></div>
            </div>
            {/* Adicione mais atividades conforme necessário */}
          </div>
        </section>

        {/* Seção de Escolas Parceiras */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Escolas Parceiras</h2>
          <p>Descrição das escolas que já foram atendidas pelo projeto, destacando parcerias e colaborações.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Exemplo de escola parceira */}
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-bold">Escola Técnica de Guaíba</h3>
              <p>Parceria para oficinas e cursos de tecnologia.</p>
              {/* Placeholder de imagem */}
              <div className="mt-2 h-32 rounded bg-gray-200"></div>
            </div>
            {/* Adicione mais escolas parceiras conforme necessário */}
          </div>
        </section>
      </div>
    </div>
  )
}
