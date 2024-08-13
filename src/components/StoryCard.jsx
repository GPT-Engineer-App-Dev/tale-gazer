import React from 'react';
import { ArrowUpCircle, ExternalLink } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <ArrowUpCircle className="w-4 h-4 mr-1 text-orange-500" />
          <span>{story.points} points</span>
        </div>
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-600"
        >
          Read more <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default StoryCard;