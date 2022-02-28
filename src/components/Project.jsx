import BtnMenu from "../components/BtnMenu"

const Project = ({ project }) => {
  console.log(project)
  return (
    <div className="md:flex md:items-center md:gap-8 ">
      <figure className="mb-8 md:mb-0">
        <picture>
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet={`
        ${project.images[200]} 200w,
        ${project.images[508]} 508w,
        ${project.images[855]} 855w,
        ${project.images[876]} 876w,
        ${project.images[1008]} 1008w,
        ${project.images[1131]} 1131w,
        ${project.images[1263]} 1263w,
        ${project.images[1400]} 1400w,
        `}
            src={project.images[1400]}
            alt="Proyecto portafolio de Yeferson Olarte Roncancio"
            className="w-8/12 md:w-full lg:max-w-2xl mx-auto"
          />
        </picture>
      </figure>

      <section className="w-full md:w-10/12 lg:max-w-2xl">
        <div className="mb-4">
          <h2 className="font-roboto font-bold text-4xl capitalize text-light mb-4">
            {project.name}
          </h2>

          <p className="font-lato text-xl text-gray-300 mb-2 leading-8">
            {project.description}
          </p>

          <div className="tech">
            {project.technologies.map((element, i) => (
              <span key={i} className="text-emerald-400">
                {" "}
                {`${element.name}`}
              </span>
            ))}
          </div>
        </div>

        <div className="flex  md:items-center gap-x-8">
          <BtnMenu
            className=" text-green-500 text-xs  px-8 py-3 font-lato tracking-wider border-2 border-green-500  inline-block rounded-md text-center"
            href="https://github.com/"
            target="_blanck"
          >
            Ver código
          </BtnMenu>

          <BtnMenu
            className="text-light px-8 py-3
            text-xs  
            font-lato tracking-wider
            border-2 border-green-600
            bg-green-600 inline-block rounded-md text-center"
          >
            Ver proyecto
          </BtnMenu>
        </div>
      </section>
    </div>
  )
}

export default Project
