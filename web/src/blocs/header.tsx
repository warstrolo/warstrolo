export default function Header() {
  return (
    <header className="text-gray-100 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-200" href="#stats">My Stats</a>
      <a className="mr-5 hover:text-gray-200" href="#skils">My Skils</a>
      <a className="mr-5 hover:text-gray-200" href="#tools">Tools I use </a>
      <a className="mr-5 hover:text-gray-200" href="#projects">Projects</a>
    </nav>
  </div>
</header>
  )
}