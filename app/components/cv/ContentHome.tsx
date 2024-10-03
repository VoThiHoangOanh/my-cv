import * as React from 'react';

export default function ContentHome() {
  return (
    <div>
      <h2 className="mt-8 text-3xl font-bold">Hey, I'm Oanh </h2>
      <p className="mt-4 text-lg">
        I'm a Full Stack Developer. I am 22 and learning TypeScript, Next.js, React.js, Node.js,...
        Now, I have a passion for learning UI/UX.
      </p>
      <p className="mt-4 text-lg">
        I started learning web development in 2020. It was a big challenge because it was just one
        of my hobbies. I studied in school and taught myself on YouTube. One of my favorite YouTube
        channels is The Net Ninja. I learned a lot of web development skills from him.
      </p>
      <p className="mt-4 text-lg">
        I love using Next.js to create a website. Then use GitHub to host my codebase.
      </p>

      <h2 className="mb-6 mt-8 text-2xl font-bold">About this site</h2>
      <ul className="mb-10 list-disc space-y-3 pl-8 opacity-70 marker:text-red-500">
        <li>
          <b>Framework:</b> Next.js
        </li>
        <li>
          <b>Styling:</b> Tailwindcss
        </li>
        <li>
          <b>Deployment:</b> Vercel
        </li>
      </ul>

      <h2 className="mb-6 text-2xl font-bold">Social links</h2>
      <ul className="mb-10 list-disc space-y-3 pl-8 text-red-700 opacity-70 marker:text-red-500">
        <li>
          <b>
            <a href="https://github.com/VoThiHoangOanh" target="_blank">
              GitHub
            </a>
          </b>
        </li>
        <li>
          <b>
            <a href="https://www.facebook.com/hoangoanh.tueanh" target="_blank">
              Facebook
            </a>
          </b>
        </li>
        <li>
          <b>LinkedIn</b>
        </li>
      </ul>
    </div>
  );
}
