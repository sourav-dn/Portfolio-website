import { useParams } from "react-router";

const projectData = [
  {
    id: "1",
    name: "Event Manager Website",
    image: "https://i.ibb.co/0ybT0Bbm/event-managment.png",
    description: "This is a Event Management website, this website include a home page,about page and a dashboard...and right side there is a login button..when user login or register he/she can easily enter his/her account and also browse any things.Anyone can update photo and name.",
    technologies: ["React", "Tailwind", "Firebase"],
    liveLink: "https://b11a9-react-authentication-sourav-dn.netlify.app/",
    githubLink: "https://github.com/sourav-dn/event-manager",
  },
  {
    id: "2",
    name: "MangoFango Website",
    image: "https://i.ibb.co/201KWG1W/mango-fango.png",
    description: "This is a plant management web application that allows users to log, track, and manage care tasks for their houseplants. Users can add their plants, log watering/fertilizing dates, set reminders, and track plant health. The platform will support user authentication and personal plant data management.",
    technologies: ["React", "API", "Tailwind"],
    liveLink: "https://b11a10-mango-client-side-sourav-dn.netlify.app/",
    githubLink: "https://github.com/sourav-dn/MangoFango",
     
  },
  {
    id: "3",
    name: "Service Scope Website",
    image: "https://i.ibb.co/8gMy72Ly/service-scope.png",
    description: "A full-stack web application that allows users to review and interact with services. Users can register/login, add services, post reviews, update/delete their submissions, and browse all existing services and reviews.",
    technologies: ["React", "API", "Tailwind"],
    liveLink: "https://b11a11-service-client-side-sourav-dn.netlify.app/",
    githubLink: "https://github.com/sourav-dn/Service-Review-System",
  },
];

const ProjectDetails = () => {
  const { id } = useParams(); 
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return <h2 className="text-center text-red-500 mt-10">Project Not Found!</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up" data-aos-duration="2000">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <img src={project.image} alt={project.name} className="w-full rounded-md" />
      <p className="mt-4 text-gray-700">{project.description}</p>
      <h3 className="text-lg font-semibold mt-4">Technologies Used:</h3>
      <ul className="list-disc ml-5">
        {project.technologies.map((tech, index) => (
          <li key={index} className="text-gray-600">{tech}</li>
        ))}
      </ul>
      <div className="mt-6 flex gap-4">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded">
          Live Demo
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white px-4 py-2 rounded">
          GitHub Repo
        </a>
        
      </div>
    </div>
  );
};

export default ProjectDetails;
