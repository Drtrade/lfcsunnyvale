// Units Data - Centralized content management
export const unitsData = {
    headline: "Serve in God's House",
  introText: "Service is love in action. At Living Faith Church Sunnyvale, we believe that everyone has a gift and a calling to serve in God's vineyard. Joining a service unit not only builds the church but also builds you — spiritually, emotionally, and socially.",

  closingNote: {
    title: "There's a place for you in God's Vineyard",
        description: "Discover your area of service today and become part of a team that's making an eternal impact.",
    cta: [
        {text: "Join a Unit", action: "join"},
        {text: "Contact a Unit Leader", action: "contact"}
    ]
  },

  units: [
    {
        id: 'children-church',
        name: "Children's Church",
        shortDesc: "Building foundation in faith for children aged 0-11 through engaging lessons and activities.",
        fullDesc: "Our Children's Church is a dynamic ministry dedicated to nurturing young hearts and minds in the ways of the Lord. We create a safe, fun, and engaging environment where children ages 0-11 can learn about God's love, develop strong biblical foundations, and build lasting friendships with their peers.",
        ageGroup: "Ages 0-11",
        meetingTime: 'Sundays during main service',
        category: "ministry",
        leadership: {
            leader: {
                name: "Sarah Williams",
                title: "children's Church Coordinator",
                image: "/images/leaders/sarahwilliams.jpg",
          bio: "Sarah has been serving in children's ministry for over 8 years and has a passion for seeing young lives transformed by God's Word.",
          contact: "cildrens@lfcsunnyvale.org"
            },
            assistant: {
                name: "Michael Chen",
                title: "Assistant Coordinator",
                image: "",
          bio: "Michael brings creativity and energy to our children's programs, ensuring every child feels loved and valued.",
          contact: "childrens@lfcsunnyvale.orh"
            },
            secretory: {
                name: "Grace Adeyemi",
                title: "Administrative Secretory",
                image: "",
                          bio: "Grace handles scheduling, communications, and ensures smooth operations in all children's church activities.",
                          contact: "childrens@lfcsunnyvale.org"

            }
        },
        specializations: [
        "Bible storytelling and lessons",
        "Age-appropriate worship and music",
        "Creative arts and crafts",
        "Character development programs",
        "Special holiday programs and events"
      ],
      requirements: [
        "Love for children and patience",
        "Completed background check",
        "Attendance at monthly training sessions",
        "Commitment to serve at least twice a month"
      ]
    },

    {
      id: 'teens-church',
      name: "Teens Church",
      shortDesc: "Empowering teenagers aged 12-18 to explore and strengthen their faith in a supportive community.",
      fullDesc: "Teens Church is where young people discover their identity in Christ, build meaningful relationships, and develop leadership skills. We provide a safe space for teenagers to ask tough questions, explore their faith, and receive guidance for navigating the challenges of adolescence in today's world.",
      ageGroup: "Ages 12-18",
      meetingTime: "Fridays, 7:00 PM - 9:00 PM",
      category: "ministry",
      leadership: {
        leader: {
          name: "Pastor David Okonkwo",
          title: "Teens Church Pastor",
          image: "/images/leaders/david-okonkwo.jpg",
          bio: "Pastor David has a heart for the youth and has been mentoring teenagers for over 10 years, helping them discover their purpose in God.",
          contact: "teens@lfcsunnyvale.org"
        },
        assistant: {
          name: "Jennifer Martinez",
          title: "Assistant Youth Leader",
          image: "/images/leaders/jennifer-martinez.jpg",
          bio: "Jennifer connects with teens through relevant teaching and creates an atmosphere where they feel understood and valued.",
          contact: "teens@lfcsunnyvale.org"
        },
        secretary: {
          name: "Daniel Afolabi",
          title: "Youth Secretary",
          image: "/images/leaders/daniel-afolabi.jpg",
          bio: "Daniel manages communications, events planning, and keeps our teen community connected and informed.",
          contact: "teens@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Relevant Bible teaching for teens",
        "Leadership development programs",
        "Mentorship and discipleship",
        "Youth conferences and retreats",
        "Community service projects",
        "Sports and recreational activities"
      ],
      requirements: [
        "Heart for youth ministry",
        "Ability to relate with teenagers",
        "Completed background check",
        "Regular attendance and commitment"
      ]
    },
    {
      id: 'choir-ministry',
      name: "Choir Ministry",
      shortDesc: "Leading worship and enhancing church services through music and song.",
      fullDesc: "The Choir Ministry is the heartbeat of our worship experience. We are a team of dedicated singers and musicians who use their talents to usher the congregation into God's presence. Through harmonious melodies and spirit-filled performances, we create an atmosphere where hearts are touched and lives are changed.",
      meetingTime: "Saturdays, 12:00 PM - 3:30 PM (Rehearsals)",
      category: "ministry",
      leadership: {
        leader: {
          name: "Minister Blessing Okoli",
          title: "Choir Director",
          image: "/images/leaders/blessing-okoli.jpg",
          bio: "Minister Blessing has over 15 years of experience in music ministry and leads our choir with passion and excellence.",
          contact: "choir@lfcsunnyvale.org"
        },
        assistant: {
          name: "Emmanuel Johnson",
          title: "Assistant Choir Director",
          image: "/images/leaders/emmanuel-johnson.jpg",
          bio: "Emmanuel brings technical expertise and musical arrangement skills to enhance our worship experience.",
          contact: "choir@lfcsunnyvale.org"
        },
        secretary: {
          name: "Mary Thompson",
          title: "Choir Secretary",
          image: "/images/leaders/mary-thompson.jpg",
          bio: "Mary coordinates schedules, manages attendance, and ensures all choir activities run smoothly.",
          contact: "choir@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Leading congregational worship",
        "Special music presentations",
        "Vocal training and development",
        "Musical arrangement and composition",
        "Recording and production"
      ],
      requirements: [
        "Singing or instrumental skills",
        "Commitment to weekly rehearsals",
        "Teachable spirit",
        "Availability for Sunday services"
      ]
    },
    {
      id: 'deacons-board',
      name: "Deacons Board",
      shortDesc: "Serving the congregation through support, care, and community outreach.",
      fullDesc: "The Deacons Board is committed to serving the practical and spiritual needs of our church family. We provide support during times of crisis, coordinate community outreach programs, and ensure that no member of our congregation is overlooked or forgotten.",
      meetingTime: "First Saturday of every month",
      category: "leadership",
      leadership: {
        leader: {
          name: "Deacon Peter Nwosu",
          title: "Head Deacon",
          image: "/images/leaders/peter-nwosu.jpg",
          bio: "Deacon Peter has served faithfully for 12 years, demonstrating servant leadership and compassion for God's people.",
          contact: "deacons@lfcsunnyvale.org"
        },
        assistant: {
          name: "Deacon James Roberts",
          title: "Assistant Head Deacon",
          image: "/images/leaders/james-roberts.jpg",
          bio: "Deacon James coordinates outreach programs and ensures effective communication within the deacons board.",
          contact: "deacons@lfcsunnyvale.org"
        },
        secretary: {
          name: "Deaconess Ruth Okafor",
          title: "Board Secretary",
          image: "/images/leaders/ruth-okafor.jpg",
          bio: "Deaconess Ruth maintains records, schedules meetings, and manages board correspondence.",
          contact: "deacons@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Pastoral care and visitation",
        "Community outreach programs",
        "Benevolence ministry",
        "New member integration",
        "Crisis response team"
      ],
      requirements: [
        "Spiritual maturity and leadership",
        "Heart for serving others",
        "Time commitment for visitations",
        "Discretion and confidentiality"
      ]
    },
    {
      id: 'elders-board',
      name: "Elders Board",
      shortDesc: "Providing spiritual guidance and leadership to the church community.",
      fullDesc: "The Elders Board provides spiritual oversight and strategic direction for the church. We work closely with the pastoral team to ensure doctrinal soundness, shepherd the flock, and maintain the spiritual health of the congregation.",
      meetingTime: "Monthly leadership meetings",
      category: "leadership",
      leadership: {
        leader: {
          name: "Elder Samuel Adebayo",
          title: "Presiding Elder",
          image: "/images/leaders/samuel-adebayo.jpg",
          bio: "Elder Samuel brings wisdom and biblical insight from 20 years of ministry experience and leadership.",
          contact: "elders@lfcsunnyvale.org"
        },
        assistant: {
          name: "Elder Robert Kim",
          title: "Assistant Presiding Elder",
          image: "/images/leaders/robert-kim.jpg",
          bio: "Elder Robert provides strategic planning expertise and oversees church development initiatives.",
          contact: "elders@lfcsunnyvale.org"
        },
        secretary: {
          name: "Elder Victoria Eze",
          title: "Board Secretary",
          image: "/images/leaders/victoria-eze.jpg",
          bio: "Elder Victoria manages board documentation and ensures effective communication of decisions.",
          contact: "elders@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Spiritual oversight and counsel",
        "Church governance and policy",
        "Conflict resolution",
        "Strategic planning",
        "Doctrinal teaching and guidance"
      ],
      requirements: [
        "Proven spiritual leadership",
        "Biblical knowledge and maturity",
        "Commitment to prayer and study",
        "Availability for counsel and meetings"
      ]
    },
    {
      id: 'crowd-control',
      name: "Crowd Control",
      shortDesc: "Ensuring safety and order during church events and services.",
      fullDesc: "The Crowd Control team is responsible for maintaining order, managing crowd flow, and ensuring the safety of all attendees during church services and events. We create a secure and welcoming environment where everyone can worship without distraction or concern.",
      meetingTime: "30 minutes before each service",
      category: "operations",
      leadership: {
        leader: {
          name: "Brother Marcus Johnson",
          title: "Crowd Control Coordinator",
          image: "/images/leaders/marcus-johnson.jpg",
          bio: "Marcus has 8 years of experience in event management and brings professional crowd control expertise to our church.",
          contact: "operations@lfcsunnyvale.org"
        },
        assistant: {
          name: "Brother Kenneth Ude",
          title: "Assistant Coordinator",
          image: "/images/leaders/kenneth-ude.jpg",
          bio: "Kenneth coordinates team schedules and trains new volunteers in crowd management best practices.",
          contact: "operations@lfcsunnyvale.org"
        },
        secretary: {
          name: "Sister Angela Davis",
          title: "Team Secretary",
          image: "/images/leaders/angela-davis.jpg",
          bio: "Angela manages team rosters, communications, and incident reporting.",
          contact: "operations@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Crowd flow management",
        "Entrance and exit coordination",
        "Seating arrangement",
        "Emergency evacuation procedures",
        "Conflict de-escalation"
      ],
      requirements: [
        "Physical fitness and alertness",
        "Good communication skills",
        "Calm demeanor under pressure",
        "Punctuality and reliability"
      ]
    },
    {
      id: 'sanctuary-cleaning',
      name: "Sanctuary Cleaning",
      shortDesc: "Maintaining a clean and welcoming environment for worship.",
      fullDesc: "The Sanctuary Cleaning team ensures that our worship space is always clean, organized, and presentable. We believe that cleanliness reflects our reverence for God's house and creates a welcoming atmosphere for all who enter.",
      meetingTime: "Saturdays, 9:00 AM - 12:00 PM",
      category: "operations",
      leadership: {
        leader: {
          name: "Sister Patricia Obi",
          title: "Cleaning Team Coordinator",
          image: "/images/leaders/patricia-obi.jpg",
          bio: "Patricia has dedicated 10 years to keeping God's house beautiful and welcoming for all worshippers.",
          contact: "facilities@lfcsunnyvale.org"
        },
        assistant: {
          name: "Brother Thomas Lee",
          title: "Assistant Coordinator",
          image: "/images/leaders/thomas-lee.jpg",
          bio: "Thomas manages cleaning supplies inventory and coordinates special cleaning projects.",
          contact: "facilities@lfcsunnyvale.org"
        },
        secretary: {
          name: "Sister Joy Nnamdi",
          title: "Team Secretary",
          image: "/images/leaders/joy-nnamdi.jpg",
          bio: "Joy schedules cleaning shifts and maintains records of all maintenance activities.",
          contact: "facilities@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Sanctuary and facility cleaning",
        "Restroom maintenance",
        "Floor care and carpet cleaning",
        "Window and glass cleaning",
        "Supply management"
      ],
      requirements: [
        "Willingness to serve",
        "Attention to detail",
        "Physical ability to clean",
        "Saturday morning availability"
      ]
    },
    {
      id: 'decorations-team',
      name: "Decorations Team",
      shortDesc: "Creating beautiful and inspiring decor for church events and services.",
      fullDesc: "The Decorations Team transforms our worship space for special occasions, holidays, and events. We use creativity and excellence to create visually stunning environments that enhance the worship experience and reflect the glory of God.",
      meetingTime: "As needed for events",
      category: "creative",
      leadership: {
        leader: {
          name: "Sister Rachel Garcia",
          title: "Decorations Coordinator",
          image: "/images/leaders/rachel-garcia.jpg",
          bio: "Rachel has an eye for design and has been beautifying our church for special events for 6 years.",
          contact: "creative@lfcsunnyvale.org"
        },
        assistant: {
          name: "Brother Frank Okoro",
          title: "Assistant Coordinator",
          image: "/images/leaders/frank-okoro.jpg",
          bio: "Frank handles logistics, material sourcing, and execution of decoration plans.",
          contact: "creative@lfcsunnyvale.org"
        },
        secretary: {
          name: "Sister Lisa Wong",
          title: "Team Secretary",
          image: "/images/leaders/lisa-wong.jpg",
          bio: "Lisa coordinates schedules, maintains inventory, and manages team communications.",
          contact: "creative@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Event decoration and styling",
        "Seasonal sanctuary decoration",
        "Floral arrangements",
        "Stage and platform design",
        "Creative theme development"
      ],
      requirements: [
        "Creative flair and artistic ability",
        "Flexibility with scheduling",
        "Teamwork and collaboration",
        "Physical ability for setup/teardown"
      ]
    },
    {
      id: 'media-creativity',
      name: "Media and Creativity Team",
      shortDesc: "Producing multimedia content to enhance worship and outreach efforts.",
      fullDesc: "The Media and Creativity Team harnesses the power of modern technology to spread the gospel and enhance our worship experience. We produce high-quality graphics, videos, social media content, and live streaming services that reach people both in person and online.",
      meetingTime: "Weekly team meetings",
      category: "creative",
      leadership: {
        leader: {
          name: "Brother Stephen Oladele",
          title: "Media Director",
          image: "/images/leaders/stephen-oladele.jpg",
          bio: "Stephen is a professional multimedia designer with 12 years of experience in church media production.",
          contact: "media@lfcsunnyvale.org"
        },
        assistant: {
          name: "Sister Michelle Park",
          title: "Assistant Media Director",
          image: "/images/leaders/michelle-park.jpg",
          bio: "Michelle specializes in social media strategy and content creation for digital platforms.",
          contact: "media@lfcsunnyvale.org"
        },
        secretary: {
          name: "Brother Isaac Chukwu",
          title: "Media Secretary",
          image: "/images/leaders/isaac-chukwu.jpg",
          bio: "Isaac manages project timelines, content calendars, and team coordination.",
          contact: "media@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Graphic design and branding",
        "Video production and editing",
        "Social media management",
        "Live streaming services",
        "Photography and documentation",
        "Website content management"
      ],
      requirements: [
        "Design or media production skills",
        "Proficiency with creative software",
        "Understanding of social media platforms",
        "Creativity and innovation"
      ]
    },
    {
      id: 'hospitality-team',
      name: "Hospitality Team",
      shortDesc: "Welcoming and assisting visitors and members during church services and events.",
      fullDesc: "The Hospitality Team is often the first point of contact for visitors and members. We create a warm, welcoming atmosphere and ensure that everyone feels valued and cared for from the moment they arrive until they leave.",
      meetingTime: "30 minutes before each service",
      category: "operations",
      leadership: {
        leader: {
          name: "Sister Deborah Udoh",
          title: "Hospitality Coordinator",
          image: "/images/leaders/deborah-udoh.jpg",
          bio: "Deborah has a gift for making people feel welcome and has led our hospitality ministry for 7 years.",
          contact: "hospitality@lfcsunnyvale.org"
        },
        assistant: {
          name: "Brother Charles Brown",
          title: "Assistant Coordinator",
          image: "/images/leaders/charles-brown.jpg",
          bio: "Charles manages guest services and coordinates special event hospitality.",
          contact: "hospitality@lfcsunnyvale.org"
        },
        secretary: {
          name: "Sister Esther Ike",
          title: "Team Secretary",
          image: "/images/leaders/esther-ike.jpg",
          bio: "Esther handles team scheduling, visitor follow-up, and maintains hospitality supplies.",
          contact: "hospitality@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Guest reception and welcoming",
        "Information desk services",
        "Visitor follow-up",
        "Refreshment coordination",
        "Special needs assistance"
      ],
      requirements: [
        "Friendly and welcoming personality",
        "Good communication skills",
        "Punctuality and reliability",
        "Heart for serving people"
      ]
    },
    {
      id: 'technical-team',
      name: "Technical Team",
      shortDesc: "Managing audio-visual equipment to ensure smooth church services and events.",
      fullDesc: "The Technical Team operates behind the scenes to ensure flawless audio, video, and lighting during all church services and events. We use technical excellence to remove distractions and allow the congregation to fully engage in worship.",
      meetingTime: "45 minutes before each service",
      category: "operations",
      leadership: {
        leader: {
          name: "Brother Daniel Igwe",
          title: "Technical Director",
          image: "/images/leaders/daniel-igwe.jpg",
          bio: "Daniel is an audio-visual expert with 15 years of experience in church technical operations.",
          contact: "technical@lfcsunnyvale.org"
        },
        assistant: {
          name: "Brother Andrew Wilson",
          title: "Assistant Technical Director",
          image: "/images/leaders/andrew-wilson.jpg",
          bio: "Andrew specializes in sound engineering and trains new technical team members.",
          contact: "technical@lfcsunnyvale.org"
        },
        secretary: {
          name: "Sister Chioma Nnaji",
          title: "Technical Secretary",
          image: "/images/leaders/chioma-nnaji.jpg",
          bio: "Chioma manages equipment inventory, maintenance schedules, and team roster.",
          contact: "technical@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Sound system operation",
        "Video projection and streaming",
        "Stage lighting",
        "Equipment maintenance",
        "Recording services"
      ],
      requirements: [
        "Technical aptitude",
        "Willingness to learn",
        "Attention to detail",
        "Early arrival for services"
      ]
    },
    {
      id: 'traffic-control',
      name: "Traffic Control Team",
      shortDesc: "Directing parking and traffic flow during church events to ensure safety and efficiency.",
      fullDesc: "The Traffic Control Team manages parking and traffic flow to ensure safe and efficient arrival and departure for all attendees. We create an organized parking experience that sets a positive tone for worship.",
      meetingTime: "45 minutes before each service",
      category: "operations",
      leadership: {
        leader: {
          name: "Brother Solomon Adeleke",
          title: "Traffic Control Coordinator",
          image: "/images/leaders/solomon-adeleke.jpg",
          bio: "Solomon has 9 years of experience in traffic management and ensures smooth operations every service.",
          contact: "operations@lfcsunnyvale.org"
        },
        assistant: {
          name: "Brother Kevin Martinez",
          title: "Assistant Coordinator",
          image: "/images/leaders/kevin-martinez.jpg",
          bio: "Kevin trains new team members and coordinates parking for special events.",
          contact: "operations@lfcsunnyvale.org"
        },
        secretary: {
          name: "Sister Mercy Ogunleye",
          title: "Team Secretary",
          image: "/images/leaders/mercy-ogunleye.jpg",
          bio: "Mercy manages team schedules and maintains communication with all traffic control volunteers.",
          contact: "operations@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Parking lot management",
        "Traffic flow direction",
        "VIP and special needs parking",
        "Safety protocol enforcement",
        "Event parking coordination"
      ],
      requirements: [
        "Good physical stamina",
        "Weather tolerance",
        "Clear communication skills",
        "Safety consciousness"
      ]
    },
    {
      id: 'medical-team',
      name: "Medical Team",
      shortDesc: "Providing emergency response and first aid during church events.",
      fullDesc: "The Medical Team stands ready to provide immediate medical response and first aid during all church services and events. We ensure that medical emergencies are handled promptly and professionally, giving peace of mind to our congregation.",
      meetingTime: "15 minutes before each service",
      category: "operations",
      leadership: {
        leader: {
          name: "Dr. Faith Okoye",
          title: "Medical Team Lead",
          image: "/images/leaders/faith-okoye.jpg",
          bio: "Dr. Faith is a licensed physician with 18 years of medical experience and a heart for serving God's people.",
          contact: "medical@lfcsunnyvale.org"
        },
        assistant: {
          name: "Nurse John Phillips",
          title: "Assistant Team Lead",
          image: "/images/leaders/john-phillips.jpg",
          bio: "Nurse John brings emergency room experience and coordinates medical supply inventory.",
          contact: "medical@lfcsunnyvale.org"
        },
        secretary: {
          name: "Sister Hannah Ezeh",
          title: "Medical Secretary",
          image: "/images/leaders/hannah-ezeh.jpg",
          bio: "Hannah manages team scheduling, maintains medical records, and ensures compliance with protocols.",
          contact: "medical@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Emergency first aid response",
        "Basic life support (BLS)",
        "Medical emergency coordination",
        "Health and safety protocols",
        "Medical supplies management"
      ],
      requirements: [
        "Medical training or certification",
        "Current CPR/First Aid certification",
        "Calm under pressure",
        "Availability during services"
      ]
    },
    {
      id: 'security-team',
      name: "Security Team",
      shortDesc: "Protecting the church community and property through vigilant security measures.",
      fullDesc: "The Security Team provides professional security services to protect our congregation, visitors, and church property. We maintain a safe environment through vigilant monitoring, access control, and emergency response protocols.",
      meetingTime: "1 hour before each service",
      category: "operations",
      leadership: {
        leader: {
          name: "Brother Gabriel Nwofor",
          title: "Security Coordinator",
          image: "/images/leaders/gabriel-nwofor.jpg",
          bio: "Gabriel is a retired law enforcement officer with 25 years of security experience.",
          contact: "security@lfcsunnyvale.org"
        },
        assistant: {
          name: "Brother Richard Thompson",
          title: "Assistant Security Coordinator",
          image: "/images/leaders/richard-thompson.jpg",
          bio: "Richard coordinates security training and emergency response protocols.",
          contact: "security@lfcsunnyvale.org"
        },
        secretary: {
          name: "Sister Blessing Chidi",
          title: "Security Secretary",
          image: "/images/leaders/blessing-chidi.jpg",
          bio: "Blessing manages team rosters, incident reports, and communication systems.",
          contact: "security@lfcsunnyvale.org"
        }
      },
      specializations: [
        "Perimeter security",
        "Access control and monitoring",
        "Emergency response coordination",
        "Incident reporting and documentation",
        "Security protocol development"
      ],
      requirements: [
        "Security or law enforcement background preferred",
        "Good judgment and discretion",
        "Physical fitness",
        "Strong communication skills"
      ]
    },
    {
      id: 'believers-foundation',
      name: "Believers Foundation Class",
      shortDesc: "Offering foundational teachings for new believers to grow in their faith.",
      fullDesc: "The Believers Foundation Class is designed to help new believers establish a strong foundation in their Christian faith. Through systematic teaching of biblical principles, we equip members with the knowledge and tools they need to live victoriously and grow spiritually.",
      meetingTime: "Sundays, 8:00 AM - 9:00 AM",
      category: "ministry",
      leadership: {
        leader: {
          name: "Pastor Mark Ogunyemi",
          title: "Foundation Class Coordinator",
          image: "/images/leaders/mark-ogunyemi.jpg",
          bio: "Pastor Mark has taught foundation classes for 11 years and has a passion for discipling new believers.",
          contact: "foundation@lfcsunnyvale.org"
        },
        assistant: {
          name: "Minister Sarah Anderson",
          title: "Assistant Coordinator",
          image: "/images/leaders/sarah-anderson.jpg",
          bio: "Minister Sarah develops curriculum and leads small group discussions for new believers.",
          contact: "foundation@lfcsunnyvale.org"
        },
        secretary: {
          name: "Brother Timothy Oluwole",
          title: "Class Secretary",
          image: "/images/leaders/timothy-oluwole.jpg",
          bio: "Timothy manages class registration, attendance, and graduation ceremonies.",
          contact: "foundation@lfcsunnyvale.org"
        }
      },
      specializations: [
        "New believer orientation",
        "Biblical foundations teaching",
        "Spiritual growth mentorship",
        "Water baptism preparation",
        "Church membership integration"
      ],
      requirements: [
        "Strong biblical knowledge",
        "Teaching ability",
        "Patience and understanding",
        "Commitment to discipleship"
      ]
    }
  ]
};

export default unitsData;