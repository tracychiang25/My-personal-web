import { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../index.css';


const GitHubCommitGraph = ({ username }) => {
  const [commitData, setCommitData] = useState([]);

  useEffect(() => {
    const fetchCommitData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        if (!response.ok) {
          throw new Error(`Failed to fetch commit data: ${response.status}`);
        }
        const eventData = await response.json();
        const commitActivity = eventData
          .filter(event => event.type === 'PushEvent')
          .map(event => {
            return {
              date: event.created_at.substring(0, 10), // Extract date part
              count: event.payload.commits.length // Count of commits for the day
            };
          });
        setCommitData(commitActivity);
      } catch (error) {
        console.error('Error fetching commit data:', error.message);
      }
    };

    fetchCommitData();
  }, [username]);

  return (
    <div>
      <h2>GitHub Commit Activity</h2>
      <CalendarHeatmap className="commitGraph"
        startDate={new Date('2023-01-01')} // Customize start date as needed
        endDate={new Date()} // Use current date as end date
        values={commitData}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date}: ${value.count} commits`
          };
        }}
      />
    </div>
  );
};

export default GitHubCommitGraph;
