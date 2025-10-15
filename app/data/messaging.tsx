export type Task = {
  topic: string;
  prompt: string[];
};

export const tasks: Task[] = [
  {
    topic: 'Messaging',
    prompt: [
      'Develop key messaging for a wellness app targeting fitness enthusiasts',
      'Craft messaging for a customer relationship management tool targeting real estate agents',
      'Design messaging for a video conferencing platform targeting remote teams',
      'Develop customer- facing messaging for an online education platform for middle school teachers',
      'Write brand messaging for a social media management tool targeting small businesses',
      'Create email marketing copy for an AI - powered marketing analytics tool',
      'Craft promotional messaging for a new feature rollout in a project management software',
      'Develop landing page messaging for a cloud - based accounting tool for freelancers',
      'Design ad copy for a subscription - based meal delivery service targeting health - conscious consumers',
      'Write in-app messaging for a mobile fintech product targeting Gen Z users',
    ],
  },
];

const messaging = () => {
  return tasks;
};

export default messaging;
