import React from 'react';
import './MissionPage.css'; // Import your custom CSS file for styling

const MissionPage = () => {
  return (
    <div className="mission-container">
      {/* <header className="mission-header">
        <h1 className="mission-title">Our Mission</h1>
      </header> */}
       <div className="heading">
            <p>Our Mission</p>
          </div>
      <section className="mission-content">
        <p>
          At the heart of our electoral system lies a commitment to ensuring that
          every citizen's voice is heard and that the democratic process is fair
          and transparent. Our mission is to facilitate the smooth conduct of
          elections in India by leveraging technology and upholding the principles
          of democracy, integrity, and inclusivity.
        </p>
        <h2>Objectives</h2>
        <ul>
          <li>
            <strong>Ensure Free and Fair Elections:</strong> We strive to provide
            a transparent and impartial electoral process, safeguarding the rights
            of all voters and candidates.
          </li>
          <li>
            <strong>Promote Voter Education:</strong> Educate citizens about the
            importance of voting, the electoral process, and their rights and
            responsibilities as voters.
          </li>
          <li>
            <strong>Leverage Technology:</strong> Implement advanced technologies
            to enhance the efficiency and security of the election process, including
            electronic voting machines and voter verification systems.
          </li>
          <li>
            <strong>Ensure Accessibility:</strong> Make the electoral process
            accessible to all eligible voters, including those with disabilities
            and those living in remote areas.
          </li>
          <li>
            <strong>Foster Public Trust:</strong> Maintain transparency and
            accountability in all electoral processes to build and sustain public trust
            in the electoral system.
          </li>
        </ul>
        <h2>Key Initiatives</h2>
        <p>
          To achieve our mission, we have undertaken several key initiatives:
        </p>
        <ul>
          <li>
            <strong>Digital Voter Registration:</strong> Simplify and modernize the
            voter registration process through an online portal, making it easier for
            citizens to register and update their information.
          </li>
          <li>
            <strong>Election Monitoring:</strong> Deploy teams of election monitors
            to ensure that all stages of the electoral process are conducted fairly
            and in accordance with the law.
          </li>
          <li>
            <strong>Voter Helplines:</strong> Establish dedicated helplines to
            assist voters with any questions or issues they may have regarding the
            voting process.
          </li>
          <li>
            <strong>Public Awareness Campaigns:</strong> Conduct outreach programs
            and awareness campaigns to educate citizens about the importance of
            participating in elections and staying informed about electoral
            procedures.
          </li>
          <li>
            <strong>Data Security Measures:</strong> Implement robust security
            measures to protect the integrity and confidentiality of election data
            and voter information.
          </li>
        </ul>
        <h2>Looking Ahead</h2>
        <p>
          As we look to the future, we remain committed to continuously improving
          our electoral processes and adapting to new challenges and opportunities.
          Our focus will be on enhancing the voter experience, incorporating
          innovative solutions, and maintaining the highest standards of
          integrity and transparency.
        </p>
      </section>
    </div>
  );
};

export default MissionPage;
