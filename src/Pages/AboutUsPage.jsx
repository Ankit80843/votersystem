


    import React from 'react';
    import './AboutUsPage.css'; // Import your CSS file
    
  
    
    const AboutUsPage = () => {
      const sections = [
        {
          title: "A Constitutional Body",
          content: `India is a Socialist, Secular, Democratic Republic and the largest democracy in the World. The modern Indian nation state came into existence on 15th of August 1947. Since then free and fair elections have been held at regular intervals as per the principles enshrined in the Constitution, Electoral Laws and System.
      
      The Constitution of India has vested in the Election Commission of India the superintendence, direction and control of the entire process for conduct of elections to Parliament and Legislature of every State and to the offices of President and Vice-President of India.
      
      Election Commission of India is a permanent Constitutional Body. The Election Commission was established in accordance with the Constitution on 25th January 1950. The Commission celebrated its Golden Jubilee in 2001.
      
      Originally the commission had only a Chief Election Commissioner. It currently consists of Chief Election Commissioner and two Election Commissioners.
      
      For the first time two additional Commissioners were appointed on 16th October 1989 but they had a very short tenure till 1st January 1990. Later, on 1st October 1993 two additional Election Commissioners were appointed. The concept of multi-member Commission has been in operation since then, with decision making power by majority vote.`
        },
        {
          title: "Appointment & Tenure Of Commissioners",
          content: `The President appoints Chief Election Commissioner and Election Commissioners. They have tenure of six years, or up to the age of 65 years, whichever is earlier. They enjoy the same status and receive salary and perks as available to Judges of the Supreme Court of India. The Chief Election Commissioner can be removed from office in like manner and on like grounds as a judge of the Supreme Court.`
        },
        {
          title: "Transaction of Business",
          content: `The Commission transacts its business by holding regular meetings and also by circulation of papers. All Election Commissioners have equal say in the decision making of the Commission. The Commission, from time to time, delegates some of its executive functions to its officers in its Secretariat.`
        },
        {
          title: "The Setup",
          content: `The Commission has a separate Secretariat at New Delhi, consisting of about 550 officials, in a hierarchical set up.
      
      Five or Six Deputy Election Commissioners and Director Generals who are the senior officers in the Secretariat assist the Commission. They are generally appointed from the national civil service of the country and are selected and appointed by the Commission with tenure. Directors, Principal Secretaries, and Secretaries, Under Secretaries and Deputy Secretary support the Deputy Election Commissioners and Director Generals in turn. There is functional and territorial distribution of work in the Commission. The work is organised in Divisions, Branches and Sections; each of the last mentioned units is in charge of a Section Officer. The main functional divisions are Administration, Electoral Roll, Election Expenditure Management, Information Systems, International Cooperation, Judicial, Media, Planning, Political Parties, Secretariat Co-ordination, and Systematic Voters' Education and Electoral Participation (SVEEP). The territorial work is distributed among separate units responsible for different Zones into which the 36 constituent States and Union Territories of the country are grouped for convenience of management.
      
      At the state level, the election work is supervised, subject to overall superintendence, direction and control of the Commission, by the Chief Electoral Officer of the State, who is appointed by the Commission from amongst senior civil servants from a panel of officers proposed by the concerned state government. He is, in most of the States, a full time officer and has a small team of supporting staff.
      
      At the district and constituency levels, the District Election Officers, Electoral Registration Officers and Returning Officers, who are assisted by a large number of functionaries, perform election work. They all perform their functions relating to elections in addition to their other responsibilities. During election time, however, they are available to the Commission, more or less, on a full time basis.
      
      The gigantic task force for conducting a countrywide general election consists of more than twelve million polling personnel and civil police forces. This huge election machinery is deemed to be on deputation to the Election Commission and is subject to its control, superintendence and discipline during the election period, extending over a period of one and half to two months.`
        },
        {
          title: "Budget & Expenditure",
          content: `The Secretariat of the Commission has an independent budget, which is finalised directly in consultation between the Commission and the Finance Ministry of the Union Government. The latter generally accepts the recommendations of the Commission for its budgets. The major expenditure on actual conduct of elections is, however, reflected in the budgets of the Ministry of Law & Justice (for Government of India share) and the concerned States/UTs. If elections are being held only for the Parliament, the expenditure is borne entirely by the Union Government while for the elections being held only for the State Legislature, the expenditure is borne entirely by the concerned State. In case of simultaneous elections to the Parliament and State Legislature, the expenditure is shared equally between the Union and the State Governments. For Capital equipment, expenditure related to preparation for electoral rolls and the scheme for Electors' Identity Cards too, the expenditure is shared equally.`
        },
        {
          title: "Executive Interference Barred",
          content: `In the performance of its functions, Election Commission is insulated from executive interference. It is the Commission which decides the election schedules for the conduct of elections, whether general elections or bye-elections. Again, it is the Commission which decides the location of polling stations, assignment of voters to the polling stations, location of counting centres, arrangements to be made in and around polling stations and counting centres and all allied matters.`
        },
        {
          title: "Political Parties & The Commission",
          content: `Political parties are registered with the Election Commission under the law. The Commission ensures inner party democracy in their functioning by insisting upon them to hold their organizational elections at periodic intervals. Political Parties so registered with it are granted recognition at the State and National levels by the Election Commission on the basis of their poll performance at general elections according to criteria prescribed by it. The Commission, as a part of its quasi-judicial jurisdiction, also settles disputes between the splinter groups of such recognised parties.
      
      Election Commission ensures a level playing field for the political parties in election fray, through strict observance by them of a Model Code of Conduct evolved with the consensus of political parties.
      
      The Commission holds periodical consultations with the political parties on matters connected with the conduct of elections; compliance of Model Code of Conduct and new measures proposed to be introduced by the Commission on election related matters.`
        },
        {
          title: "Advisory Jurisdiction & Quasi-Judicial Functions",
          content: `Under the Constitution, the Commission also has advisory jurisdiction in the matter of post election disqualification of sitting members of Parliament and State Legislatures. The cases of persons found guilty of corrupt practices at elections which come before the Supreme Court and High Courts are also referred to the Commission for its opinion on the question as to whether such person shall be disqualified from contesting elections and, if so, for what period. The opinion of the Commission in all such matters is binding on the President or, as the case may be, the Governor to whom such opinion is tendered.
      
      The Commission has the power to disqualify a candidate who has failed to lodge an account of his election expenses within the time and in the manner prescribed by law. The Commission has also the power for removing or reducing the period of such disqualification as also other disqualification under the law.`
        },
        {
          title: "Judicial Review",
          content: `The elections to the Parliament and State Legislatures can be challenged in the High Court and the Supreme Court of India by an election petition after elections are over. By virtue of Article 329 of the Constitution once the actual process of elections is started, the judiciary cannot intervene by entertaining petitions on the conduct of the polls. Once the polls are completed and result declared, the Commission cannot review any result on its own. This can only be reviewed through the process of an election petition, which can be filed before the High Court, in respect of elections to the Parliament and State Legislatures. In respect of elections for the offices of the President and Vice President, such petitions can only be filed before the Supreme Court.`
        },
        {
          title: "Media Policy",
          content: `The Commission has a comprehensive policy for the media. It holds regular briefings for the mass media-print and electronic, on a regular basis, at close intervals during the election period and on specific occasions as necessary on other occasions. The representatives of the media are also provided facilities to report on actual conduct of poll and counting. They are allowed entry into polling stations and counting centres on the basis of authority letters issued by the Commission. They include members of both international and national media. The Commission also publishes statistical reports and other documents which are available in the public domain.`
        },
        {
          title: "Voter Education",
          content: `Systematic Voters' Education & Electoral Participation (SVEEP) is a Multi-intervention programme that reaches out to educate citizens about the electoral process in order to increase awareness and participation. The objectives of SVEEP are to increase electoral participation through voter registration and turnout, to increase qualitative participation in terms of ethical and informed voting and continuous electoral and democracy education.`
        },
        {
          title: "International Co-Operation",
          content: `India, as the largest practicing democracy in the world and with over 75 years’ record of holding effective, transparent and credible elections, playing a significant role in the international arena. The Commission has established linkages and has been actively cooperating with Election Management Bodies (EMBs) of other countries and International Organizations. The Commission shares its experiences and knowledge in various forums and also contributes to various international conferences and initiatives related to electoral processes and democracy.`
        },
        {
          title: "New Initiatives",
          content: `Election Commission is constantly working to improve the electoral process and adapt to new technologies. Recent initiatives include the use of Electronic Voting Machines (EVMs) and Voter Verifiable Paper Audit Trails (VVPATs) to enhance the transparency and reliability of elections. The Commission is also exploring measures to improve voter registration, such as online registration and updating of voter information, and initiatives to increase voter turnout through targeted awareness campaigns.`
        }
      ];
      return (
        <div style={{
          background:"#D2E0FB"
        }}>
          <div className="heading1">
            <p>About Election Commission of India</p>
          </div>
          <div className="img">
            {/* <img src="https://www.eci.gov.in/newimg/eci-building-banner-01.jpg" alt="ECI Building" /> */}
            <img src="https://www.eci.gov.in/newimg/india-map-banner-01.jpg" alt="India Map" />
            <img src="https://www.eci.gov.in/newimg/voterday-banner-01.jpg" alt="Voter Day" />
            <img src="https://www.eci.gov.in/newimg/vote-banner-01.jpg" alt="Vote Banner" />
            <img src="https://www.eci.gov.in/newimg/voting-day-banner-01.jpg" alt="Voting Day" />
          </div>
          <div className="text">
        
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default AboutUsPage;
    