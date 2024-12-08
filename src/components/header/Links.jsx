const Links = () => {
  const links = ["Women", "Man", "Company", "Stores"];
  return (
    <div className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {links.map((link) => (
          <div key={link} className="flex">
            <div className="relative flex">
              <button
                type="button"
                className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                aria-expanded="false"
              >
                {link}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
