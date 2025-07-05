function ProjectsSection({projects}) {

    const handleOpenLink = (url) => {
        window.open(url, "_blank");
    }

    return(
        <section className="h-fit" id="projects">
            <div className="flex flex-col gap-8 max-w-[960px] sm:mx-auto mx-4 sm:py-4 py-2 ">
                <h2 className="sm:text-[28px] text:2xl font-semibold text-[#1F2937] pb-2 border-b border-gray-400">Projects</h2>
                <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-1 gap-6 h-fit">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col gap-4 bg-[#F0FDF4] rounded-lg h-full">
                            <img src={project.image} alt={project.title} className="sm:h-[180px] h-32 object-cover object-top rounded-t-lg" />
                            <div className="flex flex-col gap-4 py-4 px-6 flex-grow">
                                <h3 className="sm:text-2xl text-xl font-medium">{project.title}</h3>
                                <p className="sm:text-base text-sm font-normal">{project.desc}</p>
                            </div>
                            <div className="flex flex-row gap-4 py-4 px-6 justify-end items-end mt-auto">
                                <button 
                                typeof="button" 
                                onClick={() => handleOpenLink(project.figma)} 
                                className="sm:text-sm text-xs text-white font-normal py-1 px-2 rounded-lg bg-[#059669]">
                                    View
                                </button>
                                <button 
                                typeof="button" 
                                onClick={() => handleOpenLink(project.code)} 
                                className="sm:text-sm text-xs text-white font-normal py-1 px-2 rounded-lg bg-[#059669]">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}  
                </div>
            </div>
      </section>
    )
}
export default ProjectsSection