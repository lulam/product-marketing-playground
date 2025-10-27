export type Task = {
  topic: string;
  prompt: string[];
};

export const tasks = {
  topic: 'Messaging',
  prompts: [
    `You're the PMM for an _AI customer support platform_ and sales keeps losing deals because leads say AI will replace our agents and hurt morale. _Reframe_ this by positioning AI as an agent copilot through a value proposition, 3-slide deck showing the repositioning, and talking points for your CEO's next customer call.`,

    `You're launching data encryption as a new feature that matters differently to _security engineers who care about technical specs, compliance officers focused on risk and audits,_ and CFOs who need a business case. _Show how one feature_ becomes three different value stories through separate message decks for each audience.`,
  ],

  // {
  //   topic: 'Personas',
  //   prompts: [
  //     'Create a detailed persona for a digital marketing manager at a medium-sized B2B company',
  //     'Build a persona for a freelance graphic designer using design software',
  //     'Develop a persona for an HR manager at a healthcare startup',
  //     'Craft a persona for a small business owner in the e-commerce space',
  //     'Build a persona for a CTO at a growing tech company with 100-500 employees',
  //     'Develop a persona for a sales manager at a retail company',
  //     ' Create a persona for a university student using an online learning platform',
  //     ' Build a persona for a stay-at-home parent using a financial planning app',
  //     'Develop a persona for a travel blogger using a trip planning tool',
  //     'Create a persona for a small law firm partner using legal tech solutions',
  //   ],
  // },

  // {
  //   topic: 'Positioning',
  //   prompts: [
  //     'Create a positioning playbook for an e- commerce SaaS targeting boutique retailers',
  //     'Define the positioning for a new AI-based language learning app for university students',
  //     'Craft a positioning statement for a project management tool aimed at small startups',
  //     'Develop a positioning strategy for a cloud storage solution aimed at professional photographers',
  //     'Position a B2B marketing automation tool for mid-sized digital marketing agencies',
  //     'Reposition a traditional software product for a new audience of remote workers',
  //     'Develop positioning for a fintech solution targeting accountants in SMEs',
  //     'Create a competitive analysis and positioning plan for an on-demand delivery app',
  //     'Establish the market positioning of a new subscription box service aimed at pet owners',
  //     'Position a telehealth platform for mental health services targeting college students',
  //   ],
  // },
  // {
  //   topic: 'Pricing',
  //   prompts: [
  //     'Develop a competitive pricing model for a SaaS company targeting HR managers',
  //     'Analyze customer segments to create a tiered pricing structure for an enterprise CRM platform',
  //     ' Identify and recommend a pricing strategy for a direct - to - consumer fitness app',
  //     'Design a pricing discount strategy for a B2B supply chain software company',
  //     'Recommend a value - based pricing strategy for a cybersecurity platform aimed at small businesses',
  //     'Create a cost - plus pricing model for a logistics software startup',
  //     'Develop a freemium pricing strategy for a content management platform targeting bloggers',
  //     'Evaluate the impact of subscription - based pricing for a digital health tracking platform',
  //     'Propose a dynamic pricing strategy for an e-commerce site specializing in home goods',
  //     'Design a pricing optimization plan for a data analytics tool used by financial analysts',
  //   ],
  // },

  // {
  //   topic: 'Go-to-Market',
  //   prompts: [
  //     'Design a go-to-market plan for a productivity app targeting startup founders',
  //     'Build a go-to-market strategy for a cloud storage solution aimed at non-profit organizations',
  //     'Create a go-to-market strategy for a wearable tech product targeting fitness influencers',
  //     'Develop a go-to-market plan for an online learning platform aimed at tech professionals',
  //     'Build a go-to-market strategy for a local marketplace app targeting artisans and craftsmen',
  //     'Plan a go-to-market strategy for a travel booking platform targeting digital nomads',
  //     'Develop a market entry strategy for a new B2B SaaS tool aimed at legal firms',
  //     'Create a go-to-market strategy for a food delivery service targeting busy professionals',
  //     'Design a regional go-to-market plan for an AI-driven recruitment platform',
  //     'Plan the go-to-market launch of a new feature for a cloud-based design tool',
  //   ],
  // },
  // {
  //   topic: 'Product Launch',
  //   prompts: [
  //     'Create a product launch plan for a new e - book reader targeting avid readers',
  //     'Develop a product launch strategy for a fintech app focused on student loans',
  //     'Plan a virtual launch event for a SaaS platform targeting marketing professionals',
  //     'Build a product launch calendar for a new feature release for a productivity tool',
  //     'Create a product launch social media strategy for a meal planning app',
  //     'Develop the content for a landing page to support a product launch for a photo editing tool',
  //     'Design a customer outreach plan for a mobile fitness tracking app',
  //     'Plan the global launch of a subscription box service targeting sustainability-conscious consumers',
  //     'Craft a launch email series for an online invoicing tool',
  //     'Build a product launch PR strategy for a remote collaboration software platform',
  //   ],
  // },
  // {
  //   topic: 'Sales Enablement',
  //   prompts: [
  //     'Develop a sales playbook for a cloud-based collaboration tool targeting IT managers',
  //     'Create an email template series for a sales team promoting a fintech solution to accountants',
  //     'Build a case study highlighting the benefits of a project management tool for marketing teams',
  //     'Design a competitive battle card for a new AI - powered analytics tool',
  //     'Write a one- pager highlighting the unique features of a CRM tool for sales teams',
  //     'Develop a product demo script for a SaaS product targeting HR professionals',
  //     'Create a training manual for sales teams selling a digital health platform',
  //     'Build sales collateral for a webinar platform targeting small business owners',
  //     'Design a pricing comparison sheet for a sales team promoting a video conferencing platform',
  //     'Develop a sales pitch deck for an online marketplace aimed at home - based entrepreneurs',
  //   ],
  // },
};
