import Stars from "../components/stars";

export default function Skils() {
  return (
    <div className="flex justify-center p-10 min-h-screen">
      <div className="bg-base-200 shadow-2xl rounded-md w-2/3 text-center">
        <h1 id="stats" className="text-white text-3xl">
          {"My stats"}
        </h1>
        <div className="flex justify-center m-5">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full lg:w-2/3 ">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Project</div>
              <div className="stat-value text-primary">9</div>
              <div className="stat-desc">Project I'm working on right now</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Year Contribution</div>
              <div className="stat-value text-secondary">~5.4k</div>
              <div className="stat-desc">Number of issue or commit</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/58334832?v=4" />
                  </div>
                </div>
              </div>
              <div className="stat-value">12h+</div>
              <div className="stat-title">Work day</div>
              <div className="stat-desc text-green-400">
                Avaliable (8h - 22h)
              </div>
            </div>
          </div>
        </div>
        <div className="divider">AND</div>
        <h1 id="skils" className="text-white text-3xl">
          {"Global Skils"}
        </h1>
        <div className="flex justify-center m-5">
          <div className="bg-base-100 w-full lg:w-2/3 rounded-xl shadow">
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">Backend</span>
              <progress
                max="100"
                value="90"
                className="progress progress-success"
              />
            </div>
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">Cloud</span>
              <progress
                max="100"
                value="85"
                className="progress progress-primary"
              />
            </div>
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">
                Frontend
              </span>
              <progress
                max="100"
                value="80"
                className="progress progress-secondary"
              />
            </div>
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">
                Sysadmin
              </span>
              <progress
                max="100"
                value="75"
                className="progress progress-accent"
              />
            </div>
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">
                Cloud Architect
              </span>
              <progress
                max="100"
                value="70"
                className="progress progress-warning"
              />
            </div>
          </div>
        </div>
        <div className="divider">AND</div>
        <h1 id="tools" className="text-white text-3xl">
          {"Things I use"}
        </h1>
        <h2 className="text-white text-2xl">
          {"Not all is in the list, things will be added 😊"}
        </h2>
        <div className="flex justify-center m-5">
          <div className="bg-base-100 w-full lg:w-2/3 rounded-xl shadow">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Usage</th>
                    <th>Level</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  <RowComponent
                    img_src="/logo/golang.png"
                    name="Golang"
                    type="Lang"
                    usage_type="production"
                    usage_project={["Galaxiat"]}
                    rating={5}
                    urls={[
                      {
                        link: "https://go.dev/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/golang",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/typescript.png"
                    name="TypeScript"
                    type="Lang"
                    usage_type="production"
                    usage_project={["Galaxiat", "Join4Join"]}
                    rating={5}
                    urls={[
                      {
                        link: "https://www.typescriptlang.org/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/microsoft/TypeScript/",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/elixir.png"
                    name="Elixir"
                    type="Lang"
                    usage_type="production"
                    usage_project={["Galaxiat"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://elixir-lang.org/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/elixir-lang",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/rust.png"
                    name="Rust"
                    type="Lang"
                    usage_type="production"
                    usage_project={["Galaxiat"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://www.rust-lang.org/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/rust-lang",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/react.png"
                    name="React"
                    type="Framework"
                    usage_type="production"
                    usage_project={["Galaxiat"]}
                    rating={5}
                    urls={[
                      {
                        link: "https://reactjs.org",
                        source: "website",
                      },
                      {
                        link: "https://github.com/facebook/react/",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/react_native.png"
                    name="React Native"
                    type="Framework"
                    usage_type="production"
                    usage_project={["Galaxiat"]}
                    rating={5}
                    urls={[
                      {
                        link: "https://reactnative.dev/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/facebook/react-native",
                        source: "github",
                      },
                    ]}
                  />

                  <RowComponent
                    img_src="/logo/expressjs.png"
                    name="Express.JS"
                    type="Framework"
                    usage_type="production"
                    usage_project={["Galaxiat"]}
                    rating={5}
                    urls={[
                      {
                        link: "https://expressjs.com/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/expressjs/express",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/tauri.png"
                    name="Tauri"
                    type="Framework"
                    usage_type="production"
                    usage_project={["Galaxiat"]}
                    rating={5}
                    urls={[
                      {
                        link: "https://tauri.studio/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/tauri-apps/tauri",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/electronjs.png"
                    name="Electron.JS"
                    type="Framework"
                    usage_type="production"
                    usage_project={["Galaxiat"]}
                    rating={5}
                    urls={[
                      {
                        link: "https://www.electronjs.org/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/electron",
                        source: "github",
                      },
                    ]}
                  />
                </tbody>

                <tfoot>
                  <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Usage</th>
                    <th>Level</th>
                    <th>Link</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div className="divider">AND</div>
        <h1 id="projects" className="text-white text-3xl">
          {"My Project (only those I can share)"}
        </h1>
        <div className="flex justify-center m-5">
          <div className="bg-base-100 w-full lg:w-2/3 rounded-xl shadow">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Owned</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  <ProjectRowComponent
                    img_src="/logo/galaxiat.png"
                    name="Galaxiat"
                    type="Work In Progress"
                    job="Founder"
                    working_atm={true}
                    owned={true}
                    urls={[
                      {
                        link: "https://galaxiatapp.com",
                        source: "website",
                      },
                      {
                        link: "https://github.com/galaxiat",
                        source: "github",
                      },
                    ]}
                  />
                  <ProjectRowComponent
                    img_src="/logo/theextraapp.png"
                    name="Extra"
                    type="Work In Progress"
                    job="Developer"
                    working_atm={true}
                    owned={false}
                    urls={[
                      {
                        link: "https://www.theextraapp.com/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/theextraapp",
                        source: "github",
                      },
                    ]}
                  />
                  <ProjectRowComponent
                    img_src="/logo/redstart.png"
                    name="RedStart"
                    type="Launched"
                    job="Tech Lead"
                    working_atm={false}
                    owned={false}
                    urls={[
                      {
                        link: "https://redstart.fr",
                        source: "website",
                      },
                    ]}
                  />
                  <ProjectRowComponent
                    img_src="/logo/monhangar.png"
                    name="MonHangar"
                    type="Launched"
                    job="Tech Lead"
                    working_atm={false}
                    owned={false}
                    urls={[
                      {
                        link: "https://monhangar.fr",
                        source: "website",
                      },
                    ]}
                  />
                  <ProjectRowComponent
                    img_src="/logo/join4join.png"
                    name="Join4Join"
                    type="Launched"
                    job="Founder & Core Matainer"
                    working_atm={false}
                    owned={true}
                    urls={[
                      {
                        link: "https://join4join.xyz",
                        source: "website",
                      },
                      {
                        link: "https://github.com/join4join",
                        source: "github",
                      },
                    ]}
                  />
                  <ProjectRowComponent
                    img_src="/logo/bot-hosting.png"
                    name="Bot-Hosting"
                    type="Launched"
                    job="Maintainer"
                    working_atm={false}
                    owned={false}
                    urls={[
                      {
                        link: "https://bot-hosting.net",
                        source: "website",
                      },
                      {
                        link: "https://github.com/bot-hosting-net",
                        source: "github",
                      },
                    ]}
                  />
                </tbody>

                <tfoot>
                  <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Status</th>
                    <th>Link</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type row_propstype = {
  img_src: string;
  name: string;
  type: "Lang" | "Framework" | "Lib" | "Software";
  usage_type: "developement" | "production";
  usage_project: string[];
  rating: number;
  urls: {
    link: string;
    source: "github" | "website";
  }[];
};
function RowComponent(props: row_propstype) {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={props.img_src} alt="icon" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{props.name}</div>
            <div className="text-sm opacity-50">{props.type}</div>
          </div>
        </div>
      </td>
      <td>
        {props.usage_type}
        <br />
        {props.usage_project.map((project) => {
          <span className="badge badge-ghost badge-sm">{project}</span>;
        })}
      </td>
      <td>
        <Stars rate={props.rating} />
      </td>
      <th>
        {props.urls.map((url) => (
          <a href={url.link} target={"_blank"} className="btn btn-ghost btn-xs">
            {url.source}
          </a>
        ))}
      </th>
    </tr>
  );
}

type project_row_propstype = {
  img_src: string;
  name: string;
  type: "Launched" | "Stale" | "Dead" | "Work In Progress";
  job: string;
  working_atm: boolean;
  owned : boolean;
  urls: {
    link: string;
    source: "github" | "website";
  }[];
};
function ProjectRowComponent(props: project_row_propstype) {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={props.img_src} alt="icon" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{props.name}</div>
            <div className="text-sm opacity-50">{props.type}</div>
          </div>
        </div>
      </td>
      <td>{props.job}
      <br />

      {props.working_atm ? <span className="badge badge-primary badge-sm">Working ATM</span> : <span className="badge badge-ghost badge-sm">No longer working here</span>} 

      </td>
      <td>{props.owned ? <h3 className="text-green-400">Yes</h3> : <h3 className="text-red-400">No</h3>}</td>
      <th>
        {props.urls.map((url) => (
          <a href={url.link} target={"_blank"} className="btn btn-ghost btn-xs">
            {url.source}
          </a>
        ))}
      </th>
    </tr>
  );
}