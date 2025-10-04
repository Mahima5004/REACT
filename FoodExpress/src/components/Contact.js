const Contact = () => {
    return (
        <div>
            <h1 className="mt-10 m-2 font-bold text-2xl">
                Contact Us
            </h1>
            <form>
                <input type="text" placeholder="name" className=" border border-black p-2 m-2" />
                <input type="text" placeholder="message" className=" border border-black p-2 m-2" />
                <button className="border-black m-2 p-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;