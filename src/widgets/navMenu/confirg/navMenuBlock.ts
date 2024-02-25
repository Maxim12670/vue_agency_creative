interface MenuItem {
  text: {
    en: string,
    ru: string
  };
  path: string;
}

export const links: MenuItem[] = [
  {
    text: {
      en: 'home',
      ru: 'главная'
    },
    path: '/'
  },
  {
    text: {
      en: 'About',
      ru: 'о нас'
    },
    path: '/'
  },
  {
    text: {
      en: 'Sevices',
      ru: 'услуги'
    },
    path: '/'
  },
  {
    text: {
      en: 'Projects',
      ru: 'проекты'
    },
    path: '/'
  }
];