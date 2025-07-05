import profilePic from '../assets/pasfoto.jpg';

function AboutSection({subTitle, aboutText}) {
    return(
        <section className="h-fit" id="about">
            <div className="flex sm:flex-row flex-col gap-8 max-w-[960px] sm:mx-auto mx-4 sm:py-4 py-2">
                <img src={profilePic} alt="Profile Photo" className="sm:w-[200px] size-36 aspect-square rounded-full object-cover"/>
                <div className="flex flex-col gap-8">
                    <h2 className="sm:text-[28px] text:2xl font-semibold text-[#1F2937] pb-2 border-b border-gray-400">{subTitle}</h2>
                    <p className="sm:text-base text-sm font-normal">{aboutText}</p>
                    <div className="flex flex-row gap-6">
                        <span className="bg-[#F0FDF4] py-1 px-2 rounded-lg font-grotesk font-semibold sm:text-xs text-[10px] text-[#F06529]">HTML</span>
                        <span className="bg-[#F0FDF4] py-1 px-2 rounded-lg font-grotesk font-semibold sm:text-xs text-[10px] text-[#3C99DC]">CSS</span>
                        <span className="bg-[#F0FDF4] py-1 px-2 rounded-lg font-grotesk font-semibold sm:text-xs text-[10px] text-[#F0DB4F]">Javascript</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection