const OrbitalDescription = 'An API Gateway that uses CloudWeGo frameworks that accepts HTTP requests, utilising Generic-Calls to translate requests into Thrift binary format requests.' +
        ' The API Gateway will forward the translated requests to one of the backend RPC servers obtained from a registry centre.'

const HeadCountDescription = 'This project is a web-based application for managing and monitoring occupancy in real-time using machine learning. ' +
        'It provides real-time occupancy data, live video feed monitoring, and access control. The system includes user authentication and settings customisation.'

const IexDescription = 'In collaboration with Sungift and Active Health Labs, this project aims to promote local produce and healthy living through a farm-to-fork programme. ' + 
        'We designed workshops where residents of Sembawang could tour a rooftop farm, harvest vegetables, and cook them immediately at Active Health Labs!'

const  IexPopUpDescription = 'IEx (Impact Experience) is a two-year interdisciplinary project where students collaborate with non-profit or community partners to develop innovative solutions ' +
        'that benefit society. IEx aims to create real-world impact by allowing time for deep engagement, skill development, and meaningful collaboration, both in Singapore and abroad.\n\n' +
        'In our project, we partnered with Sungift Pte Ltd, a rooftop farm in Sembawang, and Active Health Labs @Sembawang to bring a “farm-to-fork” experience to local residents. Participants toured the rooftop farm, harvested fresh vegetables, and cooked them immediately in the nearby Active Health Lab cooking studio. ' +
        'This initiative aimed to promote local farm produce, encourage healthy eating, and build stronger community ties. We piloted the concept within NUS College before expanding to the public, adapting based on real participant feedback.\n\n' +
        'Through this collaboration, we gained hands-on experience in stakeholder management, workshop planning, and community engagement—overcoming challenges such as space constraints, weather, and balancing diverse stakeholder goals. ' +
        'The project ultimately shaped our vision of promoting hyperlocal food networks across neighborhoods in Singapore.';

export const projectDetails = [
    {
      title: 'NUS-TikTok Orbital Project',
      description: OrbitalDescription,
      technologies: ['Go', 'Python', 'CloudWeGo Frameworks', 'Postman', 'ApacheThrift', 'etcd', 'JSON'],
      image: '/Orbital.gif',
      codeLink: 'https://github.com/HongRay/api-gateway',
    },
    {
      title: 'HeadCount',
      description: HeadCountDescription,
      technologies: ['TypeScript', 'Next.js', 'Python', 'OpenCV', 'Tailwind CSS', ],
      image: '/SunHack.mp4',
      codeLink: 'https://github.com/HongRay/HeadCount',
    },
    {
      title: 'Impact Experience Project',
      description: IexDescription,
      technologies: ['Community Service', 'Project & Stackholder Management', 'Business Application'],
      image: '/IEX-Crop.JPG',
      codeLink: 'popup',
      hasDetailPage: true,
      id: 'iex',
    }
  ];

export const projectPopUpDetails =[
  {
    id : 'iex',
    title: 'Impact Experience Project',
    description: IexPopUpDescription,
    technologies: ['Community Service', 'Project & Stackholder Management', 'Business Application', 
      'Community Outreach', 'Design Thinking', 'Event Coordination', 'User Experience Awareness',
      'Time Management'
    ],
    image: ["/IEX.jpg", "/Sungift.jpg", "/Ida-Farm-Visit.jpg", "/AH.jpg"],
    codeLink: 'popup',
    hasDetailPage: true,
    achievements: [
    'Organized a successful farm-to-fork programme with community involvement.',
    'Promoted sustainability and healthy living through interactive workshops',
    'Collaborated with Sungift and Active Health',
    'Managed logistical planning across farm visits, cooking studios, and participant movement',
    'Handled stakeholder coordination and built sustainable community engagement processes'
    ]
  }
];
