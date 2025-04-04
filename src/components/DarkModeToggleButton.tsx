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

          {/* Cupcake Theme Card */}
          <div
              className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
              data-set-theme="cupcake"
              data-act-classname="outline"
            >
            <div
              data-theme="cupcake"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Cupcake</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-pink-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 16v4a2 2 0 002 2h14a2 2 0 002-2v-4m-1-6H4V5a3 3 0 016 0h4a3 3 0 016 0v5z"
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

          {/* Bumblebee Theme Card */}
          <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="bumblebee"
            data-act-classname="outline"
          >
            <div
              data-theme="bumblebee"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Bumblebee</div>
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
                    d="M4 12l1.5-1.5L9 14l4.5-4.5L16 12l-4.5 4.5L9 10l-3.5 3.5L4 12z"
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

          {/* Emerald Theme Card */}
          <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="emerald"
            data-act-classname="outline"
          >
            <div
              data-theme="emerald"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Emerald</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9l7-4-7-4-7 4 7 4zm0 0v12l7-4-7-4-7 4V9z"
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

          {/* Corporate Theme Card */}
          <div
            className="rounded-lg shadow-lg outline outline-2 outline-offset-2 outline-base-content hover:shadow-xl transition-all cursor-pointer"
            data-set-theme="corporate"
            data-act-classname="outline"
          >
            <div
              data-theme="corporate"
              className="w-full bg-base-100 text-base-content p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Corporate</div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6l-2 2 2 2 2-2-2-2zm0 12l-2 2 2 2 2-2-2-2zm0 6h12V6H12v18z"
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
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="synthwave"
            data-act-classname="outline"
          >
            <div
              data-theme="synthwave"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">synthwave</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="retro"
            data-act-classname="outline"
          >
            <div
              data-theme="retro"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">retro</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="cyberpunk"
            data-act-classname="outline"
          >
            <div
              data-theme="cyberpunk"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">cyberpunk</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="valentine"
            data-act-classname="outline"
          >
            <div
              data-theme="valentine"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">valentine</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="halloween"
            data-act-classname="outline"
          >
            <div
              data-theme="halloween"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">halloween</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="garden"
            data-act-classname="outline"
          >
            <div
              data-theme="garden"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">garden</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="forest"
            data-act-classname="outline"
          >
            <div
              data-theme="forest"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">forest</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="aqua"
            data-act-classname="outline"
          >
            <div
              data-theme="aqua"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">aqua</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="lofi"
            data-act-classname="outline"
          >
            <div
              data-theme="lofi"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">lofi</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="pastel"
            data-act-classname="outline"
          >
            <div
              data-theme="pastel"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">pastel</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="fantasy"
            data-act-classname="outline"
          >
            <div
              data-theme="fantasy"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">fantasy</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="wireframe"
            data-act-classname="outline"
          >
            <div
              data-theme="wireframe"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">wireframe</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="black"
            data-act-classname="outline"
          >
            <div
              data-theme="black"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">black</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="luxury"
            data-act-classname="outline"
          >
            <div
              data-theme="luxury"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">luxury</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="dracula"
            data-act-classname="outline"
          >
            <div
              data-theme="dracula"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">dracula</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="cmyk"
            data-act-classname="outline"
          >
            <div
              data-theme="cmyk"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">cmyk</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="autumn"
            data-act-classname="outline"
          >
            <div
              data-theme="autumn"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">autumn</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="business"
            data-act-classname="outline"
          >
            <div
              data-theme="business"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">business</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="acid"
            data-act-classname="outline"
          >
            <div
              data-theme="acid"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">acid</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="lemonade"
            data-act-classname="outline"
          >
            <div
              data-theme="lemonade"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">lemonade</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="night"
            data-act-classname="outline"
          >
            <div
              data-theme="night"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">night</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="coffee"
            data-act-classname="outline"
          >
            <div
              data-theme="coffee"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">coffee</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
            data-set-theme="winter"
            data-act-classname="outline"
          >
            <div
              data-theme="winter"
              className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                  <div className="grow text-sm font-bold">winter</div>
                  <div className="flex shrink-0 flex-wrap gap-1">
                    <div className="w-2 rounded bg-primary"></div>
                    <div className="w-2 rounded bg-secondary"></div>
                    <div className="w-2 rounded bg-accent"></div>
                    <div className="w-2 rounded bg-neutral"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggleButton;
