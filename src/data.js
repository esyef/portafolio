import { imagesProjects } from "./assets/projects/images-projects"

const projects = [
  {
    name: "portafolio",
    description:
      "Mi sitio web profesional es un diseño minimalista, pero elegante el cual construí en 3 páginas que se adaptan en diferentes pantallas. Es un sitio web SPA  (single-page application ). Usa HTML, CSS y JavaScript para la construcción de la interfaz de usuario y el envío del formulario de contacto. ",
    technologies: [
      { name: "ReactJs" },
      { name: "TailwindCSS" },
      { name: "React Hook Form" },
      { name: "React Router DOM" },
      { name: "AnimateCSS" },
      { name: "EmailJS" },
    ],

    images: {
      200: imagesProjects.portfolio.portfolio200,
      508: imagesProjects.portfolio.portfolio508,
      855: imagesProjects.portfolio.portfolio855,
      876: imagesProjects.portfolio.portfolio876,
      1008: imagesProjects.portfolio.portfolio1008,
      1131: imagesProjects.portfolio.portfolio1131,
      1263: imagesProjects.portfolio.portfolio1263,
      1400: imagesProjects.portfolio.portfolio1400,
    },
  },
]

export function getProjects() {
  return projects
}
