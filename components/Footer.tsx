import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx"
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx"
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-instagram.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx"

export default function Footer() {
  return (
    <>
    <footer class="bg-neutral-200 text-center text-white dark:bg-neutral-600">
      <div class="container pt-6">
        <div class="mb-9 flex justify-center brightness-110 hover:brightness-200">
          <a class="mr-9 text-slate-300 hover:scale-125" href="https://github.com/tehyokai/">
          <IconBrandGithub class="w-9 h-9"/>
          </a>
          <a href="https://twitter.com/tehYokai" class="mr-9 text-slate-300 hover:text-blue-400 hover:scale-125">
            <IconBrandTwitter class="w-9 h-9" />
          </a>
          <a href="https://www.instagram.com/tehyokai/" class="mr-9 text-neutral-800 hover:text-red-500 hover:scale-125">
            <IconBrandInstagram class="w-9 h-9" />
          </a>
          <a href="mailto:yokai@yokai.media" class="mr-9 text-neutral-800 hover:text-blue-500 hover:scale-125">
            <IconMail class="w-9 h-9" />
          </a>
        </div>
        <div class="container pr-10">
          <p class="text-sm">Mail or dm me on any of the socials</p>
          {/* <p class="text-sm">yokai@yokai.media</p> */}
        </div>
      </div>
    </footer>
  </>
  )
}
