import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useData, useUserState } from './utilities/firebase.js';
import App from './App';
import Settings from "./routes/settings";
import ProfileEdit from "./components/profileEdit.js"
import SignUp from './routes/signup.js';
import userEvent from '@testing-library/user-event';

jest.mock('./utilities/firebase.js');

const userInfo = [{
  "cu": "-N-eZIUmBfQ9fQJKYb4H",
  "users": {
    "-N0c7e1ve1uuQ8y8JnuS": {
      "conversations": [
        {
          "message": "Hello",
          "receiving_userID": "-N0c8WhEUSRIWzKQnQQ-",
          "sending_userID": "-N0c7e1ve1uuQ8y8JnuS",
          "timestamp": 1651015268747
        },
        {
          "message": "Hi",
          "receiving_userID": "-N0c8WhEUSRIWzKQnQQ-",
          "sending_userID": "-N0c7e1ve1uuQ8y8JnuS",
          "timestamp": 1651015286297
        }
      ],
      "favoriteEntreprenuer": "Steve Jobs",
      "industryInterest": [
        "EdTech",
        " Consumer",
        " Crypto"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N1-fZgtUeMGLot57C-h"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N1-xYdu361XBs-_Bn-f"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N1-yNT3y0E6zOSBwUJG"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N108AxeO0iNvIPXkOYv"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N108AyOC3CiABsmlfls"
        }
      ],
      "major": "Economics, Business, Entrepreneurship",
      "name": "Robbie Waxman",
      "phoneNumber": "9148068212",
      "pictures": "https://thegarage.northwestern.edu/wp-content/uploads/2021/03/Robbie-Waxman.jpg",
      "projects": [
        {
          "greatestMoment": "150th Client",
          "name": "Mobile Camp",
          "projectDescription": "Backyard Summer Camp",
          "projectDuration": "2 years",
          "projectLink": "link",
          "teamSize": "50+"
        },
        {
          "greatestMoment": "",
          "name": "",
          "projectDescription": "",
          "projectDuration": "",
          "projectLink": "",
          "teamSize": ""
        }
      ],
      "school": "Northwestern",
      "seen_users": [
        "-N0c8WhEUSRIWzKQnQQ-",
        "-N0c8zvawaMfrxL0kvmy",
        "-N1-fZgtUeMGLot57C-h",
        "-N1-xYdu361XBs-_Bn-f",
        "-N1-yNT3y0E6zOSBwUJG",
        "-N108AxeO0iNvIPXkOYv",
        "-N108AyOC3CiABsmlfls"
      ],
      "skills": {
        "artistic": [
          "Powerpoint",
          " Canva"
        ],
        "softSkills": [
          "Leadership",
          " Storytelling"
        ],
        "technical": [
          "Excel",
          " Financial Modeling"
        ]
      },
      "user_id": "4n903odyOTdWvocTHmTEViQhZgK2",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0cO5cYVHUGEveGmAmR"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0cNiy6JOaEOd528ryM"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0fS92g7o2ZBd1wcGAa"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0fSO-HY_lkiXwnRjBP"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1-fZgtUeMGLot57C-h"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1-yNT3y0E6zOSBwUJG"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N108Ayuly4-x-DkmkHx"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1B5fvhGPUAy020KdrA"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1KpAMb9pyOA6HXS6_9"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1y89yc51TxgyRKdeDC"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N11QEWCkbxF-rKC5LsR"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N2vl2CFwxmwGygf2EZ1"
        }
      ]
    },
    "-N0c8WhEUSRIWzKQnQQ-": {
      "conversations": [
        {
          "message": "Hello",
          "receiving_userID": "-N0c8WhEUSRIWzKQnQQ-",
          "sending_userID": "-N0c7e1ve1uuQ8y8JnuS",
          "timestamp": 1651015268747
        },
        {
          "message": "Hi",
          "receiving_userID": "-N0c8WhEUSRIWzKQnQQ-",
          "sending_userID": "-N0c7e1ve1uuQ8y8JnuS",
          "timestamp": 1651015286297
        }
      ],
      "favoriteEntreprenuer": "Satoshi",
      "industryInterest": [
        "Crypto",
        " Fintech"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8rS05-VzkRtaGooX"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0cNiy6JOaEOd528ryM"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0fS92g7o2ZBd1wcGAa"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0fSKHvOYwO3rKT1lEk"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0fSO-HY_lkiXwnRjBP"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0fTu9kqU-Sw50hGULb"
        }
      ],
      "major": "CS",
      "name": "Josh Breite",
      "phoneNumber": "2124446542",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/s1NUnpPSs5etMq2xaNkPVdpb9TJ3%2F99BC7659-C2A3-4E61-9A0C-B7F48EC50B6F.png?alt=media&token=f14e6b04-1adc-40fa-9152-2ed2a23c6d5d",
      "projects": [
        {
          "greatestMoment": "Shipping the product",
          "name": "Induction Learning",
          "projectDescription": "Bridge the gap between data and education ",
          "projectDuration": "2 Years",
          "projectLink": "",
          "teamSize": "6"
        }
      ],
      "school": "Northwestern",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8rS05-VzkRtaGooX",
        "-N0c8zvawaMfrxL0kvmy",
        "-N0cNiy6JOaEOd528ryM",
        "-N0fS92g7o2ZBd1wcGAa",
        "-N0fSKHvOYwO3rKT1lEk",
        "-N0fSO-HY_lkiXwnRjBP",
        "-N0fTu9kqU-Sw50hGULb"
      ],
      "skills": {
        "artistic": [
          "Figma"
        ],
        "softSkills": [
          "Notion"
        ],
        "technical": [
          "React",
          " SQL"
        ]
      },
      "user_id": "s1NUnpPSs5etMq2xaNkPVdpb9TJ3",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0cO5cYVHUGEveGmAmR"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0cNiy6JOaEOd528ryM"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0fS92g7o2ZBd1wcGAa"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0fSO-HY_lkiXwnRjBP"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0fTu9kqU-Sw50hGULb"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1-yNT3y0E6zOSBwUJG"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N108Ayuly4-x-DkmkHx"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1-fZgtUeMGLot57C-h"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1B5fvhGPUAy020KdrA"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1KpAMb9pyOA6HXS6_9"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1y89yc51TxgyRKdeDC"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N11QEWCkbxF-rKC5LsR"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N0c8zvawaMfrxL0kvmy": {
      "conversations": [
        {
          "message": "",
          "receiving_userID": "-N0c8zvawaMfrxL0kvmy",
          "sending_userID": "-N0c8rS05-VzkRtaGooX",
          "timestamp": 1651015104738
        },
        {
          "message": "hi",
          "receiving_userID": "-N0c8zvawaMfrxL0kvmy",
          "sending_userID": "-N0c8rS05-VzkRtaGooX",
          "timestamp": 1651015108476
        },
        {
          "message": "yo",
          "receiving_userID": "-N0c8rS05-VzkRtaGooX",
          "sending_userID": "-N0c8zvawaMfrxL0kvmy",
          "timestamp": 1651015112555
        },
        {
          "message": "Would you like to be part of my trillion dollar crypto scam",
          "receiving_userID": "-N0c8zvawaMfrxL0kvmy",
          "sending_userID": "-N0c8rS05-VzkRtaGooX",
          "timestamp": 1651015137245
        }
      ],
      "favoriteEntreprenuer": "Steve Jobs",
      "industryInterest": [
        "FinTech"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8rS05-VzkRtaGooX"
        }
      ],
      "major": "Computer Science",
      "name": "Cynthia Shao",
      "phoneNumber": "475-482-2749",
      "pictures": "https://styles.redditmedia.com/t5_2r5i1/styles/communityIcon_x4lqmqzu1hi81.jpg",
      "projects": [
        {
          "greatestMoment": "none",
          "name": "EntrepMatch",
          "projectDescription": "meet cofounder",
          "projectDuration": "5 weeks",
          "projectLink": "https://entrepmatch.web.app",
          "teamSize": "8"
        }
      ],
      "school": "Northwestern University",
      "seen_users": [
        "-N0c8rS05-VzkRtaGooX"
      ],
      "skills": {
        "artistic": [
          "None"
        ],
        "softSkills": [
          "None"
        ],
        "technical": [
          "PHP",
          " Python",
          " Java"
        ]
      },
      "user_id": "IjFefsneq2fMQU0e73ssjm164gj2",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c8rS05-VzkRtaGooX"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0cO5cYVHUGEveGmAmR"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0cNiy6JOaEOd528ryM"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0fS92g7o2ZBd1wcGAa"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0fSO-HY_lkiXwnRjBP"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0fTu9kqU-Sw50hGULb"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1-fZgtUeMGLot57C-h"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1B5fvhGPUAy020KdrA"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1KpAMb9pyOA6HXS6_9"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1y89yc51TxgyRKdeDC"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N11QEWCkbxF-rKC5LsR"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N0fSO-HY_lkiXwnRjBP": {
      "conversations": "",
      "favoriteEntreprenuer": "",
      "industryInterest": [
        ""
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8rS05-VzkRtaGooX"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0cNiy6JOaEOd528ryM"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0fS92g7o2ZBd1wcGAa"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0fSKHvOYwO3rKT1lEk"
        }
      ],
      "major": "",
      "name": "Jerry",
      "phoneNumber": "",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/QTnlKZJzDZg3FSegG0lIFfCQ7qJ2%2F41660bbaea604cf4c82cae29a631488c.jpg?alt=media&token=97a93cec-c3cf-4991-a62f-dc1dbabf4194",
      "projects": [
        {
          "greatestMoment": "",
          "name": "",
          "projectDescription": "",
          "projectDuration": "",
          "projectLink": "",
          "teamSize": ""
        }
      ],
      "school": "",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8WhEUSRIWzKQnQQ-",
        "-N0c8rS05-VzkRtaGooX",
        "-N0c8zvawaMfrxL0kvmy",
        "-N0cNiy6JOaEOd528ryM",
        "-N0fS92g7o2ZBd1wcGAa",
        "-N0fSKHvOYwO3rKT1lEk"
      ],
      "skills": {
        "artistic": [
          ""
        ],
        "softSkills": [
          ""
        ],
        "technical": [
          ""
        ]
      },
      "user_id": "QTnlKZJzDZg3FSegG0lIFfCQ7qJ2",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c8rS05-VzkRtaGooX"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0cNiy6JOaEOd528ryM"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N1-fZgtUeMGLot57C-h": {
      "conversations": "",
      "favoriteEntreprenuer": "Vlad Tenev",
      "industryInterest": [
        "Fintech",
        " Consumer Finance"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
        }
      ],
      "major": "Computer Science",
      "name": "Will Cohen",
      "phoneNumber": "914-274-7259",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/aDVXUNNCs6ewjv3kuB7LajOJiAT2%2FwillPhoto.jpg?alt=media&token=6b961a80-2810-47e4-94ce-c2eaf1d4698b",
      "projects": [
        {
          "greatestMoment": "Pushing the first build",
          "name": "WestchesterEats",
          "projectDescription": "A mobile app to order food with a local Westchester flair",
          "projectDuration": "1.5 years",
          "projectLink": "",
          "teamSize": "4"
        },
        {
          "greatestMoment": "Having multiple countries sign up",
          "name": "Langex",
          "projectDescription": "A conversational based language learning app",
          "projectDuration": "1 year",
          "projectLink": "",
          "teamSize": "1"
        }
      ],
      "school": "Northwestern University",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8WhEUSRIWzKQnQQ-",
        "-N0c8zvawaMfrxL0kvmy"
      ],
      "skills": {
        "artistic": [
          "UI Design"
        ],
        "softSkills": [
          "Public Speaking"
        ],
        "technical": [
          "Swift",
          " Java",
          " C"
        ]
      },
      "user_id": "aDVXUNNCs6ewjv3kuB7LajOJiAT2",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N1-w4iL1J9ka0kf3DdG": {
      "conversations": "",
      "favoriteEntreprenuer": "Reese Witherspoon",
      "industryInterest": [
        "Human Resources",
        " Education"
      ],
      "major": "Human Development, Business",
      "name": "Phoebe Waxman",
      "phoneNumber": "914-806-6449",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/r1YEbaaiF3VgmAhKn8325lvGkK62%2FphoebePhoto.jpeg?alt=media&token=d0a2e110-56e9-4ecd-a2fc-1f94aa9520d6",
      "projects": [
        {
          "greatestMoment": "Making it through inaugural summer with zero COVID scares",
          "name": "The Mobile Camp",
          "projectDescription": "The Original Backyard Summer Camp Solution",
          "projectDuration": "2 years",
          "projectLink": "",
          "teamSize": "50+"
        }
      ],
      "school": "University of Wisconsin",
      "skills": {
        "artistic": [
          "Design",
          " PPT"
        ],
        "softSkills": [
          "Sales",
          " Organization"
        ],
        "technical": [
          "Workday"
        ]
      },
      "user_id": "r1YEbaaiF3VgmAhKn8325lvGkK62",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1KpAMb9pyOA6HXS6_9"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N1-xYdu361XBs-_Bn-f": {
      "conversations": "",
      "favoriteEntreprenuer": "Will Xenakis",
      "industryInterest": [
        "Food",
        " Entertainment"
      ],
      "major": "Learning and Organizational Change",
      "name": "Harris Fermaglich",
      "phoneNumber": "+1 (973) 309-3753",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/fKltCkfjssWHP1oMw44z1GWNypx2%2FharrisPhoto.jpeg?alt=media&token=55d19e42-b0f5-4d41-a2fb-3d3bc119aae4",
      "projects": [
        {
          "greatestMoment": "Hitting 100k followers on Instagram",
          "name": "FoodieThing",
          "projectDescription": "Social Media Marketing Agency for brands/restaurants",
          "projectDuration": "3 years",
          "projectLink": "",
          "teamSize": "2"
        }
      ],
      "school": "Northwestern University",
      "skills": {
        "artistic": [
          "Logo Design"
        ],
        "softSkills": [
          "Social Media"
        ],
        "technical": [
          ""
        ]
      },
      "user_id": "fKltCkfjssWHP1oMw44z1GWNypx2",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N1-yNT3y0E6zOSBwUJG": {
      "conversations": "",
      "favoriteEntreprenuer": "Whitney Wolfe Herd",
      "industryInterest": [
        "Technology "
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        }
      ],
      "major": "Computer Engineering ",
      "name": "Kiva Joseph ",
      "phoneNumber": "6509964027",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/sN6OLwKb6xOw6UfdJlJ39zVsObv2%2FIMG_0007.JPG?alt=media&token=162899e3-3252-4759-a829-5c5f6cfbea98",
      "projects": [
        {
          "greatestMoment": "When it first worked ",
          "name": "SnakeBit ",
          "projectDescription": "The snakegame that gets increasingly harder the more nervous you get. Made using a MicroBit microprocessor, with tilt sensors, an LED display, and heartrate sensor. ",
          "projectDuration": "2 Months ",
          "projectLink": "",
          "teamSize": "3 "
        }
      ],
      "school": "Northwestern University ",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8WhEUSRIWzKQnQQ-"
      ],
      "skills": {
        "artistic": [
          "Advanced CMOS VLSI Layout and Schematic Design",
          " CPU processor design",
          " embedded systems and microprocessor design "
        ],
        "softSkills": [
          "Matlab",
          " Excel "
        ],
        "technical": [
          "Java",
          " Python",
          " C",
          " C++",
          " Verilog",
          " Assembly",
          " Solidworks",
          " CAD "
        ]
      },
      "user_id": "sN6OLwKb6xOw6UfdJlJ39zVsObv2",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N102qmHzIQ4AsIgJnqF": {
      "conversations": "",
      "favoriteEntreprenuer": "Mark Cuban",
      "industryInterest": [
        "healthcare (assistive technologies)",
        " sports",
        " business management / administration "
      ],
      "major": "Learning and Organizational Change and Global Health",
      "name": "Alec Abramson",
      "phoneNumber": "7742081104",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/Pz9TCddOpzThIPRJlsVnT8rILDH2%2FMentor%20Match-2.pdf?alt=media&token=9dea231c-295d-4196-896d-714377905be7",
      "projects": [
        {
          "greatestMoment": "final pitch deck performance",
          "name": "Mentor Match",
          "projectDescription": "",
          "projectDuration": "10 weeks",
          "projectLink": "",
          "teamSize": "4"
        }
      ],
      "school": "Northwestern University",
      "skills": {
        "artistic": [
          "creativity",
          " innovation",
          " data presentation",
          " powerpoint design"
        ],
        "softSkills": [
          "mentorship",
          " collaboration",
          " teaming"
        ],
        "technical": [
          "change management",
          " business leadership",
          " organizational analysis",
          " marketing",
          " finance",
          " business writing"
        ]
      },
      "user_id": "Pz9TCddOpzThIPRJlsVnT8rILDH2",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N108AxeO0iNvIPXkOYv": {
      "conversations": "",
      "favoriteEntreprenuer": "Dwayne johnson",
      "industryInterest": [
        "Film"
      ],
      "major": "Film and TV production",
      "name": "Evan Miller",
      "phoneNumber": "8146109873",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/FAr3Oqr4GPViMovcSGyuEVINVh32%2FBED42F63-E529-4A63-A147-2DC1D4B7E416.jpeg?alt=media&token=2369c58c-e4eb-4826-827b-2c5c7cd7a2b5",
      "projects": [
        {
          "greatestMoment": "Car explosion",
          "name": "Idle Speed short film",
          "projectDescription": "Proof of concept for feature film",
          "projectDuration": "8 months",
          "projectLink": "Not finished",
          "teamSize": "50"
        }
      ],
      "school": "NYU Tisch",
      "skills": {
        "artistic": [
          "Filmmaking",
          " video",
          " photo"
        ],
        "softSkills": [
          "Communication",
          " organization"
        ],
        "technical": [
          "Adobe creative suite"
        ]
      },
      "user_id": "FAr3Oqr4GPViMovcSGyuEVINVh32",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N108AyOC3CiABsmlfls": {
      "conversations": "",
      "favoriteEntreprenuer": "Dwayne johnson",
      "industryInterest": [
        "Film"
      ],
      "major": "Film and TV production",
      "name": "Evan Miller",
      "phoneNumber": "8146109873",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/FAr3Oqr4GPViMovcSGyuEVINVh32%2FBED42F63-E529-4A63-A147-2DC1D4B7E416.jpeg?alt=media&token=2369c58c-e4eb-4826-827b-2c5c7cd7a2b5",
      "projects": [
        {
          "greatestMoment": "Car explosion",
          "name": "Idle Speed short film",
          "projectDescription": "Proof of concept for feature film",
          "projectDuration": "8 months",
          "projectLink": "Not finished",
          "teamSize": "50"
        }
      ],
      "school": "NYU Tisch",
      "skills": {
        "artistic": [
          "Filmmaking",
          " video",
          " photo"
        ],
        "softSkills": [
          "Communication",
          " organization"
        ],
        "technical": [
          "Adobe creative suite"
        ]
      },
      "user_id": "FAr3Oqr4GPViMovcSGyuEVINVh32",
      "users_liked": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
        }
      ]
    },
    "-N108AyY5OnQ9NBF316e": {
      "conversations": "",
      "favoriteEntreprenuer": "Dwayne johnson",
      "industryInterest": [
        "Film"
      ],
      "major": "Film and TV production",
      "name": "Evan Miller",
      "phoneNumber": "8146109873",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/FAr3Oqr4GPViMovcSGyuEVINVh32%2FBED42F63-E529-4A63-A147-2DC1D4B7E416.jpeg?alt=media&token=2369c58c-e4eb-4826-827b-2c5c7cd7a2b5",
      "projects": [
        {
          "greatestMoment": "Car explosion",
          "name": "Idle Speed short film",
          "projectDescription": "Proof of concept for feature film",
          "projectDuration": "8 months",
          "projectLink": "Not finished",
          "teamSize": "50"
        }
      ],
      "school": "NYU Tisch",
      "skills": {
        "artistic": [
          "Filmmaking",
          " video",
          " photo"
        ],
        "softSkills": [
          "Communication",
          " organization"
        ],
        "technical": [
          "Adobe creative suite"
        ]
      },
      "user_id": "FAr3Oqr4GPViMovcSGyuEVINVh32"
    },
    "-N108Ayg-UIEUe0qdilL": {
      "conversations": "",
      "favoriteEntreprenuer": "Dwayne johnson",
      "industryInterest": [
        "Film"
      ],
      "major": "Film and TV production",
      "name": "Evan Miller",
      "phoneNumber": "8146109873",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/FAr3Oqr4GPViMovcSGyuEVINVh32%2FBED42F63-E529-4A63-A147-2DC1D4B7E416.jpeg?alt=media&token=2369c58c-e4eb-4826-827b-2c5c7cd7a2b5",
      "projects": [
        {
          "greatestMoment": "Car explosion",
          "name": "Idle Speed short film",
          "projectDescription": "Proof of concept for feature film",
          "projectDuration": "8 months",
          "projectLink": "Not finished",
          "teamSize": "50"
        }
      ],
      "school": "NYU Tisch",
      "skills": {
        "artistic": [
          "Filmmaking",
          " video",
          " photo"
        ],
        "softSkills": [
          "Communication",
          " organization"
        ],
        "technical": [
          "Adobe creative suite"
        ]
      },
      "user_id": "FAr3Oqr4GPViMovcSGyuEVINVh32"
    },
    "-N108AymHWw-aJjGX_GO": {
      "conversations": "",
      "favoriteEntreprenuer": "Dwayne johnson",
      "industryInterest": [
        "Film"
      ],
      "major": "Film and TV production",
      "name": "Evan Miller",
      "phoneNumber": "8146109873",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/FAr3Oqr4GPViMovcSGyuEVINVh32%2FBED42F63-E529-4A63-A147-2DC1D4B7E416.jpeg?alt=media&token=2369c58c-e4eb-4826-827b-2c5c7cd7a2b5",
      "projects": [
        {
          "greatestMoment": "Car explosion",
          "name": "Idle Speed short film",
          "projectDescription": "Proof of concept for feature film",
          "projectDuration": "8 months",
          "projectLink": "Not finished",
          "teamSize": "50"
        }
      ],
      "school": "NYU Tisch",
      "skills": {
        "artistic": [
          "Filmmaking",
          " video",
          " photo"
        ],
        "softSkills": [
          "Communication",
          " organization"
        ],
        "technical": [
          "Adobe creative suite"
        ]
      },
      "user_id": "FAr3Oqr4GPViMovcSGyuEVINVh32"
    },
    "-N108AyqB4xcIEtLiRC_": {
      "conversations": "",
      "favoriteEntreprenuer": "Dwayne johnson",
      "industryInterest": [
        "Film"
      ],
      "major": "Film and TV production",
      "name": "Evan Miller",
      "phoneNumber": "8146109873",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/FAr3Oqr4GPViMovcSGyuEVINVh32%2FBED42F63-E529-4A63-A147-2DC1D4B7E416.jpeg?alt=media&token=2369c58c-e4eb-4826-827b-2c5c7cd7a2b5",
      "projects": [
        {
          "greatestMoment": "Car explosion",
          "name": "Idle Speed short film",
          "projectDescription": "Proof of concept for feature film",
          "projectDuration": "8 months",
          "projectLink": "Not finished",
          "teamSize": "50"
        }
      ],
      "school": "NYU Tisch",
      "skills": {
        "artistic": [
          "Filmmaking",
          " video",
          " photo"
        ],
        "softSkills": [
          "Communication",
          " organization"
        ],
        "technical": [
          "Adobe creative suite"
        ]
      },
      "user_id": "FAr3Oqr4GPViMovcSGyuEVINVh32"
    },
    "-N108Ayuly4-x-DkmkHx": {
      "conversations": "",
      "favoriteEntreprenuer": "Dwayne johnson",
      "industryInterest": [
        "Film"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        }
      ],
      "major": "Film and TV production",
      "name": "Evan Miller",
      "phoneNumber": "8146109873",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/FAr3Oqr4GPViMovcSGyuEVINVh32%2FBED42F63-E529-4A63-A147-2DC1D4B7E416.jpeg?alt=media&token=2369c58c-e4eb-4826-827b-2c5c7cd7a2b5",
      "projects": [
        {
          "greatestMoment": "Car explosion",
          "name": "Idle Speed short film",
          "projectDescription": "Proof of concept for feature film",
          "projectDuration": "8 months",
          "projectLink": "Not finished",
          "teamSize": "50"
        }
      ],
      "school": "NYU Tisch",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8WhEUSRIWzKQnQQ-"
      ],
      "skills": {
        "artistic": [
          "Filmmaking",
          " video",
          " photo"
        ],
        "softSkills": [
          "Communication",
          " organization"
        ],
        "technical": [
          "Adobe creative suite"
        ]
      },
      "user_id": "FAr3Oqr4GPViMovcSGyuEVINVh32"
    },
    "-N11QEWCkbxF-rKC5LsR": {
      "conversations": "",
      "favoriteEntreprenuer": "Vitalik Buterin",
      "industryInterest": [
        "Crypto/Web3"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
        }
      ],
      "major": "Manufacturing and Design Engineering",
      "name": "Kai Feinberg",
      "phoneNumber": "925 876 8621",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/yFGym4gu5yd0wMzra5Dacpszw3N2%2FIMG-4735.png?alt=media&token=60a9c68a-2259-4a45-a37e-f00242a8a1ba",
      "projects": [
        {
          "greatestMoment": "Meeting all the awesome people in the space",
          "name": "SCOUT Protocol",
          "projectDescription": "A platform to improve the experience of transferring crypto!",
          "projectDuration": "6 months ",
          "projectLink": "",
          "teamSize": "1"
        }
      ],
      "school": "Northwestern University",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8WhEUSRIWzKQnQQ-",
        "-N0c8zvawaMfrxL0kvmy"
      ],
      "skills": {
        "artistic": [
          "web design"
        ],
        "softSkills": [
          "good communicator",
          " work well in team setting",
          " independent",
          " responsible"
        ],
        "technical": [
          "Solidity",
          " JS",
          " React"
        ]
      },
      "user_id": "yFGym4gu5yd0wMzra5Dacpszw3N2"
    },
    "-N1B5fvhGPUAy020KdrA": {
      "conversations": "",
      "favoriteEntreprenuer": "Steve Jobs",
      "industryInterest": [
        "Music"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
        }
      ],
      "major": "IMC",
      "name": "Jeremiah Seraphine",
      "phoneNumber": "3122820949",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/q6WvJKg55fQU4z7DeUddRpw74xO2%2F600%20Block1.jpg?alt=media&token=fadfceb8-f518-43e4-afd6-9dbb5918f5dc",
      "projects": [
        {
          "greatestMoment": "Press accolades on first release",
          "name": "600 Block Records",
          "projectDescription": "Indie record label with music from Pugs Atomz, Killah Priest, Rockie Fresh, Imperial Boxmen, and Tusk57 with aspirations of building tech for labels or artists",
          "projectDuration": "1 year",
          "projectLink": "600blockrecords.com",
          "teamSize": "4"
        }
      ],
      "school": "Northwestern",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8WhEUSRIWzKQnQQ-",
        "-N0c8zvawaMfrxL0kvmy"
      ],
      "skills": {
        "artistic": [
          "Writing",
          " music production",
          " design",
          ""
        ],
        "softSkills": [
          "Sales",
          " management"
        ],
        "technical": [
          "Low code tools",
          " HTML/CSS",
          " growth sprints",
          " technical marketing",
          " product management"
        ]
      },
      "user_id": "q6WvJKg55fQU4z7DeUddRpw74xO2"
    },
    "-N1KpAMb9pyOA6HXS6_9": {
      "conversations": "",
      "favoriteEntreprenuer": "Josh Breite",
      "industryInterest": [
        "Crypto"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0fS92g7o2ZBd1wcGAa"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N1-w4iL1J9ka0kf3DdG"
        }
      ],
      "major": "Economics",
      "name": "Robbie Waxman",
      "phoneNumber": "9148068212",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/tntvKqa9UGeUjXyGRGx6SSIM2723%2FEMM01487.JPG?alt=media&token=d585e551-8fe0-4f14-a28a-19690308da92",
      "projects": [
        {
          "greatestMoment": "",
          "name": "entrepmatch",
          "projectDescription": "",
          "projectDuration": "",
          "projectLink": "",
          "teamSize": ""
        }
      ],
      "school": "Northwestern",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8WhEUSRIWzKQnQQ-",
        "-N0c8zvawaMfrxL0kvmy",
        "-N0fS92g7o2ZBd1wcGAa",
        "-N1-w4iL1J9ka0kf3DdG"
      ],
      "skills": {
        "artistic": [
          "Powerpoint"
        ],
        "softSkills": [
          "Speaking"
        ],
        "technical": [
          "Excel"
        ]
      },
      "user_id": "tntvKqa9UGeUjXyGRGx6SSIM2723"
    },
    "-N1PTAMbEvJJPNinICFf": {
      "conversations": "",
      "favoriteEntreprenuer": "Mark Cuban",
      "industryInterest": [
        "Tech",
        " fashion"
      ],
      "major": "Computer Science",
      "name": "Samar Saleem",
      "phoneNumber": "5166694433",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/VHx9ncSkohXtWlQ6dNxjr2Y8hs43%2F_X1A5293.jpg?alt=media&token=9e7406ca-3b2b-4a03-b6a7-459270ac1090",
      "projects": [
        {
          "greatestMoment": "Winning our in-class competition!",
          "name": "SYNC",
          "projectDescription": "A new era of asynchronous work for distributed teams.",
          "projectDuration": "5 months",
          "projectLink": "",
          "teamSize": "3"
        }
      ],
      "school": "Northwestern University",
      "skills": {
        "artistic": [
          "Adobe applications",
          " web design"
        ],
        "softSkills": [
          "leadership",
          " problem solving"
        ],
        "technical": [
          "Python",
          " CSS",
          " HTML",
          " Javascript",
          " Racket"
        ]
      },
      "user_id": "VHx9ncSkohXtWlQ6dNxjr2Y8hs43"
    },
    "-N1PTYg7tB4xcgaEpaaU": {
      "conversations": "",
      "favoriteEntreprenuer": "Marc Cuban",
      "industryInterest": [
        "Tech",
        " fashion"
      ],
      "major": "Computer Science",
      "name": "Samar Saleem",
      "phoneNumber": "5166694433",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/VHx9ncSkohXtWlQ6dNxjr2Y8hs43%2F_X1A5293.jpg?alt=media&token=d1ae9eee-cf1a-408a-be46-4adb940da5f6",
      "projects": [
        {
          "greatestMoment": "Winning our in class competition!",
          "name": "SYNC",
          "projectDescription": "A new era of asynchronous work for distributed teams.",
          "projectDuration": "5 months",
          "projectLink": "",
          "teamSize": "3"
        },
        {
          "greatestMoment": "",
          "name": "",
          "projectDescription": "",
          "projectDuration": "",
          "projectLink": "",
          "teamSize": ""
        }
      ],
      "school": "Northwestern",
      "skills": {
        "artistic": [
          "Adobe applications",
          " web design"
        ],
        "softSkills": [
          "leadership",
          " problem solving",
          " collaboration"
        ],
        "technical": [
          "python",
          " CSS",
          " HTML",
          " Javascript",
          " Racket"
        ]
      },
      "user_id": "VHx9ncSkohXtWlQ6dNxjr2Y8hs43"
    },
    "-N1p3GGjtiJHccezuIWx": {
      "conversations": "",
      "favoriteEntreprenuer": "",
      "industryInterest": [
        ""
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0fSO-HY_lkiXwnRjBP"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N1-fZgtUeMGLot57C-h"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N1-w4iL1J9ka0kf3DdG"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N1-xYdu361XBs-_Bn-f"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N1-yNT3y0E6zOSBwUJG"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N102qmHzIQ4AsIgJnqF"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N108AxeO0iNvIPXkOYv"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N108AyOC3CiABsmlfls"
        }
      ],
      "major": "",
      "name": "",
      "phoneNumber": "",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/76whsv5Fg6QYa3D5rK4LAm2jMhn2%2Fgit.JPG?alt=media&token=56e908ae-a020-4a62-b549-f38da44b3a43",
      "projects": [
        {
          "greatestMoment": "",
          "name": "",
          "projectDescription": "",
          "projectDuration": "",
          "projectLink": "",
          "teamSize": ""
        }
      ],
      "school": "UCF",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8WhEUSRIWzKQnQQ-",
        "-N0c8zvawaMfrxL0kvmy",
        "-N0fSO-HY_lkiXwnRjBP",
        "-N1-fZgtUeMGLot57C-h",
        "-N1-w4iL1J9ka0kf3DdG",
        "-N1-xYdu361XBs-_Bn-f",
        "-N1-yNT3y0E6zOSBwUJG",
        "-N102qmHzIQ4AsIgJnqF",
        "-N108AxeO0iNvIPXkOYv",
        "-N108AyOC3CiABsmlfls"
      ],
      "skills": {
        "artistic": [
          ""
        ],
        "softSkills": [
          ""
        ],
        "technical": [
          ""
        ]
      },
      "user_id": "76whsv5Fg6QYa3D5rK4LAm2jMhn2"
    },
    "-N1y89yc51TxgyRKdeDC": {
      "conversations": "",
      "favoriteEntreprenuer": "Self",
      "industryInterest": [
        "Blockchain's impact"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
        },
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
        }
      ],
      "major": "Business",
      "name": "karen gordon",
      "phoneNumber": "212-234-1234",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/KY3JPgAFlOXZaL1kMV0HB5SVIZw1%2FScreen%20Shot%202022-01-27%20at%201.49.11%20PM.png?alt=media&token=0485ed1b-1031-4744-b398-a43a2aab4812",
      "projects": [
        {
          "greatestMoment": "when I gave birth (what is the meaning of this question?)",
          "name": "I don't have a project. Do I need to have one? I didn't know this is only for those with projects",
          "projectDescription": "You want to know now?  Well I didn't know you wanted a project. I want to be on a project team cause I have amazing skills and knowledge in Blockchain NOTE: I couldn't move forward without loading a project image...so I found a pic to upload.  Why?  Create a field for comments. I think people will give you feedback. ",
          "projectDuration": "if I had one it would be 3 months",
          "projectLink": "me.com",
          "teamSize": "me"
        },
        {
          "greatestMoment": "",
          "name": "",
          "projectDescription": "",
          "projectDuration": "",
          "projectLink": "",
          "teamSize": ""
        },
        {
          "greatestMoment": "",
          "name": "",
          "projectDescription": "",
          "projectDuration": "",
          "projectLink": "",
          "teamSize": ""
        }
      ],
      "school": "Northwestern",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS",
        "-N0c8WhEUSRIWzKQnQQ-",
        "-N0c8zvawaMfrxL0kvmy"
      ],
      "skills": {
        "artistic": [
          "I am amazing",
          " canva",
          " ux",
          " ui"
        ],
        "softSkills": [
          "Lots of team building",
          " culture builds",
          " DEI",
          " equity"
        ],
        "technical": [
          "Rusty",
          " "
        ]
      },
      "user_id": "KY3JPgAFlOXZaL1kMV0HB5SVIZw1"
    },
    "-N2vl2CFwxmwGygf2EZ1": {
      "conversations": "",
      "favoriteEntreprenuer": "S",
      "industryInterest": [
        "S"
      ],
      "liked_users": [
        {
          "liked_field": "temp_field",
          "liked_message": "temp_message",
          "liking_user_id": "-N0c7e1ve1uuQ8y8JnuS"
        }
      ],
      "major": "S",
      "name": "a",
      "phoneNumber": "3",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/bfIVLXLDd8P946wBWz03yn0NBLn1%2F5840790.jpeg?alt=media&token=077cee5e-b033-48b2-ad26-e16369bf1767",
      "projects": [
        {
          "greatestMoment": "S",
          "name": "S",
          "projectDescription": "S",
          "projectDuration": "S",
          "projectLink": "S",
          "teamSize": "S"
        }
      ],
      "school": "S",
      "seen_users": [
        "-N0c7e1ve1uuQ8y8JnuS"
      ],
      "skills": {
        "artistic": [
          "SS"
        ],
        "softSkills": [
          "S"
        ],
        "technical": [
          ""
        ]
      },
      "user_id": "bfIVLXLDd8P946wBWz03yn0NBLn1"
    },
    "-N3jLdG8D17VibrytPvV": {
      "conversations": "",
      "favoriteEntreprenuer": "Elon",
      "industryInterest": [
        "Tech"
      ],
      "major": "CS",
      "name": "Amritanshu",
      "phoneNumber": "123456789",
      "pictures": "https://firebasestorage.googleapis.com/v0/b/entrepmatch.appspot.com/o/iEMqBNNZpCOcck2hUe8UOaQL7Az1%2Fblack_box.jpeg?alt=media&token=0f951db0-82b5-46fe-b272-a67131e9d6a4",
      "projects": [
        {
          "greatestMoment": "Final demo",
          "name": "Entrep Match",
          "projectDescription": "Match with your future startup founder!",
          "projectDuration": "1 month",
          "projectLink": "www.ipsolorem.com",
          "teamSize": "8"
        }
      ],
      "school": "NU",
      "skills": {
        "artistic": [
          "Digital Design"
        ],
        "softSkills": [
          "Leadership"
        ],
        "technical": [
          "React"
        ]
      },
      "user_id": "iEMqBNNZpCOcck2hUe8UOaQL7Az1"
    }
  }
}]

const singleUser =  {
  "conversations": [
    {
      "message": "Hello",
      "receiving_userID": "-N0c8WhEUSRIWzKQnQQ-",
      "sending_userID": "-N0c7e1ve1uuQ8y8JnuS",
      "timestamp": 1651015268747
    },
    {
      "message": "Hi",
      "receiving_userID": "-N0c8WhEUSRIWzKQnQQ-",
      "sending_userID": "-N0c7e1ve1uuQ8y8JnuS",
      "timestamp": 1651015286297
    }
  ],
  "favoriteEntreprenuer": "Steve Jobs",
  "industryInterest": [
    "EdTech",
    " Consumer",
    " Crypto"
  ],
  "liked_users": [
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "liking_user_id": "-N0c8WhEUSRIWzKQnQQ-"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "liking_user_id": "-N0c8zvawaMfrxL0kvmy"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "liking_user_id": "-N1-fZgtUeMGLot57C-h"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "liking_user_id": "-N1-xYdu361XBs-_Bn-f"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "liking_user_id": "-N1-yNT3y0E6zOSBwUJG"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "liking_user_id": "-N108AxeO0iNvIPXkOYv"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "liking_user_id": "-N108AyOC3CiABsmlfls"
    }
  ],
  "major": "Economics, Business, Entrepreneurship",
  "name": "Robbie Waxman",
  "phoneNumber": "9148068212",
  "pictures": "https://thegarage.northwestern.edu/wp-content/uploads/2021/03/Robbie-Waxman.jpg",
  "projects": [
    {
      "greatestMoment": "150th Client",
      "name": "Mobile Camp",
      "projectDescription": "Backyard Summer Camp",
      "projectDuration": "2 years",
      "projectLink": "link",
      "teamSize": "50+"
    },
    {
      "greatestMoment": "",
      "name": "",
      "projectDescription": "",
      "projectDuration": "",
      "projectLink": "",
      "teamSize": ""
    }
  ],
  "school": "Northwestern",
  "seen_users": [
    "-N0c8WhEUSRIWzKQnQQ-",
    "-N0c8zvawaMfrxL0kvmy",
    "-N1-fZgtUeMGLot57C-h",
    "-N1-xYdu361XBs-_Bn-f",
    "-N1-yNT3y0E6zOSBwUJG",
    "-N108AxeO0iNvIPXkOYv",
    "-N108AyOC3CiABsmlfls"
  ],
  "skills": {
    "artistic": [
      "Powerpoint",
      " Canva"
    ],
    "softSkills": [
      "Leadership",
      " Storytelling"
    ],
    "technical": [
      "Excel",
      " Financial Modeling"
    ]
  },
  "user_id": "4n903odyOTdWvocTHmTEViQhZgK2",
  "users_liked": [
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N0c8WhEUSRIWzKQnQQ-"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N0cO5cYVHUGEveGmAmR"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N0cNiy6JOaEOd528ryM"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N0fS92g7o2ZBd1wcGAa"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N0fSO-HY_lkiXwnRjBP"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N1-fZgtUeMGLot57C-h"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N1-yNT3y0E6zOSBwUJG"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N108Ayuly4-x-DkmkHx"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N1B5fvhGPUAy020KdrA"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N1KpAMb9pyOA6HXS6_9"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N1p3GGjtiJHccezuIWx"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N1y89yc51TxgyRKdeDC"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N11QEWCkbxF-rKC5LsR"
    },
    {
      "liked_field": "temp_field",
      "liked_message": "temp_message",
      "receiving_user_id": "-N2vl2CFwxmwGygf2EZ1"
    }
  ]
}

it('no user then sign In', async () => {
  useData.mockReturnValue([userInfo, false, null]);
  useUserState.mockReturnValue([null]);
  render(<SignUp />);
  const title = await screen.findByText(/Enter/i);
  expect(title).toBeInTheDocument();
});

it('empty fields do not allow user to sign up', async () => {
  useData.mockReturnValue([userInfo, false, null]);
  useUserState.mockReturnValue([null]);
  render(<SignUp />);
  const title = await screen.findByText(/Enter/i);
  userEvent.click(title)
  const linkElement = screen.getByText(/About You/i);
  expect(linkElement).toBeInTheDocument();  
});




// it('empty skills leads to alert', () => {
//   render(<SignUp />);
//   const incrementButton = screen.getByText(/Enter/i)
  
//   userEvent.click(incrementButton)
//   const linkElement = screen.getByText(/"please upload your profile image/i);
//   expect(linkElement).toBeInTheDocument();


// })
