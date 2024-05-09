import React from 'react';
import axios from 'axios';
import './Launches.css'

const LaunchCard = ({ launch, onClick }) => {
  return (
    <div className="launch-card" onClick={() => onClick(launch)}>
      <h2>{launch.mission_name}</h2>
      {launch.links.mission_patch && (
        <img
          src={launch.links.mission_patch}
          alt={launch.mission_name}
          className="launch-image"
          style={{ width: '100px', height: '100px' }}
        />
      )}
      <p>Rocket: {launch.rocket.rocket_name}</p>
      <p>Launch Date: {new Date(launch.launch_date_utc).toLocaleDateString()}</p>
      
    </div>
  );
};

const LaunchExpanded = ({ launch, onClose }) => {
  return (
    <div className="launch-expanded">
      <h2>{launch.mission_name}</h2>
      {launch.links.mission_patch && (
        <img
          src={launch.links.mission_patch}
          alt={launch.mission_name}
          className="launch-image"
          style={{ width: '100px', height: '100px' }}

        />
      )}
      <p>Rocket: {launch.rocket.rocket_name}</p>
      <p>Launch Date: {new Date(launch.launch_date_utc).toLocaleDateString()}</p>
      <p>Details:{launch.details}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const LaunchList = ({ launches }) => {
  const [expandedLaunch, setExpandedLaunch] = React.useState(null);

  const handleLaunchClick = (launch) => {
    setExpandedLaunch(launch);
  };

  const handleCloseExpanded = () => {
    setExpandedLaunch(null);
  };

  return (
    <div className="launch-list">
      {launches.map((launch) => (
        <React.Fragment key={launch.flight_number}>
          {expandedLaunch === launch ? (
            <LaunchExpanded launch={launch} onClose={handleCloseExpanded} />
          ) : (
            <LaunchCard launch={launch} onClick={handleLaunchClick} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const App = () => {
  const [launches, setLaunches] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/launches');
        setLaunches(response.data);
      } catch (error) {
        console.error('Error fetching launches:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App bg-light ">
      <h1 className='d mt-4 mb-3 text-bg-warning' >SpaceX Launches</h1>
      <LaunchList launches={launches} />
    </div>
  );
};

export default App;
