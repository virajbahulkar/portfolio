const DarkModeToggleButton = () => {
  return (
    <div
      title="Change Theme"
      className="dropdown dropdown-end"
      id="theme-selector"
    >
      <div tabIndex={0} className="btn btn-ghost gap-1 normal-case w-full">
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block size-5 stroke-current md:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2a9.98 9.98 0 00-9 5.9 9.982 9.982 0 001.8 10.9 10.003 10.003 0 0014.4-1.4A10 10 0 0012 2zm-1.5 14a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6-6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
        <span className="md:inline">Theme</span>
        <svg
          width="12px"
          height="12px"
          className="ml-1 hidden size-3 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <div className="sm:dropdown-content rounded-t-box rounded-b-box top-px  sm:mt-2 lg:mt-16  h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl">
        <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>

        {/* Light Theme Card */}
          <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="light"
            data-act-classname="outline"
          >
            <div
              data-theme="light"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Light Mode</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2v4m0 12v4m-5-5h4m6 0h4m-1-6h-4m-6 0H7m4 5a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-neutral"></div>
              </div>
            </div>
          </div>

          {/* Dark Theme Card */}
          <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="dark"
            data-act-classname="outline"
          >
            <div
              data-theme="dark"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Dark Mode</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v2m0 14v2m-6-7h2m12 0h2m-1-6h-2m-6 0H7m4 5a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-neutral"></div>
              </div>
            </div>
          </div>



         {/* Dark Theme Card */}
          <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="synthwave"
            data-act-classname="outline"
          >
            <div
              data-theme="synthwave"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Dark Mode</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v2m0 14v2m-6-7h2m12 0h2m-1-6h-2m-6 0H7m4 5a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-neutral"></div>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="retro"
            data-act-classname="outline"
          >
            <div
              data-theme="retro"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Retro</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v2m0 14v2m-6-7h2m12 0h2m-1-6h-2m-6 0H7m4 5a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-neutral"></div>
              </div>
            </div>
          </div>

           <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="cyberpunk"
            data-act-classname="outline"
          >
            <div
              data-theme="cyberpunk"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Cyberpunk</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v2m0 14v2m-6-7h2m12 0h2m-1-6h-2m-6 0H7m4 5a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-neutral"></div>
              </div>
            </div>
          </div>

           <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="valentine"
            data-act-classname="outline"
          >
            <div
              data-theme="valentine"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Valentine</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v2m0 14v2m-6-7h2m12 0h2m-1-6h-2m-6 0H7m4 5a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-neutral"></div>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="luxury"
            data-act-classname="outline"
          >
            <div
              data-theme="luxury"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Luxury</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v2m0 14v2m-6-7h2m12 0h2m-1-6h-2m-6 0H7m4 5a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-neutral"></div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default DarkModeToggleButton;
