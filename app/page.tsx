import { Developer, Easy, OpenSource } from './components/Illustrations';
import Contacts from './components/contacts';
import DownloadButton from './components/download';
import FAQ from './components/faq';
import Logo from './components/logo';

export default function Home() {
  return (
    <div className="flex flex-col">
      <header>
        {/* logo section */}
        <div className="flex items-center mx-4 justify-between">
          <div className="flex items-center gap-1 py-2">
            {/* <Logo /> */}
            <text className="text-2xl">naveo</text>
          </div>
          <div className="gap-4 flex font-light">
            <a href="https://github.com/naveo" target="_blank">
              Github
            </a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </header>

      <main className="flex flex-col h-full items-center gap-10">
        <div className="flex flex-col items-center gap-12 w-full py-40 bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          {/* title section */}
          <h1 className="text-4xl text-center px-2 text-slate-50 drop-shadow-md">
            <strong>Free Open Source</strong>
            <br />
            Docker Desktop Alternative for macOS
          </h1>

          {/* download load button */}
          <div>
            <DownloadButton />
          </div>
          <p className="drop-shadow-md text-center">
            Be advanced that naveo is an alpha build, and it might damage your
            system.
            <br />
            Currently only supports Intel macOS.{' '}
            <a href="#faq" className="underline font-light text-sm">
              see FAQ
            </a>
          </p>
        </div>

        <div className="gap-10 sm:flex-col sm:flex md:flex md:flex-row mx-4 items-center">
          <Easy />
          <div className="gap-4 flex flex-col pt-10 md:pt-0">
            <p>
              naveo is a free and open source software application that is still
              in alpha development.
              <br />
              It is a Docker Desktop alternative for macOS that offers a number
              of features, including:
            </p>
            <ul className="list-disc list-inside">
              <li>Easy to install and use.</li>
              <li>A built-in GUI for managing containers</li>
              <li>Support for building, pushing, and running containers</li>
            </ul>
          </div>
        </div>

        <div className="gap-10 sm:flex-col sm:flex md:flex md:flex-row items-center mx-4">
          <OpenSource />
          <div className="gap-4 flex flex-col pt-10 md:pt-0">
            <p>
              naveo is a promising alternative to Docker Desktop for Mac users,
              who are looking for a free and open source option. It is based on
              the Docker Engine, so it is compatible with all Docker images and
              containers. It is still under development, but it has the
              potential to be a great choice for those who want to use Docker on
              their Mac without having to pay for a commercial license.
            </p>
          </div>
        </div>

        <div className="gap-10 sm:flex-col sm:flex md:flex md:flex-row items-center mx-4">
          <Developer />
          <div className="gap-4 flex flex-col pt-10 md:pt-0">
            <p className="sm:gap-4 flex flex-col pt-10 md:pt-0t-10">
              naveo has being developed by a single person, and with any open
              source application it will only grow by the help of community.
            </p>
            <p>Here is how can help naveo grow:</p>
            <ul className="list-disc list-inside">
              <li>Submit issues to naveo&apos;s github repository.</li>
              <li>
                If you are a developer, you can contribute in fixing bugs or
                implementing new features.
              </li>
              <li>You can donate to support the development of naveo.</li>
            </ul>
          </div>
        </div>

        {/* FAQ section */}
        <div className="w-full px-4 py-10 gap-4 flex flex-col md:max-w-[90%]">
          <h1 className="text-2xl">Frequently Asked Questions</h1>
          <FAQ />
        </div>
      </main>

      <footer className="gap-8 pb-4 pt-20 font-thin text-sm justify-center flex flex-col items-center">
        <Contacts />
        Copyright © 2023 naveo.
      </footer>
    </div>
  );
}
