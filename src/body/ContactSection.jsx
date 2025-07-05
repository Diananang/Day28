
function ContactSection({contacts}) {
    const handleSendMessage =() => {
        alert("Message Sent!")
    }

    return(
        <section className="h-fit" id="contact">
            <div className="flex flex-col sm:gap-8 gap-4 max-w-[960px] sm:mx-auto mx-4 sm:py-4 py-2">
                <h2 className="sm:text-[28px] text:2xl font-semibold text-[#1F2937] pb-2 border-b border-gray-400">Get in Touch</h2>
                <p className="sm:text-base text-sm font-normal">Feel free to send a message or reach me via email.</p>
                <div className="flex sm:flex-row flex-col sm:gap-[108px] gap-8">
                    <form action="email" className="flex flex-col gap-4 sm:w-[500px] w-auto">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="sm:text-base text-xs font-semibold">Name</label>
                        <input typeof="text" className="bg-[#F0FDF4]/50 border-2 border-[#059669] rounded-lg w-full sm:h-[50px] h-8 sm:text-base text-sm"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="sm:text-base text-xs font-semibold">Email</label>
                        <input typeof="email" className="bg-[#F0FDF4]/50 border-2 border-[#059669] rounded-lg w-full sm:h-[50px] h-8 sm:text-base text-sm"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="sm:text-base text-xs font-semibold">Message</label>
                        <textarea placeholder="Type your message..." className="bg-[#F0FDF4]/50 border-2 border-[#059669] rounded-lg w-full sm:h-[50px] h-8 resize sm:text-base text-sm"></textarea>
                    </div>
                    <button typeof="button" onClick={handleSendMessage} className="sm:text-base text-xs font-normal text-white px-2 py-1 rounded-lg bg-[#059669] w-fit" type="button">
                        Send Message
                    </button>
                    </form>

                    <div className="flex sm:flex-col flex-row sm:gap-6 gap-3 sm:text-base text-sm items-center">
                        {contacts.map((contact, index) => (
                            <div key={index} className="flex flex-row sm:gap-4 gap-2 items-center">
                                <img src={contact.image} alt={contact.type} className="sm:size[24px] size-[16px]"/>
                                <a href={contact.link} target="_blank">{contact.type}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </section>
    )
}
export default ContactSection