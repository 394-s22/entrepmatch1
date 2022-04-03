import logo from './logo.svg';
import './App.css';


const userInfo = {
  users: {
    "Josh Breite": {
    "pictures" : "https://josh-zabar-breite-portfolio.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2Fd6ed8001-e727-4d2d-ad7e-6f6311dfb7d9%2Fimages%2F94dc677d-efd0-4b6f-88e2-39d7f33f549d.jpg&w=3840&q=80",
    "projects" : {
      "Induction Learning" : {
        "projectDescription" : "Reimaning the education landscape.",
        "teamSize" : 6,
        "projectDuration": "2 years",
        "greatestMoment": "Deploying the app.",
        "projectLink" : "https://www.inductionlearning.com/"
        },
      "EntrepMatch" : {
        "projectDescription" : "Find your Cofounders.",
        "teamSize" : 8,
        "projectDuration": "1 week",
        "greatestMoment": "Building in React.",
        "projectLink" : "https://www.ycombinator.com/"
      }
    },
    "favoriteEntreprenuer" : "Satoshi Nakamoto",
    "industryInterest" : ["Crypto", "FinTech"],
    "school" : "Northwestern",
    "major" : "Computer Science",
    "skills" : {
      "artistic" : [],
      "technical" : ["React", "Python", "SQL"],
      "softSkills" : ["Organization", "Notion"]
      } 
    },
    "Elon Musk":
    {
      "pictures" : "https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg",
      "projects" : {
        "Tesla" : {
          "projectDescription" : "Electric Vehicles.",
          "teamSize" : 3000,
          "projectDuration": "4 years",
          "greatestMoment": "Sustainable World.",
          "projectLink" : "https://www.tesla.com/"
          },
        "PayPal" : {
          "projectDescription" : "Pay people online.",
          "teamSize" : 5000,
          "projectDuration": "10 years",
          "greatestMoment": "First online payment.",
          "projectLink" : "https://www.paypal.com/us/home/"
        }
      },
      "favoriteEntreprenuer" : "Elon Musk",
      "industryInterest" : ["Crypto", "FinTech", "Sustainables"],
      "school" : "University of Pennsylvannia",
      "major" : "Computer Science",
      "skills" : {
        "artistic" : [],
        "technical" : ["React", "Python", "SQL"],
        "softSkills" : ["Organization", "Notion", "Leadership"]
        } 
      },
  }   
}

const userInfoList = ({ users }) => (
  <div>
  { Object.values(users).map(user => <User user={ users } />) }
  </div>
);

const User = ( {user} ) => (
  <div>
    {user.name},
    {user.pictures}
  </div>
);

function App() {
  console.log(userInfo.users);
  return (
    <div >
      <userInfoList users= {userInfo.users} />
    </div>
  );
}

export default App;
