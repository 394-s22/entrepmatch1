import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useData, useUserState } from './utilities/firebase.js';
import App from './App';
import Settings from "./routes/settings";
import ProfileEdit from "./components/profileEdit.js"


jest.mock('./utilities/firebase.js');

const singleUser = {
  "conversations": [
  ],
  "favoriteEntreprenuer": "Steve Jobs",
  "industryInterest": [
    "EdTech",
    " Consumer",
    " Crypto"
  ],
  "liked_users": [],
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
  "user_id": "1",
  "users_liked": []
}
const userInfo = [{
  "cu": "1",
  "users": { "1": singleUser }
}]



it('shows the micro title', async () => {
  useData.mockReturnValue([userInfo, false, null]);
  useUserState.mockReturnValue([null]);
  render(<App />);
  const title = await screen.findByText(/🚀 micro/i);
  expect(title).toBeInTheDocument();
});

it('shows Sign In if not logged in', async () => {
  useData.mockReturnValue([userInfo, false, null]);
  useUserState.mockReturnValue([null]);
  render(<App />);
  const button = await screen.findByText(/Sign In/i);
  expect(button).toBeInTheDocument();
});

it('shows Sign Out if logged in', async () => {
  useData.mockReturnValue([userInfo, false, null]);
  useUserState.mockReturnValue([{ displayName: 'Test user' }]);
  render(<App />);
  const button = await screen.findByText(/Sign Out/i);
  expect(button).toBeInTheDocument();
});

// it('settings page displays name', async () => {
//   useData.mockReturnValue([userInfo, false, null]);
//   useUserState.mockReturnValue([{ displayName: 'Test user' }]);
//   render(<Settings />);
//   const title = await screen.findByText(/Sign Out/i);
//   expect(title).toBeInTheDocument();
// });