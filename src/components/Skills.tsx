import { Code2, Palette, Database, Layout } from 'lucide-react';

const skills = {
  Framework: {
    icon: Layout,
    title: 'Framework',
    skills: ['Vite.js', 'Next.js', 'Nest.js', 'React.js', 'Bootstrap', 'TypeScript', 'React Native', 'Tailwind CSS']
  },
  languages: {
    icon: Code2,
    title: 'Langages',
    skills: ['C', 'CPP', 'PHP', 'CSS3', 'HTML5', 'Python', 'Haskell', 'JavaScript', 'TypeScript', 'Assembler']
  },
  design: {
    icon: Palette,
    title: 'Design',
    skills: ['UI/UX', 'Figma', 'Photoshop', 'Responsive Design']
  },
  backend: {
    icon: Database,
    title: 'Backend & Outils',
    skills: ['Git', 'PHP', 'Node.js', 'Firebase', 'GraphQL', 'Postman', 'REST API', 'MongoDB']
  }
};

export function Skills() {
  return (
    <section id="competences" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Compétences</h2>
          <p className="mt-4 text-xl text-gray-600">Technologies et outils que j'utilise au quotidien</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([key, category]) => (
            <div key={key} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">{category.title}</h3>
              <div className="mt-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-center">
                    <span className="px-3 py-1 text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}