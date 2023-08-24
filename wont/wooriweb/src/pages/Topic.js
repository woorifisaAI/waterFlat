import React from 'react';
import { List, Icon } from 'semantic-ui-react';

function Topic() {
  const topTopics = [
    'Topic 1 => ',
    'Topic 2 => ',
    'Topic 3 => ',
    'Topic 4 => ',
    'Topic 5 => ',
    'Topic 6 => ',
    'Topic 7 => ',
    'Topic 8 => ',
    'Topic 9 => ',
    'Topic 10 => ',
  ];

  const headingStyle = {
    fontSize: '2.0rem', // Adjust the value as needed
  };

  const listItemStyle = {
    fontSize: '1.8rem', // Adjust the value as needed
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left Section */}
      <div style={{ flex: 1, backgroundColor: '#90E4FF', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h2 style={headingStyle}> <Icon name='tag' /> Daily Topic</h2>
        <List bulleted>
          {topTopics.map((topic, index) => (
            <List.Item key={index} style={listItemStyle}>{topic}</List.Item>
          ))}
        </List>
      </div>

      {/* Right Section */}
      <div style={{ flex: 1, backgroundColor: '#D9E5FF', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h2 style={headingStyle}> <Icon name='tag' /> Weekly Topic</h2>
        <List bulleted>
          {topTopics.map((topic, index) => (
            <List.Item key={index} style={listItemStyle}>{topic}</List.Item>
          ))}
        </List>
      </div>
    </div>
  );
}

export default Topic;