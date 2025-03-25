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
    },
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
    }
  ];

  export default events;