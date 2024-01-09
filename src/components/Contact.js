const Contact = () => {
    return (
        <div className="text-center mx-auto my-8 w-[40%]">
            <h1 className="text-4xl font-bold text-lime-800 px-6 text-center">Contact Page</h1>
            <form className="flex my-8 justify-end flex-wrap">
                <input
                    type="text"
                    placeholder="Name"
                    className="px-4 py-2 mx-2 rounded-lg bg-green-100 placeholder:text-lime-800 text-lime-800 outline-none shadow-lg my-4 grow shrink"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 mx-2 rounded-lg bg-green-100 placeholder:text-lime-800 text-lime-800 outline-none shadow-lg my-4 grow shrink"
                />
                <textarea
                    rows={5}
                    placeholder="Message"
                    className="px-4 py-2 mx-2 rounded-lg bg-green-100 placeholder:text-lime-800 text-lime-800 outline-none shadow-lg my-4 resize-y grow shrink basis-full"
                />
                <button
                    type="submit"
                    className="px-4 py-2 mx-2 rounded-lg bg-green-600 text-lime-50 shadow-lg my-4 grow shrink">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;