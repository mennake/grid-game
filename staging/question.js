var questionJson = [{
        title: '',
        heading: 'Required Courses',
        type: 'text',
        removeClass: 'defaultselect',
        enableNext: true,
        number: '1'
    },


    {
        id: 'id_q1',
        title: 'Q1',
        heading: 'Choose Your Path',
        que: 'How do you want to explore your options?',
        type: 'radio',
        options: [{
                optn: 'Industry',
                /*dargData: [{
                        data: {
                            title: "ACCT 462",
                            desc: "Detecting Fraudulent Financial Reporting",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "ACCT 473",
                            desc: "Financial Statement Auditing",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "ACCT 474",
                            desc: "Tax Issues for Business",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }

                    }
                ],
                content: "National Tax Case Study Competition"*/
            },
            {
                optn: 'Emphasis',
                /*dargData: [{
                        data: {
                            title: "MOR 462",
                            desc: "Management Consulting",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 431",
                            desc: "Foundation of Digital Business Innovation",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 433",
                            desc: "Business Process Design",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Consulting Project for Frito Lay with the Center for Global Supply Chain Management "*/
            }
        ],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false,
    },









    {
        id: 'id_q1b_industry',
        title: 'Q1b',
        heading: 'Industry Focus',
        que: 'Which industry do you want to explore?',
        type: 'radio',
        options: [{
                optn: 'Accounting',
                parent: 'Industry',
                dargData: [{
                        data: {
                            title: "ACCT 462",
                            desc: "Detecting Fraudulent Financial Reporting",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "ACCT 473",
                            desc: "Financial Statement Auditing",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "ACCT 474",
                            desc: "Tax Issues for Business",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }

                    }
                ],
                summer: {
                    Internship: [{
                            title: "Summer Leadership Program",
                            desc: "PWC",
                            summerchk: true
                        },
                        {
                            title: "Deal Advisory Internship",
                            desc: "Ernst & Young",
                            summerchk: true
                        },
                    ],
                    International: [{
                            title: "Global Leader Program",
                            desc: "Beijing and Shanghai, China",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/global-leadership-program-glp'
                        },
                        {
                            title: "International Exchange Program",
                            desc: "Paris, France",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/international-exchange-program'
                        }
                    ]
                },
                content: "Deloitte FanTAXtic National Tax Case Study Competition",
                masters: {
                    degree: "Master of Accounting in Data and Analytics",
                    school: "Leventhal School of Accounting",
                    units: 30,
                    courses: 10
                }
            },
            {
                optn: 'Consulting',
                parent: 'Industry',
                dargData: [{
                        data: {
                            title: "MOR 462",
                            desc: "Management Consulting",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 431",
                            desc: "Foundation of Digital Business Innovation",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 433",
                            desc: "Business Process Design",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                summer: {
                    Internship: [{
                            title: "Associate Consultant Internship",
                            desc: "Capgemini Consulting",
                            summerchk: true
                        },
                        {
                            title: "Consulting Summer Analyst",
                            desc: "Accenture",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Learning about International Commerce",
                            desc: "Hong Kong",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/marshall-learning-about-international-commerce-linc-program'
                        },
                        {
                            title: "ExCel (International Experiential Corporate Learning Program)",
                            desc: "Milan, Italy",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/excel-international-experiential-corporate-learning-program'
                        }
                    ]
                },
                content: "Consulting Project for Frito Lay with the Center for Global Supply Chain Management",
                masters: {
                    degree: "Strategy and Management Consulting Graduate Certificate",
                    school: "Marshall School of Business",
                    units: 15,
                    courses: 5
                }
            },
            {
                optn: 'Entrepreneurship',
                parent: 'Industry',
                dargData: [{
                        data: {
                            title: "BAEP 450",
                            desc: "Fundamentals of Entrepreneurship",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "BAEP 491",
                            desc: "Social Entrepreneurship",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "BAEP 453",
                            desc: "Venture Management",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                summer: {
                    Internship: [{
                            title: "Art/Design Spring and Summer Internship",
                            desc: "Universal Creative",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/winslow-maxwell-global-summer-internships'
                        },
                        {
                            title: "Winslow-Maxwell Global Summer Internship",
                            desc: "Sydney, Australia",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Learning about International Commerce(LINC)",
                            desc: "Buenos Aires, Argentina",
                            summerchk: true
                        },
                        {
                            title: "Global Brigades @ Marshall",
                            desc: "Panama",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/global-brigades-marshall'
                        }
                    ]
                },
                content: "Undergraduate Scholars Mentoring Program with the Brittingham Social Enterprise Lab",
                masters: {
                    degree: "Master of Science in Social Entrepreneurship",
                    school: "Marshall School of Business",
                    units: 30,
                    courses: 10
                }
            },
            {
                optn: 'Finance',
                parent: 'Industry',
                dargData: [{
                        data: {
                            title: "FBE 453",
                            desc: "Advanced Practicum in Investment Management",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 458",
                            desc: " Law and Finance",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 460",
                            desc: " Mergers, Acquisitions and Restructuring",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                summer: {
                    Internship: [{
                            title: "Private Wealth Internship",
                            desc: "Merrill Lynch",
                            summerchk: true
                        },
                        {
                            title: "Corporate Finance Internship",
                            desc: "FTI Consulting",
                            summerchk: true
                        },
                    ],
                    International: [{
                            title: "Global Leader Program",
                            desc: "Beijing and Shanghai, China",
                            summerchk: true
                        },
                        {
                            title: "International Exchange Program",
                            desc: "Madrid, Spain",
                            summerchk: true
                        }
                    ]
                },
                content: "Marshall's International Case Competition",
                masters: {
                    degree: "Master of Science in Finance",
                    school: "Marshall School of Business",
                    units: 36,
                    courses: 12
                }
            },
            {
                optn: 'Marketing',
                parent: 'Industry',
                dargData: [{
                        data: {
                            title: "MKT 450",
                            desc: "Consumer Behavior and Marketing",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "MKT 405",
                            desc: "Advertising and Promotion Management",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "MKT 465",
                            desc: "Global Marketing Management",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                summer: {
                    Internship: [{
                            title: "Social Media Marketing Internship",
                            desc: "Disney",
                            summerchk: true
                        },
                        {
                            title: "Product and Promotion Internship",
                            desc: "Target",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Global Leader Program",
                            desc: "Beijing and Shanghai, China",
                            summerchk: true
                        },
                        {
                            title: "International Exchange Program",
                            desc: "Paris, France",
                            summerchk: true
                        }
                    ]
                },
                content: "Future of Media Research Project with the Institute for Communication Technology Management",
                masters: {
                    degree: "Master of Science in Marketing Analytics",
                    school: "Marshall School of Business",
                    units: 30,
                    courses: 10
                }
            },
            {
                optn: 'Real Estate',
                parent: 'Industry',
                dargData: [{
                        data: {
                            title: "FBE 391",
                            desc: "Real Estate Finance and Investments",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 466",
                            desc: "Real Estate Feasibility Studies",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 489",
                            desc: "Real Estate Capital Markets",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                summer: {
                    Internship: [{
                            title: "Real Estate Banking Internship",
                            desc: "PNC Financial Services",
                            summerchk: true
                        },
                        {
                            title: "Summer Real Estate Intern",
                            desc: "JLL",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Learning about International Commerce",
                            desc: "Tokyo, Japan",
                            summerchk: true
                        },
                        {
                            title: "International Exchange Program",
                            desc: "Brussels, Belgium",
                            summerchk: true
                        }
                    ]
                },
                content: "International Real Estate Case Competition",
                masters: {
                    degree: "Master of Construction Management",
                    school: "Viterbi School of Engineering",
                    units: 32,
                    courses: 11
                }
            }
        ],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false,
    },






    {
        id: 'id_q1b_emphasis',
        title: 'Q1b',
        heading: 'Emphasis',
        que: 'Which emphasis do you want to explore?',
        type: 'radio',
        options: [{
                optn: 'Business Analytics',
                summer: {
                    Internship: [{
                            title: "Data Analyst",
                            desc: "FBI",
                            summerchk: true
                        },
                        {
                            title: "Business Intelligence Analyst",
                            desc: "Kaiser Permanente",
                            summerchk: true
                        },
                        {
                            title: "Product Analyst",
                            desc: "Paypal",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Global Leader Program",
                            desc: "Beijing and Shanghai, China",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/global-leadership-program-glp'
                        },
                        {
                            title: "International Exchange Program",
                            desc: "Tel Aviv, Israel",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/international-exchange-program'
                        }
                    ]
                },
                content: "Analytic results from customer satisfaction survey of a biopharmaceutical company to determine an effective marketing strategies",
                masters: {
                    degree: "Master of Science in Business Analytics",
                    school: "Marshall School of Business",
                    units: 33,
                    courses: 11
                }
            },
            {
                optn: 'Communication',
                summer: {
                    Internship: [{
                            title: "Brand Marketing Intern",
                            desc: "Riot Games",
                            summerchk: true
                        },
                        {
                            title: "Human Resources Intern",
                            desc: "KPMG",
                            summerchk: true
                        },
                        {
                            title: "Customer Development Internship",
                            desc: "Unilever",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Learning about International Commerce (LINC)",
                            desc: "Hong Kong",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/marshall-learning-about-international-commerce-linc-program'
                        },
                        {
                            title: "ExCel (International Experiential Corporate Learning Program)",
                            desc: "Milan, Italy",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/excel-international-experiential-corporate-learning-program'
                        }
                    ]
                },
                content: "Communicating to Lead and Persuade capstone consulting project for NGOs",
                masters: {
                    degree: "Communication Management",
                    school: "Annenberg School for Communication and Journalism",
                    units: 32,
                    courses: 11
                }
            },
            {
                optn: 'Entrepreneurship and Innovation',
                summer: {
                    Internship: [{
                            title: "Summer Internship",
                            desc: "Universal Creative",
                            summerchk: true
                        },
                        {
                            title: "Growth Intern",
                            desc: "Lemonade (Fintect: Insurance)",
                            summerchk: true
                        },
                        {
                            title: "Partner Solutions Intern",
                            desc: "Flowspace (on-demand warehouse and fulfillment startup)",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Learning about International Commerce (LINC)",
                            desc: "Helsinki, Finland and Stockholm, Sweden",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/marshall-learning-about-international-commerce-linc-program'
                        },
                        {
                            title: "Global Entrepreneurship Immersion Program",
                            desc: "Myanmar",
                            summerchk: true,
                            onlink: ''
                        }
                    ]
                },
                content: "Undergraduate Scholars Mentoring Program with the Brittingham Social Enterprise Lab",
                masters: {
                    degree: "Master of Science in Social Entrepreneurship",
                    school: "Marshall School of Business",
                    units: 30,
                    courses: 10
                }
            },
            {
                optn: 'Finance',
                summer: {
                    Internship: [{
                            title: "Investment Banking Summer Analyst",
                            desc: "Morgan Stanley",
                            summerchk: true
                        },
                        {
                            title: "FP&A Financial Analyst Intern",
                            desc: "Amazon",
                            summerchk: true
                        },
                        {
                            title: "Corporate Finance Summer Analyst",
                            desc: "Deloitte",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Learning about International Commerce (LINC)",
                            desc: "Helsinki, Finland and Stockholm, Sweden",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/marshall-learning-about-international-commerce-linc-program'
                        },
                        {
                            title: "Global Entrepreneurship Immersion Program",
                            desc: "Myanmar",
                            summerchk: true,
                            onlink: ''
                        }
                    ]
                },
                content: "Undergraduate Student Investment Fund (USIF), Marshall's International Case Competition",
                masters: {
                    degree: "Master of Science in Finance",
                    school: "Marshall School of Business",
                    units: 36,
                    courses: 12
                }
            },
            {
                optn: 'Leadership and Innovation',
                summer: {
                    Internship: [{
                            title: "Finance Leadership Development Program",
                            desc: "Johnson & Johnson",
                            summerchk: true
                        },
                        {
                            title: "Consulting - Summer Associate (Strategy)",
                            desc: "Deloitte",
                            summerchk: true
                        },
                        {
                            title: "Marketing Intern (Global Business Solutions)",
                            desc: "TikTok",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Learning about International Commerce (LINC)",
                            desc: "Sydney, Australia",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/marshall-learning-about-international-commerce-linc-program'
                        },
                        {
                            title: "International Exchange Program (IEP)",
                            desc: "Copenhagen, Denmark",
                            summerchk: true,
                            onlink: ''
                        }
                    ]
                },
                content: "",
                masters: {
                    degree: "Strategy and Management Consulting Graduate Certificate",
                    school: "Marshall School of Business",
                    units: 15,
                    courses: 5
                }
            },
            {
                optn: 'Marketing',
                summer: {
                    Internship: [{
                            title: "Social Media Marketing Summer Intern",
                            desc: "Disney",
                            summerchk: true
                        },
                        {
                            title: "Marketing Intern (Global Business Solutions)",
                            desc: "TikTok",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Global Leadership Program (GLP)",
                            desc: "Beijing and Shanghai, China",
                            summerchk: true,
                            onlink: ''
                        },
                        {
                            title: "International Exchange Program (IEP)",
                            desc: "Paris, France",
                            summerchk: true,
                            onlink: ''
                        }
                    ]
                },
                content: "Future of Media Research Project with the Institute for Communication Technology Management",
                masters: {
                    degree: "Master of Science in Marketing Analytics",
                    school: "Marshall School of Business",
                    units: 30,
                    courses: 10
                }
            },
            {
                optn: 'Real Estate Finance',
                summer: {
                    Internship: [{
                            title: "Real Estate Banking Internship",
                            desc: "PNC Financial Services",
                            summerchk: true
                        },
                        {
                            title: "Summer Real Estate Intern",
                            desc: "JLL",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Learning about International Commerce (LINC)",
                            desc: "Tokyo, Japan",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/marshall-learning-about-international-commerce-linc-program'
                        },
                        {
                            title: "International Exchange Program (IEP)",
                            desc: "Brussels, Belgium",
                            summerchk: true,
                            onlink: ''
                        }
                    ]
                },
                content: "International Real Estate Case Competition",
                masters: {
                    degree: "Master of Construction Management",
                    school: "Viterbi School of Engineering",
                    units: 32,
                    courses: 11
                }
            },
            {
                optn: 'Risk Management',
                summer: {
                    Internship: [{
                            title: "Risk Management Intern",
                            desc: "Paypal",
                            summerchk: true
                        },
                        {
                            title: "Risk and Financial Advisory Summer Associate",
                            desc: "Deloitte",
                            summerchk: true
                        }
                    ],
                    International: [{
                            title: "Learning about International Commerce (LINC)",
                            desc: "Tokyo, Japan",
                            summerchk: true,
                            onlink: 'https://www.marshall.usc.edu/current-students/international-programs/marshall-learning-about-international-commerce-linc-program'
                        },
                        {
                            title: "International Exchange Program (IEP)",
                            desc: "Milan, Italy",
                            summerchk: true,
                            onlink: ''
                        }
                    ]
                },
                content: "Capstone project: Risk Report for the Board of Directors of a public company",
                masters: {
                    degree: "Master of Accounting in Data and Analytics",
                    school: "Leventhal School of Accounting",
                    units: 30,
                    courses: 10
                }
            }
        ],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false,
    },











    {
        id: 'id_q1c',
        title: 'Q1c',
        heading: 'Pick a Career Track',
        que: 'Which option would you like to focus on within [Business Analytics]?',
        type: 'radio',
        options: [{
                optn: 'Analytics Methodologies: AI and Machine Learning',
                parent: 'Business Analytics',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "DSO 428",
                            desc: "Essentials and Digital Frontiers of Big Data",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 431",
                            desc: "Foundations of Digital Business Innovation",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 464",
                            desc: "Deep Learning for AI and Business applications",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Analytic results from customer satisfaction survey of a biopharmaceutical company to determine an effective marketing strategies."
            },
            {
                optn: 'Tools and Software: Tableau/Power BI',
                parent: 'Business Analytics',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "DSO 428",
                            desc: "Essentials and Digital Frontiers of Big Data",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 483",
                            desc: "Operations Consulting",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 499",
                            desc: "Statistical Computing and Data Visualization in R and Tableau",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }

                    }
                ],
                content: "Analytic results from customer satisfaction survey of a biopharmaceutical company to determine an effective marketing strategies."
            },
            {
                optn: 'Applications: Simulation and Decision Analysis',
                parent: 'Business Analytics',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "DSO 427",
                            desc: "Designing Spreadsheets-based Business Models",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 459",
                            desc: "Designing Spreadsheets-based Business Models",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 499",
                            desc: "Designing Spreadsheets-based Business Models",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }

                    }
                ],
                content: "Analytic results from customer satisfaction survey of a biopharmaceutical company to determine an effective marketing strategies."
            },
            {
                optn: 'Entertainment',
                parent: 'Communication',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "BUCO 445",
                            desc: "Communicating to Lead and Persuade",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "BUCO 458",
                            desc: "Managing Communication and New Media",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "BUCO 499",
                            desc: "Crisis and Reputation Communication",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Communicating to Lead and Persuade capstone consulting project for NGOs "
            },
            {
                optn: 'Consumer Products',
                parent: 'Communication',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "BUCO 445",
                            desc: "Communicating to Lead and Persuade",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "BUCO 458",
                            desc: "Managing Communication and New Media",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "BUCO 460",
                            desc: "International Communication",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Communicating to Lead and Persuade capstone consulting project for NGOs "
            },
            {
                optn: 'Technology',
                parent: 'Communication',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "BUCO 333",
                            desc: "Communication in the Working World - Managing Diversity",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "BUCO 425",
                            desc: "Ethical Communication",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "BUCO 445",
                            desc: "Communicating to Lead and Persuade",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }

                    }
                ],
                content: "Communicating to Lead and Persuade capstone consulting project for NGOs "
            },
            {
                optn: 'Entrepreneurship and Innovation',
                parent: 'Entrepreneurship and Innovation',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "BAEP 450",
                            desc: "Fundamentals of Entrepreneurship",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "BAEP 453",
                            desc: "Venture Management",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "BAEP 491",
                            desc: "Social Entrepreneurship",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Undergraduate Scholars Mentoring Program with the Brittingham Social Enterprise Lab"
            },
            {
                optn: 'Corporate Finance',
                parent: 'Finance',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "FBE 421",
                            desc: "Financial Analysis and Valuation",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 432",
                            desc: "Corporate Financial Strategy",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 459",
                            desc: "Financial Derivatives",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Marshall’s International Case Competition"
            },
            {
                optn: 'Investment Banking',
                parent: 'Finance',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "FBE 431",
                            desc: "Financial Policies and Corporate Control",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 432",
                            desc: "Corporate Financial Strategy",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 459",
                            desc: "Financial Derivatives",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Marshall’s International Case Competition"
            },
            {
                optn: 'Private Equity and Venture Capital',
                parent: 'Finance',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "FBE 423",
                            desc: "Introduction to Venture Capital and Private Equity",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 437",
                            desc: "Entrepreneurial Finance: Financial Management for Developing Firms ",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 441",
                            desc: "Investments",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Marshall’s International Case Competition"
            },
            {
                optn: 'General Financial Management',
                parent: 'Finance',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "FBE 421",
                            desc: "Financial Analysis and Valuation",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 432",
                            desc: "Corporate Financial Strategy",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 441",
                            desc: "Investment",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Marshall’s International Case Competition"
            },
            {
                optn: 'Leadership Development',
                parent: 'Leadership and Innovation',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "MOR 431",
                            desc: "Interpersonal Competence & Development",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "MOR 451",
                            desc: "Mastering Decision Making",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "MOR 472",
                            desc: "Power, Politics and Influence",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "N/A"
            },
            {
                optn: 'Management Consulting',
                parent: 'Leadership and Innovation',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "MOR 451",
                            desc: "Mastering Decision Making",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "MOR 462",
                            desc: "Management Consulting",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "MOR 463",
                            desc: "Organization Change and Development",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "N/A"
            },
            {
                optn: 'Global Management',
                parent: 'Leadership and Innovation',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "FBE 462",
                            desc: "International Trade, Finance & Commercial Policy",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "MOR 470",
                            desc: "Global Leadership",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "MOR 492",
                            desc: "Global Strategy",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "N/A"
            },
            {
                optn: 'Marketing',
                parent: 'Marketing',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "MKT 404",
                            desc: "Happiness & Wellbeing in the Marketplace",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "MKT 440",
                            desc: "Marketing Analysis and Strategy",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "MKT 461",
                            desc: "Marketing Blockbuster Entertainment",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Future of Media Research Project with the Institute for Communication Technology Management"
            },
            {
                optn: 'Real Estate Finance',
                parent: 'Real Estate Finance',
                grandparent: 'Emphasis',
                dargData: [{
                        data: {
                            title: "FBE 423",
                            desc: "Introduction to Venture Capital and Private Equity",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 465",
                            desc: "Real Estate Analysis and Computer Modeling",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 489",
                            desc: "Real Estate Capital Markets",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "International Real Estate Case Competition"
            },
            {
                optn: 'Risk Management',
                parent: 'Risk Management',
                grandparent: 'Emphasis',
                dargData: [{
                    data: {
                            title: "ACCT 387",
                            desc: "Risk Management in Entertainment, Sports and the Arts",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '0px'
                        }
                    },
                    {
                        data: {
                            title: "DSO 455",
                            desc: "Project Management",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    },
                    {
                        data: {
                            title: "FBE 443",
                            desc: "Introduction to Forecasting and Risk Analysis",
                            points: 4
                        },
                        class: 'purple rmvBorder',
                        draggable: true,
                        droppable: false,
                        fixed: false,
                        year: 'senior',
                        stylecss: {
                            marginLeft: '-60px'
                        }
                    }
                ],
                content: "Capstone project: Risk Report for the Board of Directors of a public company"
            }
        ],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false,
    },

















    {
        enableNext: true,
        showQueBlocks: true,
        heading: "Industry Focus",
        // que: "You’ve selected [Accounting] as your focus in Business Administration.",
        // content1: "You will have opportunity to participate in Academic Project, [Deloitte FanTAXtic National Tax Case Study Competition]",
        content2: "Please drag these upper division business electives to Senior year.",
        confirm: true,
        queData: [],
    },
    {
        title: 'Q2',
        heading: 'Calculus',
        que: 'Have you taken or will you take:',
        type: 'radio',
        options: [{
                optn: 'AP Calculus exam? (Score of 4 or 5 only)',
                points: 4,
                course: 'AP'
            },
            {
                optn: 'IB Mathematics Higher Level-exam (Score of 5, 6, or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'A-Level Mathematics exam (Score of A*, A, or B)',
                points: 4,
                course: 'A-level'
            },
            {
                optn: 'None',
                points: 0,
                ques: 0
            }
        ],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false,
    },
    {
        title: 'General Education Waivers',
        heading: 'General Education Courses',
        que: 'All USC undergraduates are required to satisfy liberal arts core requirements, the General Education (GE) courses. Some GE classes double count toward 2 GE categories. Would you like to fast track your GE requirements?',
        type: 'radio',
        enableNext: false,
        options: [{
            optn: 'Yes',
            id: 'fasttrack'
        },
        {
            optn: 'No',
            id: 'fasttrack'
        }
        ]
    },
    {
        title: 'GE Fast Track Confirmation',
        id: "ge_fast_track_yes",
        heading: 'GE Fast Track Confirmation',
        que: 'You are now on the GE fast track',
        type: 'text',
        enableNext: false
    },
    {
        title: 'GE Fast Track Confirmation',
        id: "ge_fast_track_no",
        heading: 'GE Fast Track Confirmation',
        que: 'You can choose which classes to fulfill each of your GE categories',
        type: 'text',
        enableNext: false
    },
    {
        title: 'General Education Waivers',
        heading: 'General Education Waivers',
        que: 'Incoming students can waive certain GE classes with select AP, IB and A-Level exams.',
        type: 'text',
        enableNext: true
    },
    {
        title: 'Q3',
        heading: 'GE Category A',
        que: 'Have you taken or will you take one of the following exams, with its corresponding score?',
        type: 'radio',
        options: [{
                optn: 'AP Art History (Score of 4 or 5)',
                points: 4,
                course: 'AP'
            },
            {
                optn: 'IB Dance (Higher Level; Score of 5, 6, or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'IB Film (Higher Level; Score of 5, 6, or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'IB Music (Higher Level; Score of 5, 6, or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'IB Theater (Higher Level; Score of 5, 6, or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'IB Visual Arts (Higher Level; Score of 5, 6, or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'A-Level Art & Design (Score of A*, A, or B)',
                points: 4,
                course: 'A-level'
            },
            {
                optn: 'A-Level Music (Score of A*, A, or B)',
                points: 4,
                course: 'A-level'
            },
            {
                optn: 'None',
                points: 0,
                course: 'none',
                ques: 1
            }
        ],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false
    },
    {
        title: 'Q4',
        heading: 'GE Category D',
        que: 'Have you taken or will you take one of the following exams, with its corresponding score?',
        type: 'radio',
        options: [{
                optn: 'AP Biology(Score of 4 or 5)',
                points: 4,
                course: 'AP'
            },
            {
                optn: 'IB Biology(Score of 5,6 or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'A-Level Biology(Score of A*, A, or B)',
                points: 4,
                course: 'A-level'
            },
            {
                optn: 'A-Level Marine Science(Score of A*, A, or B)',
                points: 4,
                course: 'A-level'
            },
            {
                optn: 'None',
                points: 0,
                course: 'none',
                ques: 2
            }
        ],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false
    },
    {
        title: 'Q5',
        heading: 'GE Category E',
        que: 'Have you taken or will you take one of the following exams, with its corresponding score?',
        type: 'radio',
        id: "ge_cat_e",
        options: [{
                optn: 'AP Chemistry (Score of 4 or 5)',
                points: 4,
                course: 'AP'
            },
            {
                optn: 'AP Physics 1 (Score of 4 or 5)',
                points: 4,
                course: 'AP'
            },
            {
                optn: 'AP Physics 2 (Score of 4 or 5)',
                points: 4,
                course: 'AP'
            },
            {
                optn: 'AP Physics B (Score of 4 or 5)',
                points: 4,
                course: 'AP'
            },
            {
                optn: "AP Physics (C-Electricity/Magnetism) (Score of 4 or 5)",
                points: 4,
                course: 'AP'
            },
            {
                optn: "AP Physics (C-Mechanics) (Score of 4 or 5)",
                points: 4,
                course: 'AP'
            },
            {
                optn: 'IB Chemistry (Higher Level; Score of 5, 6, or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'IB Physics (Higher Level; Score of 5, 6, or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'A-Level Chemistry (Score of A*, A, or B)',
                points: 4,
                course: 'A-level'
            },
            {
                optn: 'A-Level Physics  (Score of A*, A, or B)',
                points: 4,
                course: 'A-level'
            },
            {
                optn: 'None',
                points: 0,
                course: 'none',
                ques: 3
            }
        ],
        points: 4,
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false
    },
    {
        title: 'Q6',
        id: "ge_cat_g",
        heading: 'GE Category G',
        que: 'Have you taken or will you take one of the following exams, with its corresponding score?',
        type: 'radio',
        options: [{
                optn: 'IB Global Politics',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'IB Asia and Oceania (Higher Level; Score of 5,6 or 7)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'IB History of Africa (Higher Level; Score of 4 or 5)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'IB History of Americas (Higher Level; Score of 4 or 5)',
                points: 4,
                course: 'IB'
            },
            {
                optn: 'A-Level History (Score of A*, A, or B)',
                points: 4,
                course: 'A-level'
            },
            {
                optn: 'None',
                points: 0,
                course: 'none',
                ques: 4
            }
        ],
        points: 4,
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false
    },
    {
        title: 'Q7',
        heading: 'GE Category H',
        que: 'Have you taken or will you take one of the following exams, with its corresponding score?',
        type: 'radio',
        options: [{
                optn: 'AP European History (Score of 4 or 5)',
                course: 'AP',
                Category: 'H'
            },
            {
                optn: 'AP US History (Score of 4 or 5)',
                course: 'AP',
                Category: 'H'
            },
            {
                optn: 'AP World History (Score of 4 or 5)',
                course: 'AP',
                Category: 'H'
            },
            {
                optn: 'IB History of Europe & Islamic World (Score of 5, 6, or 7)',
                course: 'IB',
                Category: 'H'
            },
            {
                optn: 'IB Europe and the Middle East (Higher Level; Score of 5, 6, or 7)',
                course: 'IB',
                Category: 'H'
            },
            {
                optn: 'A-Level Classical Studies (Score of A*, A, or B)',
                course: 'A-level',
                Category: 'H'
            },
            {
                optn: 'A-Level Divinity (Score of A*, A, or B)',
                course: 'A-level',
                Category: 'H'
            },
            {
                optn: 'A-Level Islamic Studies (Score of A*, A, or B)',
                course: 'A-level',
                Category: 'H'
            },
            {
                optn: 'None',
                course: 'none',
                points: 0,
                ques: 5,
                Category: 'H'
            }
        ],

        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false
    },
    {
        title: 'Q8',
        heading: 'Progressive Degree',
        type: 'radio',
        options: [{
                optn: 'Add on a Progressive Degree and graduate within 4 years with a Master Degree',
                optionType: 'Progressive',
                showoptn: false,
                suboptn: [{
                        optn: 'Master in Accounting (Accounting)'
                    },
                    {
                        optn: 'SAP Graduate Certificate (Consulting)'
                    },
                    {
                        optn: 'Master of Science in Social Entrepreneurship (Entrepreneurship)'
                    },
                    {
                        optn: 'Master of Science in Finance (Finance)'
                    },
                    {
                        optn: 'Master of Science in Marketing (Marketing)'
                    },
                    {
                        optn: 'Master of Construction Management (Real Estate)'
                    }
                ]
            },
            {
                optn: 'Get Undergraduate Degree early and start your career',
                name: '',
                optionType: 'Undergraduate'
            },
            {
                optn: 'Explore minors outside of business at USC',
                optionType: 'business'
            }
        ],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false,
    },
    {
        title: '',
        heading: 'Progressive Degree',
        que: 'We’ve rearranged your grid ',
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        autoMove: true,
        enableNext: true
    },
    {
        title: 'Q9',
        heading: 'Minor',
        que: 'Now it’s time to use your bank credits!',
        subcontent: 'In total, USC offers over 150 different minor programs for undergraduate students.  The minors below represent some of the most popular minor programs amongst USC Marshall students.',
        content1: 'Select 1 minor program, or 2 minor programs if you have 40+ elective credits in the bank.',
        link: '*You will be qualified for ',
        type: 'checkbox',
        options: [{
                optn: 'Philosophy (20 units of free electives needed)*',
                name: 'Philosophy',
                points: '20',
                ques: 'minor'
            },
            {
                optn: 'Real Estate Development (24 units of free electives needed)',
                name: 'Real Estate Development Minor',
                points: '24',
                ques: 'minor'
            },
            {
                optn: 'Cinematic Arts (24 units of free electives needed)*',
                name: 'Cinematic Arts Minor',
                points: '24',
                ques: 'minor'
            },
            {
                optn: 'Music Industry (20 units of free electives needed)',
                name: 'Music Industry Minor',
                points: '20',
                ques: 'minor'
            },
            {
                optn: 'Political Science (20 units of free electives needed)',
                name: 'Political Science Minor',
                points: '20',
                ques: 'minor'
            },
            {
                optn: 'Sports Media Studies ( 24 units of free electives needed)*',
                name: 'Sports Media Studies Minor',
                points: '24',
                ques: 'minor'
            },
            {
                optn: 'None',
                points: '0',
                ques: 'minor'
            }
        ],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false
    },
    {
        heading: 'Minor',
        enableNext: true,
        showQueBlocks: true,
        headingText: "Drag and Drop.",
        nextBlock: 'afterQ9',
        minordrag: true,
        queData: []
    },
    {
        title: 'Q10',
        heading: 'Free Electives',
        enableNext: true,
        showQueBlocks: true,
        headingText: "You have elective credits left. Drag and drop to the grid",
        nextBlock: 'afterQ5',
        minordrag: true,
        queData: []
    },
    {
        title: 'Q11',
        heading: 'Extracurricular Activities',
        que: 'Please select all the programs that you are interested in participating and drag them to all four Summers.',
        type: 'checkbox',
        link1: '*You will be qualified for ',
        subTitle: true,
        options: [],
        successMsg: 'You’ve saved 4 free elective credits in your bank for your minor(s)',
        enableNext: false,
        minordrag: true,
    },
    {
        heading: 'Extracurricular Activities',
        enableNext: true,
        showQueBlocks: true,
        headingText: "Drag and Drop",
        nextBlock: 'afterQ11',
        sumrdrag: true,
        minordrag: true,
        queData: [],
        lastStep: true
    },
]



var dragBox = [{
        headingText: "Calculus is the prerequisite for most business core classes. It needs to be taken during the Fall semester of Freshman year.",
        enableNext: true,
        showQueBlocks: true,
        queData: [{
            data: {
                title: 'MATH 118',
                desc: 'Fund. Principle of the Calculus',
                points: '4'
            },
            class: 'brown rmvBorder',
            draggable: true,
            droppable: false,
            fixed: false
        }]
    }, {
        headingText: "Please drag the block and drop it into space depending on when you wish to take it",
        enableNext: true,
        showQueBlocks: true,
        queData: [{
            data: {
                title: 'GE A',
                desc: '',
                points: '4'
            },
            class: 'orange rmvBorder',
            draggable: true,
            droppable: false,
            fixed: false
        }]
    }, {
        headingText: "Please drag the block and drop it into space depending on when you wish to take it",
        enableNext: true,
        showQueBlocks: true,
        queData: [{
            data: {
                title: 'GE D',
                desc: '',
                points: '4'
            },
            class: 'orange rmvBorder',
            draggable: true,
            droppable: false,
            fixed: false
        }]
    },
    {
        headingText: "Please drag the block and drop it into space depending on when you wish to take it",
        enableNext: true,
        showQueBlocks: true,
        queData: [{
            data: {
                title: 'GE E',
                desc: '',
                points: '4'
            },
            class: 'orange rmvBorder',
            draggable: true,
            droppable: false,
            fixed: false
        }]
    },
    {
        headingText: "Please drag the block and drop it into space depending on when you wish to take it",
        enableNext: true,
        showQueBlocks: true,
        queData: [{
            data: {
                title: 'GE G',
                desc: '',
                points: '4'
            },
            class: 'orange rmvBorder',
            draggable: true,
            droppable: false,
            fixed: false
        }]
    },
    {
        headingText: "Please drag the block and drop it into space depending on when you wish to take it",
        enableNext: true,
        showQueBlocks: true,
        queData: [{
            data: {
                title: 'GE H',
                desc: '',
                points: '4'
            },
            class: 'orange rmvBorder',
            draggable: true,
            droppable: false,
            fixed: false
        }],
        jumpto: 'minor'
    }
]

//==============================JSON Array For Grid Data======================================================//
var gridBlock = [{
        data: {
            title: 'WRIT 150',
            desc: 'Writing and Critical Reasoning',
            points: '4'
        },
        class: 'orange',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'freshman'
    }, {
        data: {
            title: 'ECON 351x',
            desc: 'Microeconomics for Business',
            points: '4'
        },
        class: 'pink',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'freshman'
    }, {
        data: {
            title: 'BUAD 280',
            desc: 'Accounting I',
            points: '3'
        },
        class: 'pink',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'sophomore'
    }, {
        data: {
            title: 'BUAD 281',
            desc: 'Accounting II',
            points: '3'
        },
        class: 'pink',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'sophomore'
    }, {
        data: {
            title: 'BUAD 425',
            desc: 'Data Analysis for Decision Making',
            points: '2'
        },
        class: 'red',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'junior'
    }, {
        data: {
            title: 'BUAD 497',
            desc: 'Strategic Management',
            points: '4'
        },
        class: 'red',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'junior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'senior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'senior'
    }, {
        data: {
            title: 'BUAD 304',
            desc: 'Organizational Behavior and Leadership',
            points: '4'
        },
        class: 'red',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'freshman'
    }, {
        data: {
            title: 'BUAD 310g / 312',
            desc: 'Applied Business Statistics',
            points: '4'
        },
        class: 'pink',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'freshman'
    }, {
        data: {
            title: 'BUAD 302',
            desc: 'Communication Strategy in Business',
            points: '4'
        },
        class: 'red',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'sophomore'
    }, {
        data: {
            title: 'ECON 352x',
            desc: 'Macroeconomics for Business',
            points: '4'
        },
        class: 'pink',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'sophomore'
    }, {
        data: {
            title: 'GE C',
            desc: 'Social Analysis',
            points: '4'
        },
        class: 'orange',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'junior'
    }, {
        data: {
            title: 'WRIT 340',
            desc: 'Advanced Writing for Business',
            points: '4'
        },
        class: 'orange',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'junior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'senior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'senior'
    }, {
        data: {
            title: 'GE C',
            desc: 'Social Analysis',
            points: '4'
        },
        class: 'orange',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'freshman'
    }, {
        data: {
            title: 'GESM',
            desc: 'Freshmen Seminar',
            points: '4'
        },
        class: 'orange',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'freshman'
    }, {
        data: {
            title: 'BUAD 306',
            desc: 'Business Finance',
            points: '4'
        },
        class: 'red',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'sophomore'
    }, {
        data: {
            title: 'BUAD 307',
            desc: 'Marketing Fundamentals',
            points: '4'
        },
        class: 'red',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'sophomore'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'junior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'junior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'senior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'senior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'freshman'
    },
    {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'freshman'
    }, {
        data: {
            title: 'GE B',
            desc: 'Humanistic Inquiry',
            points: '4'
        },
        class: 'orange',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'sophomore'
    }, {
        data: {
            title: 'BUAD 311',
            desc: 'Operations Management',
            points: '4'
        },
        class: 'red',
        draggable: false,
        droppable: false,
        fixed: true,
        year: 'sophomore'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'junior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'junior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'senior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'senior'
    }, {
        data: 'blank',
        class: 'cross',
        draggable: false,
        droppable: false,
        fixed: false,
        year: 'freshman'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'freshman'
    }, {
        data: 'blank',
        class: 'cross',
        draggable: false,
        droppable: false,
        fixed: false,
        year: 'sophomore'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'sophomore'
    }, {
        data: 'blank',
        class: 'cross',
        draggable: false,
        droppable: false,
        fixed: false,
        year: 'junior'
    }, {
        data: 'blank',
        class: 'cross',
        draggable: false,
        droppable: false,
        fixed: false,
        year: 'junior'
    }, {
        data: 'blank',
        class: 'gray',
        draggable: false,
        droppable: true,
        fixed: false,
        year: 'senior'
    }, {
        data: 'blank',
        class: 'cross',
        draggable: false,
        droppable: false,
        fixed: false,
        year: 'senior'
    }
]

//defaultselect

// $scope.signout = function() {
//     location.href = path[0] + "index.html"
// };