/**
 * A project is a finished work by myself.
 */
export type Project = {
    /** The name of the project. */
    name: string,

    /** Is the project a coding project or composition project. */
    kind: 'computer' | 'composition',

    /** The finishing date of the project. Generated by `Date.prototype.toJSON()`. */
    date: string,

    /** The short description of the project. */
    shortDesc?: string,

    /** The long description of the project. */
    desc: string,

    /** Any referencing URLs. */
    url: { [key: string]: string },

    /** Any referencing IMGs. */
    img: { [key: string]: string }

    colab: {}
}

/** Project list type.. */
export type Projects = Project[]
