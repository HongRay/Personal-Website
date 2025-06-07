const OrbitalDescription = 'An API Gateway that uses CloudWeGo frameworks that accepts HTTP requests, Utilising Generic-Calls to translate requests into Thrift binary format requests.' +
        ' The API Gateway will forward the translated requests to one of the backend RPC servers obtained from a registry centre.'

const HeadCountDescription = 'This project is a web-based application for managing and monitoring occupancy in real-time using machine learning.' +
        'It provides real-time occupancy data, live video feed monitoring, and access control. The system includes user authentication and settings customization.'

const IexDescription = 'In collaboration with Sungift and Active Health, focused on promoting local farming and healthy living through a farm-to-fork programme.' + 
        'We designed workshops where residents of Sembawang could tour a rooftop farm, harvest vegetables, and cook them immediately at a nearby kitchen.'

export const projectDetails = [
    {
      title: 'NUS-TikTok Orbital Project',
      description: OrbitalDescription,
      technologies: ['Go', 'Python', 'CloudWeGo Frameworks', 'Postman', 'ApacheThrift', 'etcd', 'JSON'],
      image: '/public/Orbital.gif',
      codeLink: 'https://github.com/HongRay/api-gateway',
    },
    {
      title: 'HeadCount',
      description: HeadCountDescription,
      technologies: ['TypeScript', 'Next.js', 'Python', 'OpenCV', 'Tailwind CSS', ],
      image: '/public/SunHack.mp4',
      codeLink: 'https://github.com/HongRay/HeadCount',
    },
    {
      title: 'Impact Immersion Project',
      description: IexDescription,
      technologies: ['Community Service', 'Project & Stackholder Management', 'Business Application'],
      image: '/public/IEX.jpg',
      codeLink: 'popup',
      hasDetailPage: true,
      id: 'iex',
      achievements: [
      'Organized a successful farm-to-fork programme with community involvement.',
      'Promoted sustainability and healthy living through interactive workshops.'
      ]
    }
  ];

export const projectPopUpDetails =[
  {
    id : 'iex',
    title: 'Impact Immersion Project',
    description: IexDescription,
    technologies: ['Community Service', 'Project & Stackholder Management', 'Business Application'],
    image: '/public/IEX.jpg',
    codeLink: 'popup',
    hasDetailPage: true,
    achievements: [
    'Organized a successful farm-to-fork programme with community involvement.',
    'Promoted sustainability and healthy living throu'
    ]
  }
];

  //add a new export with the same id iex 