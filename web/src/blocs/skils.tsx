import { useEffect, useState } from "react";
import Stars from "../components/stars";

export default function Skils() {
  const numProject = 9;
  const numContrib = 5400;
  const numHours = 12;

  return (
    <div className="flex justify-center pt-10 lg:p-10 min-h-screen">
      <div className="bg-base-200 shadow-2xl rounded-md w-full lg:w-2/3 text-center">
        <h1 id="stats" className="text-white text-3xl">
         <a href="#stats" >{"My stats"}</a> 
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Project</div>
              <div className="stat-value text-primary">
                <IncrementCounter
                  duration={1000}
                  end={numProject}
                  end_label={""}
                  label={""}
                />
              </div>
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
              <div className="stat-value text-secondary">
                <IncrementCounter
                  duration={1000}
                  end={numContrib}
                  end_label={""}
                  label={""}
                />
              </div>
              <div className="stat-desc">Number of issue or commit</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img
                      src="https://avatars.githubusercontent.com/u/58334832?v=4"
                      alt="My Avatar"
                    />
                  </div>
                </div>
              </div>
              <div className="stat-value">
                {" "}
                <IncrementCounter
                  duration={1000}
                  end={numHours}
                  end_label={"+"}
                  label={"h"}
                />
              </div>
              <div className="stat-title">Work day</div>
              <div className="stat-desc text-green-400">
                Avaliable (8h - 22h)
              </div>
            </div>
          </div>
        </div>
        <div className="divider">AND</div>
        <h1 id="skils" className="text-white text-3xl">
          <a href="#skils">{"Global Skils"}</a>
        </h1>
        <div className="flex justify-center m-5">
          <div className="bg-base-100 w-full lg:w-2/3 rounded-xl shadow">
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">Backend</span>
              <AnnimatedProgress
                max={100}
                end={90}
                duration={1000}
                className={"progress progress-success"}
              />
            </div>
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">Cloud</span>
              <AnnimatedProgress
                max={100}
                end={85}
                duration={1000}
                className={"progress progress-primary"}
              />
            </div>
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">
                Frontend
              </span>
              <AnnimatedProgress
                max={100}
                end={80}
                duration={1000}
                className={"progress progress-secondary"}
              />
            </div>
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">
                Sysadmin
              </span>
              <AnnimatedProgress
                max={100}
                end={75}
                duration={1000}
                className={"progress progress-accent"}
              />
            </div>
            <div className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-sm">
                Cloud Architect
              </span>
              <AnnimatedProgress
                max={100}
                end={70}
                duration={1000}
                className={"progress progress-warning"}
              />
            </div>
          </div>
        </div>
        <div className="divider">AND</div>
        <h1 id="tools" className="text-white text-3xl">
          <a href="#tools"> {"Things I use"}</a>
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
                    usage_project={["Galaxiat", "TheExtraApp"]}
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
                    usage_project={["Galaxiat", "MonHangar"]}
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
                    img_src="/logo/github.png"
                    name="Github"
                    type="Tools"
                    usage_type="production"
                    usage_project={["All"]}
                    rating={5}
                    urls={[
                      {
                        link: "https://github.com/",
                        source: "website",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/react.png"
                    name="React"
                    type="Framework"
                    usage_type="production"
                    usage_project={["Galaxiat", "Join4Join"]}
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
                    usage_project={["Galaxiat", "TheExtraApp"]}
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
                    usage_project={["MonHangar"]}
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
                    usage_type="developement"
                    usage_project={["Non Released Project"]}
                    rating={4}
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
                    rating={4}
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
                  <RowComponent
                    img_src="/logo/cassandra.webp"
                    name="Apache Cassandra"
                    type="Database"
                    usage_type="production"
                    usage_project={["MonHangar", "Galaxiat"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://cassandra.apache.org",
                        source: "website",
                      },
                      {
                        link: "https://github.com/apache/cassandra",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/kafka.png"
                    name="Apache Kafka"
                    type="Database"
                    usage_type="production"
                    usage_project={["Galaxiat", "TheExtraApp"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://kafka.apache.org/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/apache/kafka",
                        source: "github",
                      },
                    ]}
                  />

                  <RowComponent
                    img_src="/logo/etcd.png"
                    name="ETCD"
                    type="Database"
                    usage_type="production"
                    usage_project={["TheExtraApp", "Galaxiat"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://etcd.io/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/etcd-io",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/tailwindcss.png"
                    name="Tailwindcss"
                    type="Framework"
                    usage_type="production"
                    usage_project={["Join4Join", "Galaxiat"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://tailwindcss.com/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/tailwindlabs",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/unknow.png"
                    name="React Snap"
                    type="Tools"
                    usage_type="production"
                    usage_project={["Join4Join", "Galaxiat"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://github.com/stereobooster/react-snap",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/kubernetes.png"
                    name="Kubernetes"
                    type="Software"
                    usage_type="production"
                    usage_project={["Galaxiat", "Join4Join"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://kubernetes.io/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/kubernetes/kubernetes",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/open-stack.png"
                    name="Open-Stack"
                    type="Software"
                    usage_type="production"
                    usage_project={["Join4Join", "Galaxiat"]}
                    rating={3}
                    urls={[
                      {
                        link: "https://www.openstack.org/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/openstack",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/minio.png"
                    name="MinIO"
                    type="Object Storage"
                    usage_type="production"
                    usage_project={["TheExtraApp", "Galaxiat"]}
                    rating={3}
                    urls={[
                      {
                        link: "https://min.io/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/minio",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/rancher.png"
                    name="Rancher"
                    type="Software"
                    usage_type="production"
                    usage_project={["Galaxiat", "Join4Join"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://rancher.com/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/rancher",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/longhorn.png"
                    name="LongHorn"
                    type="Object Storage"
                    usage_type="production"
                    usage_project={["Join4Join"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://longhorn.io/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/longhorn",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/kubesphere.png"
                    name="KubeSphere"
                    type="Software"
                    usage_type="developement"
                    usage_project={["Non Released Project"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://kubesphere.io/",
                        source: "website",
                      },
                      {
                        link: "https://github.com/kubesphere",
                        source: "github",
                      },
                    ]}
                  />
                  <RowComponent
                    img_src="/logo/rke.png"
                    name="RKE"
                    type="Software"
                    usage_type="production"
                    usage_project={["Galaxiat", "Join4Join"]}
                    rating={4}
                    urls={[
                      {
                        link: "https://rancher.com/products/rke",
                        source: "website",
                      },
                      {
                        link: "https://github.com/rancher/rke2",
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
          <a href="#projects"> {"My Project (only those I can share)"}</a>
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
                    job="Founder & Core Maintainer"
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
  type:
    | "Lang"
    | "Framework"
    | "Object Storage"
    | "Block Storage"
    | "Lib"
    | "Software"
    | "Database"
    | "Cache"
    | "Tools"
    | "SaaS";
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
        {props.usage_type === "production" ? (
          <span className="text-green-400">{props.usage_type}</span>
        ) : (
          <span className="text-yellow-400">{props.usage_type}</span>
        )}
        <br />

        {props.usage_project.map((project, key) => {
          return (
            <span key={key} className="badge badge-ghost badge-sm">
              {project}
            </span>
          );
        })}
      </td>
      <td>
        <Stars rate={props.rating} />
      </td>
      <th>
        {props.urls.map((url) => (
          <a
            href={url.link}
            target={"_blank"}
            rel="noreferrer"
            className="btn btn-ghost btn-xs"
          >
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
  owned: boolean;
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
      <td>
        {props.job}
        <br />

        {props.working_atm ? (
          <span className="badge badge-primary badge-sm">Working ATM</span>
        ) : (
          <span className="badge badge-ghost badge-sm">
            No longer working here
          </span>
        )}
      </td>
      <td>
        {props.owned ? (
          <h3 className="text-green-400">Yes</h3>
        ) : (
          <h3 className="text-red-400">No</h3>
        )}
      </td>
      <th>
        {props.urls.map((url) => (
          <a
            href={url.link}
            target={"_blank"}
            rel="noreferrer"
            className="btn btn-ghost btn-xs"
          >
            {url.source}
          </a>
        ))}
      </th>
    </tr>
  );
}

type IncrementCounterProps = {
  end: number;
  duration: number;
  end_label: string;
  label: string;
};
function IncrementCounter(props: IncrementCounterProps) {
  const [count, setcount] = useState("0");
  useEffect(() => {
    let start = 0;
    const end_string = props.end.toString();
    const end_string_m3 = end_string.substring(3);
    const end_string_l3 = end_string.substring(0, 3);
    if (end_string_l3 == String(start)) return;
    let increment_time = props.duration / props.end;
    const parse_num = (num: number): string => {
      if (num > 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
      } else if (num > 1000) {
        return `${(num / 1000).toFixed(1)}K`;
      } else {
        return `${num}`;
      }
    };
    let timer = setInterval(() => {
      start += 1;
      setcount(parse_num(parseInt(String(start) + end_string_m3)));
      if (String(start) == end_string_l3) clearInterval(timer);
    }, increment_time);
  }, []);
  return (
    <>{`${count}${props.label}${
      count == String(props.end) ? `${props.end_label}` : ""
    }`}</>
  );
}
type ProgressProps = {
  end: number;
  max: number;
  duration: number;
  className: string;
};
function AnnimatedProgress(props: ProgressProps) {
  const [count, setcount] = useState("0");
  useEffect(() => {
    let start = 0;
    const end_string = props.end.toString();
    const end_string_m3 = end_string.substring(3);
    const end_string_l3 = end_string.substring(0, 3);
    if (end_string_l3 == String(start)) return;
    let increment_time = props.duration / props.end;
    let timer = setInterval(() => {
      start += 1;
      setcount(String(start) + end_string_m3);
      if (String(start) == end_string_l3) clearInterval(timer);
    }, increment_time);
  }, []);
  return <progress max={props.max} value={count} className={props.className} />;
}
