import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useData, useUserState } from '/Users/amritanshuray/Desktop/NUClass/Spring_394_Agile/entrepmatch1/src/utilities/firebase.js';
import App from './App';

it('shows the micro title', async () => {
  render(<App />);
  const title = await screen.findByText(/🚀 micro/i);
  expect(title).toBeInTheDocument();
});

it('shows Sign In if not logged in', async () => {
  render(<App />);
  const button = await screen.findByText(/Sign In/i);
  expect(button).toBeInTheDocument();
});

jest.mock('/Users/amritanshuray/Desktop/NUClass/Spring_394_Agile/entrepmatch1/src/utilities/firebase.js');

const mockUserData = {
  name : "Robbie Waxman"
};


it('logs error if no user', async () => {
  useData.mockReturnValue([mockUserData, false, null]);
  useUserState.mockReturnValue([null]);
  render();
  const title = 
  expect(title).toBeInTheDocument();
});

// export const user_check = () => {
//   const user = useUserState();
//   user ? {} : console.error('user not logged in');
// };

// describe('doing stuff', () => {
//   it('should do stuff', async () => {
//     const consoleErrorSpy = jest.spyOn(console, 'error');
    
//     user_check();
    
//     expect(consoleErrorSpy).toHaveBeenCalledTimes(0); // FAIL
//   });
// });

// it('shows Sign Out if logged in', async () => {
//   useData.mockReturnValue([mockUser, false, null]);
//   useUserState.mockReturnValue([{ displayName: 'Joe' }]);
//   render();
//   const button = await screen.queryByText(/Sign Out/i);
//   expect(b