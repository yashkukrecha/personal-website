import "../Styles/Projects.css";
import "../Styles/IndividualProject.css";
import "../Styles/App.css";
import IndividualProject from "../Components/IndividualProject";

export default function Projects() {
  const projects = [
    {
      title: "Stock Trading Platform",
      description:
        "A multithreaded, socket-based stock trading platform that models real-time stock updates, order management, and client-server communication.",
      stack: [
        "C++",
        "Multithreading (Pthread)",
        "Sockets",
        "TCP/IP",
        "Mutex",
        "Google Test",
        "CMake",
        "Valgrind",
      ]
    },
    {
      title: "Network Simulator",
      description:
        "An educational simulator that that mimics packet transportation, routing, and other network behaviors, designed to help visualize and test network configurations and behaviors.",
      stack: [
        "Rust",
        "Cargo",
        "Egui",
        "Multithreading",
        "TCP/IP",
        "Synchronization",
        "Mutexes",
      ]
    },
    {
      title: "RustedKV",
      description:
        "RustedKV is a distributed key-value store built in Rust that ensures data replication, fault tolerance, and consistency across multiple nodes using the Raft consensus algorithm.",
      stack: [
        "Rust",
        "Cargo",
        "Multithreading",
        "Sockets",
        "TCP/IP",
        "Synchronization",
      ]
    },
    {
      title: "PINTOS",
      description:
        "PINTOS is an OS that manages concurrency with priority scheduling, system calls, virtual memory, page replacement mechanisms, a multilevel indexed file system, and synchronization.",
      stack: ["C", "Assembly", "Makefile", "GDB"]
    },
    {
      title: "HoopVision",
      description:
        "HoopVision simulates a 5-stage NBA draft using a K-Means algorithm and then provides predictive analysis of the chosen NBA players in the upcoming season using an ExtraTreesRegressor model!",
      stack: [
        "React",
        "Chart.js",
        "Flask",
        "SQLAlchemy",
        "Redis",
        "GCP",
        "Chart.js",
        "Python",
        "Scikit Learn",
        "Pandas",
        "Seaborn",
        "Matplotlib",
      ]
    },
    {
      title: "High Performance GEMM",
      description:
        "This high performance GEMM (General Matrix Multiplication) program is a C implementation of the GEMM algorithm that utilizes multithreading, SIMD, vectorization, and cache coherence to achieve high performance.",
      stack: ["C", "Multithreading (Pragma)", "Makefile", "GDB"]
    },
    {
      title: "BioDex",
      description:
        "With BioDex, step outside, snap photos of local wildlife, and instantly turn them into collectible cards that reveal each animal's unique traits, rarity, and ecological significance.",
      stack: [
        "React Native",
        "React Navigation",
        "Expo",
        "Svelte",
        "Flask",
        "Python",
        "GCP",
        "OpenAI API",
        "Google Maps API",
      ]
    },
    {
      title: "Motiv8",
      description:
        "Motiv8 is a dynamic gym motivation app created to celebrate users' exercise achievements by capturing moments through pictures and relaying it to friends.",
      stack: [
        "React Native",
        "React Navigation",
        "React Native Calendar",
        "Expo",
        "Node.js",
        "JavaScript",
        "GCP",
      ]
    },
    {
      title: "Seedling Volunteer Portal",
      description:
        "Seedling's volunteer portal streamlines the mentor volunteer hour logging process with reduced bugs, CSV downloadability and a sleek UI to enhance the user experience.",
      stack: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "AWS",
        "MySQL",
        "Firebase Authentication",
      ]
    },
    {
      title: "Personal Website",
      description:
        "The website you're looking at! Created a project portfolio website using React, combining powerful front-end interactivity and efficient content management.",
      stack: ["React.js", "JavaScript", "Chart.js"]
    },
    {
      title: "MediGuard",
      description:
        "MediGuard is a full-stack application built with a Streamlit frontend and machine learning backend to automate medical billing error detection down to 3 simple clicks!",
      stack: [
        "Streamlit",
        "Python",
        "TensorFlow",
        "Pandas",
        "NumPy",
        "Google Bard API",
      ]
    },
    {
      title: "Brain Tumor Classification",
      description:
        "The Brain Tumor Classifier utilizes a convolutional neural network to detect the presence of a tumor in a brain's MRI scan.",
      stack: ["Python", "TensorFlow", "Pandas", "NumPy"]
    },
  ];

  return (
    <div className="column-container" id="grey">
      <h2 className="titles">
        <a
          className="tags"
          href="https://github.com/yashkukrecha/"
          target="_blank"
          rel="noreferrer"
        >
          Personal Projects 🔗
        </a>
      </h2>
      <div className="row-container" id="projects">
        {projects.map((project, index) => (
          <div key={index} id="project-container" className="column-container">
            <IndividualProject project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
