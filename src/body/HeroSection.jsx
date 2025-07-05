function HeroSection({title, field, desc, onStart}) {
    return(
        <section className="bg-[#F0FDF4] h-fit">
            <div className="flex flex-col items-center gap-8 max-w-[960px] sm:mx-auto mx-4 sm:py-8 py-4">
            <div className="flex flex-col gap-6 text-[#1F2937] text-center">
                <h1 className="font-grotesk sm:text-[40px] text-[32px] font-bold">{title}</h1>
                <p className="sm:text-2xl text-xl font-bold">{field}</p>
                <p className="sm:text-base text-sm font-normal">{desc}</p>
            </div>
            <div className="w-fit h-fit">
                <button 
                typeof="button"
                onClick={onStart}
                className="sm:py-2 py-1 sm:px-4 px-2 rounded-lg sm:text-base text-sm text-white bg-[#059669]" type="button">
                Let's get started
                </button>
            </div>
            </div>
        </section>
    )
}

export default HeroSection