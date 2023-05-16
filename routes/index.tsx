export default function Home() {
  return (
    <>
      <div class="container pt-2 mx-auto flex">
        <div class="mr-20">
        <h1 class="text-4xl text-slate-300 pt-5">Yo I'm <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-indigo-500">怪</span></h1>
        <p class="text-sm pl-10 pb-10 italic bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 to-indigo-400">怪 (guài) means strange or unusual </p>
        <h2 class="text-2xl text-slate-200 pb-5">Welcome to my page!</h2>
          <p>
            I'm a little bit of everything and nothing. From a small demon of a kid
            to the streets, from the streets to a boxer's ring, from a ring to a laptop.
          </p>
          <p class="pt-2">
            Evolving and changing, change is the only only permanence.
          </p>
        <h3 class="text-xl text-slate-100 pt-6">I'm:</h3>
          <ul class="">
            <li class="pl-5 py-1">a Spirit.</li>
            <li class="pl-5 py-1">an Artist?</li>
            <li class="pl-5 py-1">a Programmer</li>
            <li class="pl-5 py-1">
              an Animator
              <ul>
                <li class="pl-10">Frame by frame</li>
                <li class="pl-10">After Effects</li>
              </ul>
            </li>
            {/* <li class="pl-5 py-2">
              <svg class="animate-spin -ml-1 mr-3 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </li> */}
            <li>
              {/* <video src="/dad.mp4" class="w-50 h-50 absolute left-0 top-40" autoplay /> */}
            </li>
            <li>
              <img src="/the3.gif" width="500" height="500" class="absolute left-0 -bottom-20 desktop:top-0" />
            </li>
          </ul>
        </div>
          <video src="/Bobo.mp4" class="ps-8" width="800" loop autoPlay />
      </div>
    </>
  );
}

// https://tailwindcss.com/docs/background-clip
