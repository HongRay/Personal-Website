
  const RnSFSDescription1 = 'Developed a full-stack dashboard to monitor and track legacy mobile network testing software. ' +
        'Implemented a scalable microservices architecture and advised on software improvements to enhance system performance and maintainability.'
  
  const RnSFSDescription2 = 'During my internship at Rohde & Schwarz, I worked with three other interns to develop a full-stack dashboard for monitoring and tracking the status, ' +
        'progress, and activity of the company’s legacy mobile network testing software. \n\n We designed and implemented a microservices architecture using .NET to improve system scalability ' +
        'and responsiveness, and built robust backend and frontend components using C#, gRPC, React.js, and TypeScript. \n\n Drawing on both our academic knowledge and independent research, ' + 
        'we provided architectural recommendations to our supervisor that helped enhance system maintainability and overall performance.'
  
  const AyzerDescription = 'During my time at the startup, I developed a real-time imaging software using C# in Visual Studio to detect and visualise mattress pressure, ' +
        'enhancing accuracy by integrating C++ microprocessor coding. \n\n I collaborated closely with a mechanical engineer to align the software with sensor hardware, ' +
        'contributing to both the hardware-software integration and overall system functionality. \n\n Beyond technical implementation, I actively participated in product brainstorming, ' +
        'research, and design discussions, supporting the startup’s early-stage development process.'
  
  const PhillipDescription ='During my internship, I developed a full-stack dashboard to automate the detection of potential money laundering activities, significantly improving the' +
        ' efficiency of internal finance operations. \n\n I was responsible for the entire development process, from designing the system architecture to selecting the appropriate tech stack.' +
        ' The frontend was built using React with the Vite.js framework, while the backend was developed using Python’s FastAPI. I integrated Jaspersoft APIs to retrieve data from internal servers' + 
        ' and used Pandas for efficient data processing to ensure responsive filtering and minimal latency. \n\n I also implemented unit tests to verify the functionality and reliability of each component.' + 
        ' Throughout the project, I collaborated with both the finance and data teams to gather requirements and align technical solutions with business needs, demonstrating strong' +
        ' cross-functional communication and ownership.'

  export const experiences = [
    {
      id: '4',
      title: 'Software Development Intern',
      company: 'Phillip Capital Management (S) Ltd',
      duration: 'May 2025 - Ongoing',
      description: 'Currently developing a full-stack transaction monitoring dashboard designed to detect potential money laundering activities by analysing financial data, applying configurable parameters, and flagging suspicious transactions for review.',
      logo: '/PhillipCapital-Logo.jpg',
      skills: ['Python', 'Vite.js', 'Pandas', 'Excel', 'TypeScript', 'FastAPI', 'NumPy', 'RESTful API', 'React.js']
    },
    {
      id: '3',
      title: 'Full-Stack Engineering Intern',
      company: 'Rohde & Schwarz Pte Ltd',
      duration: 'May 2024 - August 2024',
      description: RnSFSDescription1,
      logo: '/RnS-Logo.jpg',
      skills: ['.NET Framework', 'C#', 'ZMQ', 'TypeScript', 'gRPC', 'Vite.js', 'RESTful API', 'React.js']
    },
    {
      id: '2',
      title: 'Backend Engineering Intern',
      company: 'Rohde & Schwarz Pte Ltd',
      duration: 'December 2022 - January 2023',
      description: 'Developed and optimised Python scripts to automate file format conversion, reducing manual effort and ensuring compliance with company standards through thorough testing.',
      logo: '/RnS-Logo.jpg',
      skills: ['Java', 'JSON', 'Python', 'XML', 'HTML']
    },
    {
      id: '1',
      title: 'Software Engineering Intern',
      company: 'AyzerSense Technology Pte Ltd',
      duration: 'September 2018 - February 2019',
      description: 'Developed real-time imaging software to detect mattress pressure and integrated it with sensor hardware microprocessor. Collaborated on hardware development and contributed to product design and research in a startup environment.',
      logo: '/AyzerSense-Logo.jpg',
      skills: ['C#', 'Visual Studio', 'C++', 'Microcontroller']
    }
  ];

  export const experiencesDetails = [
    {
      id: '4',
      title: 'Phillip Capital Management (S) Ltd',
      company: 'Rohde & Schwarz Pte Ltd',
      duration: 'May 2025 - Ongoing',
      location: 'Singapore',
      description: PhillipDescription,
      logo: '/PhillipCapital-Logo.jpg',
      skills: ['Python', 'Vite.js', 'Pandas', 'Excel', 'TypeScript', 'FastAPI', 'NumPy', 'RESTful API', 'React.js'],
      achievements: [
        'Designed and developed a full-stack dashboard to automate money laundering detection, improving operational efficiency across finance teams.',
        'Built the frontend using React with the Vite.js framework and implemented the backend with FastAPI, integrating Jaspersoft APIs for secure data access.',
        'Engineered scalable data processing pipelines using Pandas to optimise performance and ensure responsive, real-time filtering based on user-defined parameters.',
        'Led end-to-end architecture planning, tech stack selection, and testing strategy, including writing unit tests to ensure code quality and maintainability.'
      ],
      projects: [
        {
          name: 'Transaction Monitoring Dashboard',
          description: 'A transaction monitoring dashboard designed to detect potential money laundering activities by analysing financial data, applying configurable parameters, and flagging suspicious transactions for review.',
          technologies: ['Python', 'Vite.js', 'Pandas', 'Excel', 'TypeScript', 'FastAPI', 'NumPy', 'RESTful API', 'React.js']
        },
      ]
    },
    {
      id: '3',
      title: 'Full-Stack Engineering Intern',
      company: 'Rohde & Schwarz Pte Ltd',
      duration: 'May 2024 - August 2024',
      location: 'Singapore',
      description: RnSFSDescription2,
      logo: '/RnS-Logo.jpg',
      skills: ['.NET Framework', 'C#', 'ZMQ', 'TypeScript', 'gRPC', 'Vite.js', 'React.js'],
      achievements: [
        'Developed a full-stack dashboard to monitor and track the status, progress, and activity of the company’s legacy software for mobile network testing',
        'Designed and implemented a microservices architecture using .NET frameworks to enhance system scalability and performance',
        'Utilised C#, gRPC, React.js, and TypeScript to build robust backend and frontend solutions',
        'Advised on software architecture improvements to optimise system performance and maintainability'
      ],
      projects: [
        {
          name: 'Mobile Network Testing Dashboard',
          description: 'Full-stack dashboard with a microservices architecture to monitor legacy mobile network testing systems and improve performance and scalability.',
          technologies: ['C#', '.NET', 'gRPC', 'React.js', 'TypeScript']
        },
      ]
    },
    {
      id: '2',
      title: 'Backend Engineering Intern',
      company: 'Rohde & Schwarz Pte Ltd',
      duration: 'December 2022 - January 2023',
      location: 'Singapore',
      description: 'During my internship, I developed Python scripts to automate file format conversions based on company specifications, significantly improving operational efficiency. ' + 
              'I streamlined the file processing workflow to reduce manual effort and processing time, while ensuring accuracy and compliance through testing and validation.',
      logo: '/RnS-Logo.jpg',
      skills: ['Java', 'JSON', 'Python', 'XML', 'HTML', 'Software Infrastructure'],
      achievements: [
        'Developed Python scripts to automate file format conversion based on company specifications, improving operational efficiency',
        'Optimised and streamlined the file processing workflow, reducing manual effort and processing time',
        'Ensured accuracy and compliance with company standards through rigorous testing and validation',
      ],
      projects: [
        {
          name: 'File Format Automation Tool',
          description: 'Developed Python scripts to automate file format conversion, streamlining workflows and ensuring compliance with company standards through testing and validation.',
          technologies: ['JSON', 'Python', 'XML', 'HTML']
        },
      ]
    },
    {
      id: '1',
      title: 'Software Engineering Intern',
      company: 'AyzerSense Technology Pte Ltd',
      duration: 'September 2018 - February 2019',
      location: 'Singapore',
      description: AyzerDescription,
      logo: '/AyzerSense-Logo.jpg',
      skills: ['C#', 'Visual Studio', 'C++', 'Microcontroller'],
      achievements: [
        'Developed an imaging software using C# in Visual Studio to detect and visualize mattress pressure in real-time',
        'Implemented basic C++ microprocessor coding to enhance pressure detection accuracy',
        'Assisted in hardware development, collaborating with a mechanical engineer to integrate software with sensor technology',
        'Contributed to product brainstorming, research, and design as part of the startup’s development process'
      ],
      projects: [
        {
          name: 'Mattress Pressure Imaging System',
          description: 'Real-time imaging system to detect and visualise mattress pressure, integrated with microcontroller sensors and developed as part of a startup’s product design process.',
          technologies: ['C#', 'Visual Studio', 'C++', 'Microcontroller']
        }
      ]
    }
  ];