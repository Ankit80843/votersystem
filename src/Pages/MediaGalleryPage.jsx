import React, { useState, useEffect } from 'react';
import './MediaGalleryPage.css';

const mediaData = [
  // Existing images
  {
    type: 'image',
    url: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-197616,resizemode-75,msid-105591567/news/elections/assembly-elections/telangana-assembly-elections/telangana-polls-here-is-how-to-check-live-status-of-polling-booth-in-hyderabad/bikaner-nov-25-ani-voters-lined-up-at-a-polling-station-to-cast-their-votes-.jpg',
    description: 'Voters lined up at a polling station',
    category: 'Photos'
  },
  {
    type: 'image',
    url: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/19/full/1713548351-9207.jpg?im=FeatureCrop,size=(826,465)',
    description: 'Election Booth Setup',
    category: 'Photos'
  },
  {
    type: 'image',
    url: 'https://img.lemde.fr/2024/05/24/0/0/6600/4400/664/0/75/0/900bf89_8696d88150ca4433bd074f172cd3f240-0-6c41c0a2be504f8c9d1b3b792a1a25c9.jpg',
    description: 'Election Day',
    category: 'Photos'
  },
  {
    type: 'image',
    url: 'https://ca-times.brightspotcdn.com/dims4/default/2198a84/2147483647/strip/true/crop/2400x1590+0+0/resize/1200x795!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fae%2Fc4%2F23a8c98b528840dd959117ab0bf7%2F98cec4998008432ab5573b0a38f8c75d',
    description: 'Polling Station',
    category: 'Photos'
  },
  // New images
  {
    type: 'image',
    url: 'https://asiasociety.org/sites/default/files/styles/1200w/public/2019-04/GettyImages-1137857592.jpg',
    description: 'Election Campaign Poster',
    category: 'Photos'
  },
  {
    type: 'image',
    url: 'https://s.abcnews.com/images/International/india-election3-rt-ml-190411_hpMain.jpg',
    description: 'Election Scene',
    category: 'Photos'
  },
  {
    type: 'image',
    url: 'https://cdn.britannica.com/57/255857-050-C7A4F5EE/counting-center-bharat-nagar-in-new-delhi-india-for-lok-sabha-elections.jpg',
    description: 'Counting Center',
    category: 'Photos'
  },
  {
    type: 'image',
    url: 'https://images.news18.com/ibnlive/uploads/2023/11/rajasthan-election-2023-polling-2023-11-760f4e7fa2586e0d0352651faa5af6ef.jpg?impolicy=website&width=640&height=480',
    description: 'Polling Station',
    category: 'Photos'
  },
  {
    type: 'image',
    url: 'https://images.indianexpress.com/2024/04/Untitled-2024-04-18T155553.099.jpeg?w=414',
    description: 'Election Booth',
    category: 'Photos'
  },
  {
    type: 'image',
    url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/India_Today_Lok_sabha_election_2_0.jpeg?size=690:388',
    description: 'Election Coverage',
    category: 'Photos'
  },
  // Existing videos
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=UBNcKSGSZBk',
    description: 'Election Campaign Highlights',
    category: 'Videos'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=R8Z9XI9EwZ4',
    description: 'Voter Education',
    category: 'Videos'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=PFPFVdZTrZQ',
    description: 'Election Process Overview',
    category: 'Videos'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=ytFYTVgJ5mc',
    description: 'Polling Day Procedures',
    category: 'Videos'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=to324JIljf8',
    description: 'Election Day Insights',
    category: 'Videos'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=ni26kprA55Q',
    description: 'Election Analysis',
    category: 'Videos'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=MD896LoctMo',
    description: 'Voter Registration Process',
    category: 'Videos'
  }
];

const MediaGalleryPage = () => {
  const [mediaItems, setMediaItems] = useState(mediaData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filterMedia = () => {
    return mediaItems.filter(item =>
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      (item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  useEffect(() => {
    // Fetch media data from an API or server if needed
  }, []);

  return (
    <div className="media-gallery">
      <div className='heading"'>
        <h1>Media Gallery</h1>
        <p>Explore the rich media resources related to elections.</p>
        <div className="filter-search">
          <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value="All">All Categories</option>
            <option value="Photos">Photos</option>
            <option value="Videos">Videos</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </div>
      <main>
        <div className="media-grid">
          {filterMedia().map((item, index) => (
            <div key={index} className="media-item">
              {item.type === 'image' ? (
                <img src={item.url} alt={item.description} />
              ) : (
                <iframe
                  src={item.url.replace('watch?v=', 'embed/')}
                  title={item.description}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        {/* Add pagination or infinite scroll here */}
      </main>
      <footer>
        <p>Credits: Media provided by Election Commission of India.</p>
        <p>Contact us for media-related inquiries.</p>
      </footer>
    </div>
  );
};

export default MediaGalleryPage;
