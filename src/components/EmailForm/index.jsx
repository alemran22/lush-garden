const EmailForm = () => {
  return (
    <div className="bg-email-bg max-w-7xl w-full mx-auto md:px-20 px-4 md:py-32 py-20 flex flex-col md:flex-row items-center justify-between gap-5">
      {/* left */}
      <div className="w-full">
        <p className="text-2xl md:text-3xl font-bold md:leading-relaxed">
          Enter your email address for our mailing Promo or other interesting
          things
        </p>
      </div>
      {/* right */}
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email"
          className="bg-transparent outline-none border text-white text-base font-medium px-10 md:w-96 w-full  py-3"
        />
        <button className="w-full md:w-fit text-white bg-green px-10 py-3 rounded-md border text-center">
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
