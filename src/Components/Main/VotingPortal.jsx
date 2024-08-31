import React from 'react';
import './VotingPortal.css';
import result from './result.jpg'
import track from './track.jpg'
const cardData = [
  {
    title: "Register as a Voter",
    description: "Become a registered voter to participate in upcoming elections. ",
    image: "https://media.licdn.com/dms/image/D5612AQHa4isjQQasYg/article-cover_image-shrink_600_2000/0/1692357951635?e=2147483647&v=beta&t=3D0RtQH4XctRshGX0xO97WGHJQa2GAmA895YUnvR0v4"
  },
  {
    title: "Cast Your Vote",
    description: "Submit your vote securely online. Your vote is your power—make it count!",
    image: "https://thumbs.dreamstime.com/b/cast-your-vote-words-orange-round-stamp-cast-your-vote-words-orange-round-stamp-236523178.jpg"
  },
  {
    title: "Track Your Vote",
    description: "Ensure your vote is counted. Track the status of your vote in real-time.",
    image: `${track}`
  },
  {
    title: "View Election Results",
    description: "See the results of the elections as they are announced. Stay informed with live updates.",
    image: `${result}`
  }
];

const VotingPortal = () => {
  return (
    <div className="box-container">
      {cardData.map((card, index) => (
        <div className="box-wrapper" key={index}>
          <div className="card">
            <img src={card.image} alt={card.title} />
            <div className="card__content">
              <p className="card__title">{card.title}</p>
              <p className="card__description">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VotingPortal;
