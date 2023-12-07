const Contact = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-12 pl-8 pr-8 md:pl-24 md:pr-24">
      <h1 className="md:text-3xl text-xl font-RoundsBlack uppercase text-center">
        Prenons nous la patte
      </h1>
      <form className="w-full flex">
        <div className="flex mt-8 w-full justify-center">
          <div className="flex flex-row gap-5 max-w-lg w-full justify-between">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border-2 border-[#6B4796] rounded-lg py-2 px-4 focus:outline-none focus:border-[#6B4796] sm:max-w-none w-full"
            />
            <button
              type="submit"
              className="bg-[#6B4796] text-white py-2 px-4 rounded-lg"
            >
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
