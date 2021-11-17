import Self from './Self';

const self: Self = {
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
    github: 'https://https://github.com/int0thewind',
    linkedin: 'https://https://www.linkedin.com/in/hanzhi-yin-5b30a2189/',
    twitter: 'https://twitter.com/int0thewind',
  },
  bio: {
    work: 'Hanzhi Yin is a music technology master student at Carnegie Mellon University, '
      + 'affiliated with the School of Music at the College of Fine Arts.\n'
      + 'As a composer and an amateur pianist, his passion is exploring musical creativity in the postmodern era. '
      + 'He is also highly involved in computer science, particularly interested in web development and machine learning.\n'
      + 'His life-long goal is to use the most advanced technology to promote musical creativity '
      + 'for professionals and commoners.',
  },
};

console.log(JSON.stringify(self));
