export default function Hero() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋</h1>
          <p className="py-6">
          I'm Paul Millet, Full-Stack Developer and Tech Lead
          </p>
          <a className="btn btn-primary" href="#stats">See more</a>
          <a className="btn bg-blue-700 hover:bg-blue-800 text-white" target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/paul-millet/">Linkedin</a>
          <a className="btn bg-gray-50 hover:bg-gray-200 text-black" target={"_blank"} rel="noreferrer" href="https://github.com/warstrolo">Github</a>
        </div>
      </div>
    </div>
  );
}
