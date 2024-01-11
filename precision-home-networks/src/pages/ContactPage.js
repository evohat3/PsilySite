import React, { useContext } from "react";
import { ThemeContext } from "../styles/Theme";

export default function ContactPage() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    //     <!--
    //   This example requires some changes to your config:

    //   ```
    //   // tailwind.config.js
    //   module.exports = {
    //     // ...
    //     plugins: [
    //       // ...
    //       require('@tailwindcss/forms'),
    //     ],
    //   }
    //   ```
    // -->
    <div>
      <div
        class={`isolate px-6 py-24 sm:py-32 lg:px-8 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div
          class={`mx-auto max-w-2xl text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h2>
          <p class="mt-2 text-lg leading-8 ">
            We Would Like To Hear From You!
          </p>
        </div>
        <form
          action="#"
          method="POST"
          class={`mx-auto mt-16 max-w-xl sm:mt-20 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 "
              >
                First name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6"
              >
                Last name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 ">
                Email
              </label>
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6"
              >
                Phone number
              </label>
              <div class="relative mt-4">
                <div class="absolute inset-y-0 left-0 flex items-center"></div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div className="sm:columns-1 md:columns2">
                <label
                  for="message"
                  class="block text-sm font-semibold leading-6 "
                >
                  Message
                </label>

                {/* RADIO BUTTON GROUP */}
                <div class="col-span-full">
                  <h6 class="text-sm text-gray-400">Select Subject</h6>
                  <div class="flex max-lg:flex-col lg:space-x-6 max-lg:space-y-6">
                    <div class="flex items-center mt-3">
                      <input
                        id="radio1"
                        type="radio"
                        name="value1"
                        class="hidden peer"
                        checked
                      />
                      <label
                        for="radio1"
                        class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                      >
                        <span class="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                      </label>
                      <p class="text-sm ml-3">General Inquiry</p>
                    </div>
                    <div class="flex items-center mt-3">
                      <input
                        id="radio2"
                        type="radio"
                        name="value1"
                        class="hidden peer"
                      />
                      <label
                        for="radio2"
                        class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                      >
                        <span class="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                      </label>
                      <p class="text-sm ml-3">Technical Support</p>
                    </div>
                    <div class="flex items-center mt-3">
                      <input
                        id="radio3"
                        type="radio"
                        name="value1"
                        class="hidden peer"
                      />
                      <label
                        for="radio3"
                        class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                      >
                        <span class="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                      </label>
                      <p class="text-sm ml-3">Website Feedback</p>
                    </div>
                  </div>
                </div>
{/* Radio Button Group Ends Here **** */}
                <div className="mt-4">Details:</div>
              </div>
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div class="flex gap-x-4 sm:col-span-2">
              <div class="flex h-6 items-center">
                {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
                <button
                  type="button"
                  class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="switch-1-label"
                >
                  <span class="sr-only">Agree to policies</span>
                  {/* <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" --> */}
                  <span
                    aria-hidden="true"
                    class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  ></span>
                </button>
              </div>
              <label class="text-sm leading-6 " id="switch-1-label">
                By selecting this, you agree to our
                <a href="/" class="font-semibold text-indigo-600">
                  &nbsp;privacy&nbsp;policy
                </a>
                .
              </label>
            </div>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
