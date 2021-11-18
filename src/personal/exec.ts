import { writeFile } from 'fs';
import { Me, Projects } from '.';

const me: Me = {
  legalName: {
    pinyin: 'Hanzhi Yin',
    zhCN: '殷瀚之',
  },
  otherNames: {
    preferredName: 'Hans',
  },
  pronouns: 'He/Him/His',
  email: {
    personal: 'yinhanzhi@gmail.com',
    campus: 'hanzhiy@andrew.cmu.edu',
  },
  socialMedia: {
    github: 'https://github.com/int0thewind',
    linkedin: 'https://www.linkedin.com/in/hanzhi-yin-5b30a2189/',
    twitter: 'https://twitter.com/int0thewind',
  },
  bio: {
    work: 'Hanzhi Yin is a music technology master student at Carnegie Mellon University, '
      + 'affiliated with the School of Music at the College of Fine Arts.\n'
      + 'As a composer and an amateur pianist, his passion is exploring musical creativity in the postmodern era. '
      + 'He is also highly involved in computer science, '
      + 'particularly interested in web development and machine learning.\n'
      + 'His life-long goal is to use the most advanced technology to promote musical creativity '
      + 'for professionals and commoners.',
  },
};

const projects: Projects = [
  {
    name: 'Suite Alaska',
    kinds: ['notational composition'],
    date: new Date(2020, 7).toJSON(),
    shortDescription: {
      en: 'A work on the spectacular scenery in winter Alaska.',
    },
    description: {
      en: '',
    },
    url: {
      'Full score': 'https://int0thewind.s3.us-east-2.amazonaws.com/works/suite-alaska/full-score.pdf',
    },
    img: {},
    coworkers: {},
  },
  {
    name: 'Prelude/Colors',
    kinds: ['notational composition'],
    date: new Date(2021, 11).toJSON(),
    shortDescription: {
      en: 'Exploring synesthesia by reversely acquiring sound by visuals.',
    },
    description: {
      en: 'Synesthesia is an amazing sensation, and it has a profound impact on my music experience. ' +
        'However, contrary to listening to feel sound, I ventured into a journey to find sounds ' +
        'by thinking about colors. ',
    },
    url: {
      // TODO: upload the full score to the AWS s3 server.
    },
    img: {},
    coworkers: {},
  },
  {
    name: 'Random 18 Musicians',
    kinds: ['software'],
    date: new Date(2021, 5).toJSON(),
    shortDescription: {
      en: 'A theoretical analysis and an algorithmic recreation on Steve Reich\'s Music for 18 Musicians',
    },
    description: {
      en: 'An algorithmic composition composed under Prof. Henrich Taube\'s musx framework. '
        + 'Similar to my previous work, I carefully analyzed Steve Reich\'s Music for 18 Musicians '
        + 'and transcode my analysis to code. '
        + 'Being indulged in random process as inspired by postmodernism, I introduced multiple customizations on '
        + 'instrumentation, voices, and tonalities. The result may not be appropriate to minimalism, '
        + 'but it is truly inspirational',
    },
    url: {
      GitHub: 'https://github.com/int0thewind/Random-18-Musicians',
      'musx (Framework)': 'https://pypi.org/project/musx/',
    },
    img: {},
    coworkers: {},
  },
  {
    name: 'Canon Composer',
    kinds: ['software'],
    date: new Date(2021, 4).toJSON(),
    shortDescription: {
      en: 'A theoretical analysis and an algorithmic recreation on J.S. Bach\'s 14 Canons, BWV 1087.',
    },
    description: {
      en: 'CS + Music capstone project at University of Illinois. '
        + 'Embarking on a journey to conquer the most canny canonical work, '
        + 'I conducted a meticulous theory analysis and carefully transcode my analysis to code. '
        + 'The result is a purely algorithmic piece of code, yet has been proven to be pertinent, '
        + 'as I succeeded in recreating Bach\'s soggetto in his 14 Canons, BWV 1087.',
    },
    url: {
      GitHub: 'https://github.com/int0thewind/Canon-Composer',
      'Presentation (PDF)': 'https://int0thewind.s3.us-east-2.amazonaws.com/works/canon-composer/presentation.pdf',
    },
    img: {},
    coworkers: {},
  },
];

(() => {
  writeFile('me.json', JSON.stringify(me), { flag: 'w+' }, (e) => { if (e) throw e; });
  writeFile('projects.json', JSON.stringify(projects), { flag: 'w+' }, (e) => { if (e) throw e; });
})();
