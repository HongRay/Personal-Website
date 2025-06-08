
  const RnSFSDescription1 = 'Developed a full-stack dashboard to monitor and track legacy mobile network testing software.' +
        'Implemented a scalable microservices architecture and advised on software improvements to enhance system performance and maintainability.'
  
  const RnSFSDescription2 = 'During my internship at Rohde & Schwarz, I worked with three other interns to develop a full-stack dashboard for monitoring and tracking the status, ' +
        'progress, and activity of the company’s legacy mobile network testing software. We designed and implemented a microservices architecture using .NET to improve system scalability ' +
        'and responsiveness, and built robust backend and frontend components using C#, gRPC, React.js, and TypeScript. \n\n Drawing on both our academic knowledge and independent research, ' + 
        'we provided architectural recommendations to our supervisor that helped enhance system maintainability and overall performance.'

  export const experiences = [
    {
      id: '1',
      title: 'Full-Stack Engineering Intern',
      company: 'Rohde & Schwarz Pte Ltd',
      duration: 'May 2024 - August 2024',
      description: RnSFSDescription1,
      logo: '/RnS-Logo.jpg',
      skills: ['.NET Framework', 'C#', 'ZMQ', 'TypeScript', 'gRPC', 'Vite.js']
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
      id: '3',
      title: 'Software Engineering Intern',
      company: 'AyzerSense Technology Pte Ltd',
      duration: 'September 2023 - December 2023',
      description: 'Developed real-time imaging software to detect mattress pressure and integrated it with sensor hardware microprocessor. Collaborated on hardware development and contributed to product design and research in a startup environment.',
      logo: '/AyzerSense-Logo.jpg',
      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
    }
  ];

  export const experiencesDetails = [
    {
      id: '1',
      title: 'Full-Stack Engineering Intern',
      company: 'Rohde & Schwarz Pte Ltd',
      duration: 'May 2024 - August 2024',
      location: 'Singapore',
      description: RnSFSDescription2,
      logo: '/RnS-Logo.jpg',
      skills: ['.NET Framework', 'C#', 'ZMQ', 'TypeScript', 'gRPC', 'Vite.js'],
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
              'I streamlined the file processing workflow to reduce manual effort and processing time, while ensuring accuracy and compliance through rigorous testing and validation.',
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
          description: 'Full-stack e-commerce solution with payment integration and inventory management',
          technologies: ['Java', 'JSON', 'Python', 'XML', 'HTML']
        },
      ]
    },
    {
      id: '3',
      title: 'Frontend Developer',
      company: 'WebDev Agency',
      duration: 'September 2023 - December 2023',
      location: 'Remote',
      description: 'Created modern, responsive websites for various clients. Implemented interactive features and animations.',
      logo: '/public/placeholder.svg',
      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      achievements: [
        'Delivered 12+ client websites with 100% on-time completion rate',
        'Improved website performance scores by average of 60%',
        'Created reusable component library used across 10+ projects',
        'Achieved 98% client satisfaction rating'
      ],
      projects: [
        {
          name: 'Restaurant Booking System',
          description: 'Online reservation system with calendar integration and SMS notifications',
          technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Twilio API']
        },
        {
          name: 'Portfolio Showcase Platform',
          description: 'CMS-powered portfolio platform for creative professionals',
          technologies: ['Nuxt.js', 'Contentful', 'GSAP', 'Netlify']
        }
      ]
    }
  ];