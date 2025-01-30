export default function Contact() {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute   inset-0"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.1007628440857%2C25.62258742363783%2C85.11535406112672%2C25.633324842401812&amp;layer=mapnik"
              style={{
                filter: "grayscale(1) contrast(1.2) invert(1)  opacity(0.6)",
              }}
              content="dark"
            ></iframe>
            <div className="bg-gray-900 backdrop-blur-sm transition hover:bg-opacity-100 bg-opacity-55 text-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  New Patliputra Colony, Patna, Bihar - 800013
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-red-500 leading-relaxed"
                  href="mailto:shaswatsatyam51@gmail.com"
                >
                  shaswatsatyam51@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">83407635XX</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 backdrop-blur-sm border-gray-900 border-2 rounded px-3 font-white flex flex-col md:ml-auto w-full pt-3 ">
            <h2 className="text-gray-300 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <blockquote className="text-l italic font-semibold text-gray-900 dark:text-white">
              <p>
                "If you don't judge anyone, Do you judge yourself?" - Iravati, 8
                AM Metro
              </p>
            </blockquote>

            <form
              className="text-white"
              action="https://api.staticforms.xyz/submit"
              method="post"
            >
              <input
                type="hidden"
                name="accessKey"
                value="57333892-ae63-4f21-94df-16215d3a28f7"
              />
              <input
                type="hidden"
                name="replyTo"
                value="palmtrees2308@protonmail.com"
              />
              <input
                type="hidden"
                name="redirectTo"
                value="https://shaswat.software"
              />
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-500 rounded border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-500 rounded border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-500 rounded border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Button
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Yes I wil read what you post
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
