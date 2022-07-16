import { SearchIcon } from "@heroicons/react/outline"
import { classes } from "../lib/utils"

function Home() {
  return (
    <header
      id="home"
      className={classes(
        "relative h-screen min-h-[45rem] w-full",
        "flex items-center justify-center",
        "overflow-hidden bg-transparent"
      )}>
      <div
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "flex h-full w-full flex-col",
          "items-center justify-center gap-0"
        )}>
        <h1
          className={classes(
            "max-w-xl-2 text-xl-4 font-extra-bold leading-[1.15]",
            "text-center tracking-tight text-neutral-900",
            "mb-4 md:mb-8 md:max-w-xl-3 md:text-xl-5",
            "xl:max-w-xl-4 xl:text-xl-6"
          )}>
          Hi there <span>📄</span> I am{" "}
          <span
            className={classes(
              "text-emerald-700 underline underline-offset-4",
              "decoration-emerald-700 decoration-4"
            )}>
            Deema
          </span>
          ! <br className={classes("hidden md:block")} /> I write stunning
          articles here<span className={classes("text-emerald-700")}>.</span>
        </h1>
        <p
          className={classes(
            "max-w-xl-3 text-lg font-normal leading-relaxed",
            "mb-8 text-center text-neutral-600",
            "md:mb-14 md:text-xl lg:max-w-xl-4"
          )}>
          Here, I only write articles, but they are not what I just write. I am
          a web designer and developer who loves creating stunning websites and
          content!
        </p>
        <div
          className={classes(
            "flex h-auto w-full flex-col",
            "items-stretch justify-center gap-3",
            "sm:w-max sm:flex-row sm:gap-10",
            "sm:gap-4 lg:gap-5"
          )}>
          <a href="#search" className={classes("button button-primary")}>
            <SearchIcon
              className={classes(
                "relative h-6 w-6",
                "fill-transparent stroke-current"
              )}
            />
            <span>Search Articles</span>
          </a>
          <a
            href="https://github.com/deemacauses"
            target={"blank"}
            className={classes("button button-tertiary")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className={classes(
                "relative h-6 w-6",
                "fill-current stroke-transparent"
              )}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={[
                  "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87",
                  "15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01",
                  "13.72C4 14.09 3.48 13.23 3.32 12.78C3.23",
                  "12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13",
                  "2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44",
                  "13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56",
                  "11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23",
                  "5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1",
                  "6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86",
                  "9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66",
                  "4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12",
                  "7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01",
                  "12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10",
                  "15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                ].join(" ")}
                transform="scale(64)"
              />
            </svg>
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Home
