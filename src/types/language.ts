export type Language = 'es' | 'pt' | 'en';

export interface Translation {
  nav: {
    features: string;
    community: string;
    about: string;
  };
  hero: {
    badge: string;
    title: {
      where: string;
      developers: string;
      connect: string;
    };
    description: string;
    joinCommunity: string;
    exploreTopics: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      discussions: {
        title: string;
        description: string;
      };
      experts: {
        title: string;
        description: string;
      };
      reviews: {
        title: string;
        description: string;
      };
      help: {
        title: string;
        description: string;
      };
      showcase: {
        title: string;
        description: string;
      };
      career: {
        title: string;
        description: string;
      };
    };
  };
  community: {
    title: string;
    stats: {
      developers: string;
      discussions: string;
      support: string;
    };
  };
  cta: {
    title: {
      ready: string;
      levelUp: string;
    };
    description: string;
    getStarted: string;
  };
  footer: {
    description: string;
    quickLinks: {
      title: string;
      guidelines: string;
      help: string;
      privacy: string;
    };
    connect: string;
    copyright: string;
  };
}