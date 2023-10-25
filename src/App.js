const App = () => {
  const userData = {
    profilePhoto:
      "https://api.dicebear.com/6.x/adventurer/svg?seed=vmey&mouth=variant16&backgroundColor=b6e3f4",
    name: "MUKHLIS ADHE PURWANTO",
    position: "Front-end Engineer",
    aboutMe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend mi vel vulputate placerat. Duis tellus dui, hendrerit nec gravida ac, tincidunt ac mauris. Vivamus ut augue quis nisl egestas semper et in orci. Praesent at quam sed quam rhoncus lobortis sit amet sit amet leo. Nunc dapibus egestas porta. Donec eu diam at orci rutrum ultrices at at mauris. Donec id turpis vitae metus volutpat consequat.",
    works: [
      {
        place: "Wiratek",
        position: "Senior Front-end Engineer",
        startAt: "2021",
        endAt: "present",
        description:
          "At Wiratek, I took part in web development using frameworks, determining and presenting the data requirements needed by users, and determining the best flow for users to use.",
      },
      {
        place: "Samudera Biru",
        position: "Junior Front-end Engineer",
        startAt: "2020",
        endAt: "2021",
        description:
          "At Sabiru, I took part in web development using frameworks, determining and presenting the data requirements needed by users, and determining the best flow for users to use.",
      },
    ],
    educations: [
      {
        institutionName: "Institut Teknologi Telkom Purwokerto",
        studyProgram: "Bachelor of Informatics",
        startAt: "2016",
        endAt: "2023",
        gpa: 3.45,
      },
    ],
    projects: [
      {
        projectName: "Dataflow",
        startAt: "2023",
        description:
          "This project was carried out with a team, this is an interactive data processing service product using diagrams that display the processing flow of a statistical process",
      },
      {
        projectName: "FEEnemies",
        startAt: "2023",
        description:
          "This project was done by myself and is open source, this project is a platform API service for testing endpoints that have been created by Backend",
      },
      {
        projectName: "ReEngine",
        startAt: "2022",
        description:
          "This project was done by myself and is open source, this project is a Project Generator service with NextJS, it is hoped that users can create projects just by filling in the form data required by the system",
      },
    ],
    contact: [
      {
        platform: "Github",
        username: "adhemukhlis",
        url: "https://github.com/adhemukhlis",
      },
      {
        platform: "Instagram",
        username: "mukhlisadhe",
        url: "https://www.instagram.com/mukhlisadhe",
      },
    ],
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          alt="profile"
          style={{
            width: "10rem",
            height: "10rem",
            borderRadius: "50%",
          }}
          src={userData.profilePhoto}
        />
        <h2 style={{ marginBottom: "0.2rem" }}>{userData.name}</h2>
        <small>{userData.position}</small>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#333333",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
            minHeight: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{ color: "#fafafa" }}>About Me</h2>
          <p
            style={{
              color: "#fafafa",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            {userData.aboutMe}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
            minHeight: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2>Work</h2>
          <div style={{ width: "100%" }}>
            <ul>
              {(userData.works || []).map((item, index) => (
                <li key={index}>
                  <h2>{item.place}</h2>
                  <b>{`${item.position} (${item.startAt} - ${item.endAt})`}</b>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#333333",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
            minHeight: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{ color: "#fafafa" }}>Education</h2>
          <div style={{ width: "100%" }}>
            <ul style={{ color: "#fafafa" }}>
              {(userData.educations || []).map((item, index) => (
                <li key={index}>
                  <h2>{item.institutionName}</h2>
                  <b>{`${item.studyProgram} (${item.startAt} - ${item.endAt})`}</b>
                  <p>{`GPA ${item.gpa}/4`}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
            minHeight: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2>Projects</h2>
          <div style={{ width: "100%" }}>
            <ul>
              {(userData.projects || []).map((item, index) => (
                <li key={index}>
                  <h2>{item.projectName}</h2>
                  <b>{item.startAt}</b>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#333333",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
            minHeight: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{ color: "#fafafa" }}>Contact</h2>
          <div style={{ width: "100%" }}>
            <ul style={{ color: "#fafafa" }}>
              {(userData.contact || []).map((item, index) => (
                <li index={index}>
                  <h2>
                    {`${item.platform} : `}
                    <a href={item.url} style={{ color: "#fafafa" }}>
                      {item.username}
                    </a>
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "10vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#1a1a1a",
        }}
      >
        Created by {userData.name}
      </div>
    </div>
  );
};
export default App;
