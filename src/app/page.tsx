import Image from "next/image";
import Link from "next/link";
import TableIndex from "./components/Table.Index";


export default function Home() {
  return (
    <>
      <nav className="w-full  shadow-md relative ">
        <div className="bg-gray-900 text-blue-500 w-full m-auto text-center p-2 flex justify-center items-center">
          <div className="">
            {/* <Image src="/assets/cloudLg.png" alt="me" width="40" height="40" /> */}
          </div>
          {/* <p className="">Google Cloud STUDY JAMS 23 - 24</p> */}
          <p className="" style={{ color: '#f3bc0a' }}>Google Gen AI Study Jam 23 - 24</p>

        </div>

        <div className="p-3 flex mob:flex-col m-auto max-w-6xl justify-between items-center">
          <div className="logo mob:border-b mob:border-b-gray-200 flex justify-center items-center">
            <div className="img w-16 h-1w-16 rounded-full ">
              <Image
                src="/assets/gdsc-logo.png"
                alt="me"
                width="64"
                height="64"
              />
            </div>
            <div className="text flex flex-col justify-start items-start">
              <p className="text-base">Google Developer Student Club</p>
              <p className="text-xs">
                {" "}
                Yeshwantrao Chavan College of Engineering
              </p>
            </div>
          </div>

          <div className="links mob:py-3 flex justify-center items-center space-x-5">
            <Link href="https://www.linkedin.com/company/gdscycce/">
              <div className="cursor-pointer linkedin">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    fill="#3b82f6"
                  />
                </svg>
              </div>
            </Link>

            <Link href="https://www.instagram.com/gdsc.ycce/">
              <div className="cursor-pointer instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </Link>

            <Link href="https://gdsc.community.dev/yeshwantrao-chavan-college-of-engineering-nagpur/">
              <div className="cursor-pointer medium">
                <div className="img w-16 h-1w-16 rounded-full ">
                  <Image
                    src="/assets/ycce.png"
                    alt="me"
                    width="37"
                    height="38"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <TableIndex />

      <div className="  w-full p-2 text-center bg-gray-900 text-gray-300 md:w-full sm:w-full">
      <div
    className="w-full p-4 text-center">
    © 2023 Copyright:
    <a className="text-white" href="https://tailwind-elements.com/"
      > Yeshwantrao Chavan College Engineering
      </a>
  </div>
      </div>
    </>
  );
}
