"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Volleyball,  
  Film, 
  Lightbulb, 
  Cpu, 
  Grid3x3, 
  Code, 
  FileText 
} from 'lucide-react';

// Event interface
interface Event {
  id: string;
  name: string;
  description: string;
  type: 'fun' | 'tech';
  icon: React.ElementType;
  rounds: string[];
  winningCriteria: string;
}

// Event data
const events: Event[] = [
  {
    id: 'mind-melt',
    name: 'Mind Melt',
    type: 'fun',
    icon: Brain,
    description: 'A three-round brain challenge testing logic and memory.',
    rounds: [
      'Rearrange sticks to form new shapes',
      'Identify colors of text instead of reading words',
      'Recall and list objects from a brief picture view'
    ],
    winningCriteria: 'Team with the highest accuracy wins'
  },
  {
    id: 'physy-frensy',
    name: 'Physy Frensy',
    type: 'fun',
    icon: Volleyball,
    description: 'A fun physical event with balloon-powered structures and a dizzy race.',
    rounds: [
      'Use balloons to lift and stack cups into a castle',
      'Spin 10 times before popping a balloon with an arrow'
    ],
    winningCriteria: 'Coordination and speed decide the winning team'
  },
  {
    id: 'cine-funy',
    name: 'Cine Funy',
    type: 'fun',
    icon: Film,
    description: 'A movie and music-based game testing quick thinking.',
    rounds: [
      'Draw and guess movie titles',
      'Identify songs from short clips',
      'Recognize Tamil songs written in English'
    ],
    winningCriteria: 'Team with the most correct answers wins'
  },
  {
    id: 'triple-dhamaka',
    name: 'Triple Dhamaka',
    type: 'fun',
    icon: Lightbulb,
    description: 'A thrilling mix of guessing, acting, and problem-solving.',
    rounds: [
      'Guess objects while blindfolded using verbal clues',
      'Imitate a famous personality in a funny scenario',
      'Solve escape room puzzles'
    ],
    winningCriteria: 'Team with best performance across rounds'
  },
  {
    id: 'circuit-pitch',
    name: 'Circuit Pitch',
    type: 'tech',
    icon: Cpu,
    description: 'A three-stage challenge where teams pitch electronic projects.',
    rounds: [
      'Create ideas using displayed components',
      'Bid on needed components in an auction',
      'Build and simulate a circuit based on acquired components'
    ],
    winningCriteria: 'Team with the most accurate project wins'
  },
  {
    id: 'tech-bingo',
    name: 'Tech Bingo',
    type: 'tech',
    icon: Grid3x3,
    description: 'A game combining tactile recognition and strategic thinking.',
    rounds: [
      'Blindfolded members identify components using touch-based clues',
      'Arrange answers on a bingo grid and mark correct responses'
    ],
    winningCriteria: 'First team to complete a bingo pattern wins'
  },
  {
    id: 'codeathon',
    name: 'Codeathon',
    type: 'tech',
    icon: Code,
    description: 'A coding battle with two intense rounds.',
    rounds: [
      'Decrypt encoded functions to retrieve original input',
      'Write front-end code blindly without seeing real-time results'
    ],
    winningCriteria: 'Coder with the best accuracy wins'
  },
  {
    id: 'paper-presentation',
    name: 'Paper Presentation',
    type: 'tech',
    icon: FileText,
    description: 'A technical event where teams showcase research or project ideas.',
    rounds: [
      '5-minute presentation on any technical domain',
      'Extra points for working prototype'
    ],
    winningCriteria: 'Judges evaluate clarity, innovation, and technical depth'
  }
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`
        relative bg-gradient-to-bl overflow-hidden rounded-xl shadow-lg p-6 
        ${event.type === 'tech' 
          ? 'bg-blue-50 border-blue-200' 
          : 'bg-purple-50 border-purple-200'
        } border
      `}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
    >
      {/* Event Icon and Type */}
      <div className="flex items-center mb-4">
        <event.icon 
          className={`
            w-10 h-10 mr-4 
            ${event.type === 'tech' ? 'text-blue-600' : 'text-purple-600'}
          `} 
        />
        <h2 className={`
          text-2xl font-bold 
          ${event.type === 'tech' ? 'text-blue-800' : 'text-purple-800'}
        `}>
          {event.name}
        </h2>
        <span 
          className={`
            ml-3 px-2 py-1 rounded-full text-xs uppercase font-bold
            ${event.type === 'tech' 
              ? 'bg-blue-200 text-blue-800' 
              : 'bg-purple-200 text-purple-800'
            }
          `}
        >
          {event.type}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{event.description}</p>

      {/* Rounds */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? 'auto' : 0, 
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isExpanded && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Rounds:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {event.rounds.map((round, index) => (
                <li key={index} className="mb-1">{round}</li>
              ))}
            </ul>
            <p className="mt-3 italic text-sm">
              <strong>Winning Criteria:</strong> {event.winningCriteria}
            </p>
          </div>
        )}
      </motion.div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          mt-4 w-full py-2 rounded-lg transition-colors
          ${event.type === 'tech' 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-purple-500 hover:bg-purple-600 text-white'
          }
        `}
      >
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
    </motion.div>
  );
};

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'fun' | 'tech'>('all');

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="container mx-auto bg-black">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Event Lineup
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          {(['all', 'fun', 'tech'] as const).map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`
                px-4 py-2 rounded-lg transition-colors
                ${filter === type 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }
              `}
            >
              {type === 'all' ? 'All Events' : type.charAt(0).toUpperCase() + type.slice(1) + ' Events'}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}