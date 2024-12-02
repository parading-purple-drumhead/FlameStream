const PageLinks = () => {
  return (
    <div className="page-links">
      <hr className="border-b border-b-gray-200" />
      <div className="flex justify-between gap-10 py-10">
        <div className="social flex w-1/3 flex-col gap-2">
          <h3 className="page-link">About FlameStream</h3>
          <h3 className="page-link">Contact Us</h3>
          <h3 className="page-link">Careers</h3>
          <h3 className="page-link">News</h3>
          <h3 className="page-link">Press</h3>
        </div>
        <div className="legal flex w-1/3 flex-col gap-1">
          <h3 className="page-link">Terms of Service</h3>
          <h3 className="page-link">Privacy Policy</h3>
        </div>
        <div className="newsletter flex w-1/3 flex-col gap-5">
          <h3 className="text-2xl font-bold uppercase text-gray-700">
            FlameStream News
          </h3>
          <p className="text-lg text-gray-200">
            Sign up for the latest news, exclusive content, and more.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="grow border border-gray-500 bg-transparent px-2 py-2 text-gray-200"
            />
            <button className="hover:border-grat-200 border border-gray-500 bg-transparent px-2 text-sm text-gray-200 transition ease-out hover:border-gray-200 hover:bg-gray-200 hover:text-gray-800">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <hr className="border-b border-b-gray-200" />
    </div>
  );
};

export default PageLinks;
