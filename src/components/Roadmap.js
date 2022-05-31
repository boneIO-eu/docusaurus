import React from 'react';
import { Chrono } from 'react-chrono';

export const Roadmap = () => {
  const items = [
    {
      title: 'Q4 2021',
      cardTitle: 'BoneIO project starts',
      url: 'http://www.history.com',
      cardSubtitle: 'Maciej shows first boneIO..',
      media: {
        source: {
          url: 'https://www.youtube.com/embed/gt_hVfifvMU',
          type: 'mp4',
        },
        type: 'VIDEO',
        name: 'First boneIO',
      },
    },
    {
      title: 'November 2021',
      cardTitle: 'First contributors',
      url: 'http://www.history.com',
      cardSubtitle: 'ble ble ble..',
    },
    {
      title: 'December 2021',
      cardTitle: 'Input board v0.2 is ready',
      url: 'http://www.history.com',
      cardSubtitle: 'ble ble ble..',
    },
  ];

  return (
    <div className="container">
      <Chrono items={items} mode="HORIZONTAL" showAllCardsHorizontal={true}>
        <div className="chrono-icons">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/about.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/idea.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/sun.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/info.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/calendar.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
            alt="mail-box"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
            alt="pinterest"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
            alt="reddit"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/facebook.png"
            alt="reddit"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/stumbleupon.png"
            alt="reddit"
          />
        </div>
      </Chrono>
    </div>
  );
};
