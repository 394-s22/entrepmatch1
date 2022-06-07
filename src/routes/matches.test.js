import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useData, useUserState } from '../utilities/firebase.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Matches from './matches.js';
import { Router } from 'express';

jest.mock('../utilities/firebase.js');

const userInfo = {
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
      }
    }
  }

// Amritanshu Test 1

  it('renders the matches when matches are present, else renders blank', async () => {
    useData.mockReturnValue([userInfo, false, null]);
    useUserState.mockReturnValue([null]);
    render(<BrowserRouter> <Matches /></BrowserRouter>);
    const matches_render = await screen.getByTestId('PeopleIcon');
    expect(matches_render).toBeInTheDocument();
  });