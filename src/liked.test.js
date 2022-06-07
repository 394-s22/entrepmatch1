import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useData, useUserState } from './utilities/firebase.js';
import Likes from "./routes/likes"
import { BrowserRouter, Routes, Route } from "react-router-dom";

jest.mock('./utilities/firebase.js');

const userInfo = {
    "cu": "-N-eZIUmBfQ9fQJKYb4H",
    "users": {
        "-N0c7e1ve1uuQ8y8JnuS": {
            "conversations": [
            ],
            "favoriteEntreprenuer": "Steve Jobs",
            "industryInterest": [
                "EdTech",
                " Consumer",
                " Crypto"
            ],
            "liked_users": [
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
                "-N0c8WhEUSRIWzKQnQQ-"
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
                }
            ]
        }
    }
}

// Mia's test 2

it('shows name on settings page', async () => {
    useData.mockReturnValue([userInfo, false, null]);
    useUserState.mockReturnValue([{ displayName: 'Robbie Waxman', uid: '4n903odyOTdWvocTHmTEViQhZgK2' }]);
    render(<BrowserRouter> <Likes /></BrowserRouter>);
    const title = await screen.findByText(/No users who have liked you/i);
    expect(title).toBeInTheDocument();
    expect(() => screen.getByText(/Alex Lee/i)).toThrow()
});

