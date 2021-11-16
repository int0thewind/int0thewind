/** An object type to describe my information */
type Self = {
  /** My legal name in different languages. */
  legalName: {
    /** My Pinyin legal name. */
    pinyin: string,

    /** My Chinese legal name. */
    zhCN: string,
  },

  /** My nickname. Used for unofficial purposes. */
  nickname: string[],

  /** My email addresses. */
  email: {
    /** My person email address. It is always there. */
    personal: string,

    /**
     * Other email addresses, such as campus or working email address, may be unavailable at a time.
     * Set them to be nondeterministic.
     */
    [other: string]: string
  },

  /** My bios. */
  bio: {
    /** Multiple bios may be used in whatever context. Set them to be nondeterministic. */
    [key: string]: string,
  },

  /** My social media links. */
  socialMedia: {
    /** My GitHub link. */
    github: string,

    /** My LinkedIn link. */
    linkedin: string,

    /** My other social media contact. Set them to be nondeterministic. */
    [other: string]: string,
  },
};

export default Self;
