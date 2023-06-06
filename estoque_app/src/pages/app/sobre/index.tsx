import { Layout } from "../../../components/layout";

const SobrePage: React.FC = () => {
  const people = [
    {
      name: "Ariany da Silva Gomes",
      matricula: "202203745743",
    },
    {
      name: "Felipe de Almeida Sousa",
      matricula: "202204167778",
    },
    {
      name: "Hury Luan Cuesta Fernandes",
      matricula: "202051337842",
    },
    {
      name: "Odir Boulhosa Malato Filho",
      matricula: "202051820748",
    },
    {
      name: "Wilker Garcia leal",
      matricula: "202108691518",
    },
  ];

  return (
    <Layout>
      <div className="w-full h-full p-5">
        <h1 className="font-bold text-[2.5rem] text-[#ca0000]">Sobre nós</h1>

        <div className="w-full">
          <p className="text-justify mt-5">
            <span className="ml-16">Gostaríamos</span> de expressar nossa
            gratidão a todos os envolvidos no trabalho de pesquisa de campo e
            desenvolvimento do sistema computacional para a lanchonete. Nossa
            jornada foi repleta de desafios, mas com o apoio e colaboração de
            todos, conseguimos alcançar resultados extraordinários.
            Primeiramente, gostaríamos de agradecer ao proprietário da
            lanchonete por acreditar em nosso projeto e permitir que
            desenvolvêssemos o sistema. Sua confiança em nosso trabalho foi
            essencial para o sucesso dessa empreitada. Um agradecimento especial
            vai para nossa equipe de pesquisa e desenvolvimento, que dedicou seu
            tempo e esforço para a concepção e implementação do sistema
            computacional. Seu trabalho árduo, expertise e colaboração foram
            fundamentais para o sucesso do projeto. Cada membro da equipe trouxe
            habilidades valiosas que se complementaram e resultaram em um
            sistema inovador e eficiente. O sucesso deste projeto não teria sido
            possível sem a colaboração de todos vocês. Estamos extremamente
            gratos por fazerem parte dessa experiência enriquecedora. Esperamos
            que o sistema computacional que desenvolvemos contribua para o
            crescimento e a eficiência da lanchonete, proporcionando uma
            experiência ainda melhor para seus clientes.
          </p>
        </div>

        <h2 className="font-bold mt-8 text-[1.8rem] text-[#ca0000]">Alunos</h2>

        <ul className="divide-y divide-gray-100">
          {people.map((person) => (
            <li
              key={person.matricula}
              className="flex justify-between items-center py-5"
            >
              <div className="flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full bg-[#eee] flex items-center justify-center">
                  <span className="text-gray-900 text-xl">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[1.2rem] font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  <p className="mt-1 text-[.9rem] leading-5 text-gray-500">
                    {person.matricula}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export { SobrePage };

/* Ariany da Silva Gomes 202203745743
Felipe de Almeida Sousa
202204167778
Hury Luan Cuesta Fernandes
202051337842
Odir Boulhosa Malato Filho 
202051820748
Wilker Garcia leal 
202108691518 */
