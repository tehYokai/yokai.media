export default function Header() {
  return (
    <>
    {/* <div class="bg-gradient-to-r from-indigo-500 p-4"></div> */}
      <nav class="shadow-2xl shadow-white p-4 bg-gradient-to-r from-slate-900 via-black to-black">
        <div class="flex justify-between shadow-lg shadow-white">
          <div class="pl-4 flex space-x-10">
            <a href="/" class="transition ease-in delay-150 text-slate-100 hover:text-indigo-300 text-lg font-bold hover:scale-125">妖怪</a>
            <a href="/blog" class="transition text-slate-300 hover:text-indigo-300 text-md hover:scale-110">Blog</a>
            <a href="/art" class="transition text-slate-300 hover:text-indigo-300 text-md hover:scale-110">Art</a>
            <a href="/dev" class="transition text-slate-300 hover:text-indigo-300 text-md hover:scale-110">Dev</a>
          </div>
        </div>
      </nav>
    </>
  )
}
// https://tailwindcss.com/docs/gradient-color-stops