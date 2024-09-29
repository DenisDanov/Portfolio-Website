import macbookImg from '../../public/macbook.png'; // Adjust paths based on your folder structure
import yourPhoto from '../../public/Denis-Pic.png';

const Contact = () => {
    return (
        <section id="contact"
                 className="relative flex flex-col items-center justify-center py-12 px-4">
            {/* Contact me headline */}
            <h2 className="relative z-10 text-4xl font-bold text-blue-400 mb-10 text-center">Contact me</h2>

            {/* MacBook with form and contact info inside */}
            <div
                className="relative z-10 container mx-auto flex justify-center items-center border-none shadow-none">
                <div className="relative w-full max-w-6xl">
                    {/* MacBook Image */}
                    <img src={macbookImg} alt="Macbook" className="w-full h-auto max-w-4xl mx-auto"
                         style={{maxWidth: "1200px"}}/>

                    {/* Form and Info inside the MacBook */}
                    <div className="absolute justify-center inset-0 flex p-6 lg:p-12">
                        {/* Form and Contact Info in one container */}
                        <div className="relative flex flex-wrap lg:flex-nowrap">
                            {/* Form section */}
                            <div className="flex flex-col justify-center p-4">
                                <h3 className="text-gray-600 text-xl">Leave a Message</h3>

                                {/* Contact Form */}
                                <form style={{maxWidth: "550px"}} action="https://formspree.io/xypdrgkm" method="POST"
                                      className="space-y-6">
                                    <input
                                        type="text"
                                        name="_name"
                                        placeholder="Name"
                                        className="w-full p-2 mt-4 bg-white/10 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-gray-400"
                                    />
                                    <input
                                        type="email"
                                        name="_email"
                                        placeholder="Email"
                                        className="w-full p-2 mb-4 bg-white/10 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-gray-400"
                                    />
                                    <input
                                        type="tel"
                                        name="_phone_number"
                                        placeholder="Phone Number"
                                        className="w-full p-2 mb-4 bg-white/10 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-gray-400"
                                    />
                                    <textarea
                                        name="_message"
                                        placeholder="Message"
                                        className="w-full p-2 mb-5 bg-white/10 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                                        rows={4}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        style={{margin: "10px auto"}}
                                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info section */}
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src={yourPhoto}
                                    alt="Your Photo"
                                    className="w-28 h-auto object-cover rounded-full border-4 border-blue-400 shadow-lg mb-4"
                                />
                                <div
                                    className="text-white text-center bg-gray-800 p-6 rounded-lg space-y-4"> {/* Added background and spacing */}
                                    <p className="text-xl font-bold border-b border-gray-600 pb-2">Denis
                                        Danov</p>  {/* Line under each section */}
                                    <p className="text-lg border-b border-gray-600 pb-2">Sofia, Bulgaria</p>
                                    <p className="text-lg text-blue-400">denisdanov7@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
