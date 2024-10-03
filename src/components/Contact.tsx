import React, { useRef, useState } from 'react';
import macbookImg from '/macbook.png';
import yourPhoto from '/Denis-Pic.png';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission

        const formData = new FormData(formRef.current!);

        // Send form data using Fetch API
        try {
            const response = await fetch('https://formspree.io/f/xldrqpqk', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true); // Set submission status to true
                setTimeout( () => {
                    setIsSubmitted(false);
                }, 3000)
                formRef.current!.reset(); // Clear the form fields
            } else {
                setIsSubmitted(false); // Handle error state if needed
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitted(false); // Handle failure
        }
    };

    return (
        <section
            id="contact"
            className="relative flex flex-col items-center justify-center py-12 px-4"
        >
            {/* Contact me headline */}
            <h2 className="relative z-[9] text-4xl font-bold text-blue-400 mb-2 text-center">
                Contact me
            </h2>
            <h4 className="text-xl font-medium text-gray-400 text-center mb-4">Let’s Collaborate or Just Say Hello</h4>

            {/* MacBook with form and contact info inside */}
            <div className="relative z-[9] container mx-auto flex justify-center items-center border-none shadow-none">
                <div id={"contact-me-container"} className="relative w-full max-w-6xl">
                    {/* MacBook Image */}
                    <img
                        id={"macbook-img"}
                        src={macbookImg}
                        alt="Macbook"
                        className="w-full h-auto"
                        style={{maxWidth: "1200px"}}
                    />

                    {/* Form and Info inside the MacBook */}
                    <div className="absolute justify-center inset-0 flex p-6 lg:p-12">
                        {/* Form and Contact Info in one container */}
                        <div id={"inner-contact-me-container"} className="relative flex flex-wrap lg:flex-nowrap">
                            {/* Form section */}
                            <div
                                id={"contact-form"}
                                style={{maxWidth: "550px"}}
                                className="flex flex-col justify-center p-4"
                            >
                                <h3 className="text-gray-600 text-xl">Leave a Message</h3>

                                {/* Display success message */}
                                {isSubmitted && (
                                    <p className="text-green-500 font-bold">
                                        Your message has been sent successfully!
                                    </p>
                                )}

                                {/* Contact Form */}
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div className={"form-row"}>
                                        <input
                                            type="text"
                                            name="_name"
                                            placeholder="Name"
                                            className="w-full p-2 mt-4 mb-4 contact-inputs bg-white/10 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-gray-400"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="_email"
                                            placeholder="Email"
                                            className="w-full p-2 mb-4 contact-inputs bg-white/10 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-gray-400"
                                            required
                                        />
                                    </div>
                                    <div className={"form-row-2"}>
                                        <input
                                            type="tel"
                                            name="_phone_number"
                                            placeholder="Phone Number"
                                            className="w-full p-2 mb-4 contact-inputs bg-white/10 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-gray-400"
                                        />
                                        <textarea
                                            name="_message"
                                            placeholder="Message"
                                            className="w-full p-2 mb-5 contact-inputs bg-white/10 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                                            rows={4}
                                            required
                                        ></textarea>
                                    </div>
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
                            <div className="flex denis-contacts-info-container flex-col items-center justify-center">
                                <img
                                    id={"contact-me-img"}
                                    src={yourPhoto}
                                    alt="Your Photo"
                                    className="w-28 h-auto object-cover rounded-full border-4 border-blue-400 shadow-lg mb-4"
                                />
                                <div
                                    className="text-white denis-contacts-container text-center bg-gray-800 p-6 rounded-lg space-y-4"
                                >
                                    <p className="text-xl denis-contacts font-bold border-b border-gray-600 pb-2">
                                        Denis Danov
                                    </p>
                                    <p className="text-lg denis-contacts border-b border-gray-600 pb-2">
                                        Sofia, Bulgaria
                                    </p>
                                    <p className="text-lg denis-contacts text-blue-400">
                                        denisdanov7@gmail.com
                                    </p>
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
