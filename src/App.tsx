import React, { Suspense, lazy, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { IData } from './interfaces';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Spinner } from './components/Spinner';

const Home = lazy(() => import('./routes/Home'));
const Projects = lazy(() => import('./routes/Projects'));
const Project = lazy(() => import('./routes/Project'));
const NotFound = lazy(() => import('./routes/NotFound'));

export const DataContext: React.Context<IData> = React.createContext({
    welcome: {
        title: 'Welcome!',
        blogs: [
            {
                title: 'Uno',
                paragraphs: [
                    'Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqoUno oqinweoqe oqeqoUno oqinweoqe oqeqo.'
                ],
                links: [
                    {
                        href: 'https://github.com/portalen-io',
                        btnText: 'C#'
                    },
                    {
                        href: 'https://github.com/portalen-io',
                        btnText: 'C++'
                    }
                ]
            }
        ]
    },
    projects: [
        {
            id: '2cbdb7fb-4404-424c-858e-7706796b9ba3',
            path: '/project/spel-1',
            name: 'Spel 1',
            description: 'Det handlar om 1',
            fullWidth: true,
            thumbnailFile: {
                name: 'gwent',
                type: 'jpg',
                alt: 'qwent game',
            },
            iframe: {
                src: 'https://www.youtube.com/embed/GQ3cTuSH9zM'
            },
            asides: [
                {
                    thumbnailFile: {
                        name: 'flying-robots',
                        alt: 'flying-robots game',
                        type: 'jpg'
                    },
                    links: [
                        {
                            href: 'https://github.com/portalen-io',
                            btnText: 'Github'
                        }
                    ],
                    chatBubble: true
                },
                {
                    title: 'projectBlogs35412313',
                    paragraphs: ['Vet att vi kan göra många blog inlägg! 11231231'],
                    links: [
                        {
                            href: 'https://github.com/portalen-io',
                            btnText: 'Github'
                        },
                        {
                            href: 'https://github.com/portalen-io',
                            btnText: 'C#'
                        },
                        {
                            href: 'https://github.com/portalen-io',
                            btnText: 'C++'
                        }
                    ],
                    chatBubble: true
                },
                {
                    title: 'projectBlogs5412asdasdasd313',
                    paragraphs: ['VetprojectBlogsnlägg! 11231231'],
                    chatBubble: true
                }
            ],
            blogs: [
                {
                    thumbnailFile: {
                        name: 'flying-robots',
                        alt: 'flying-robots game',
                        type: 'jpg'
                    },
                    title: 'Ganska coolt 11',
                    paragraphs: ['Vet att vi kan göra många blog inlägg! 11'],
                    links: [
                        {
                            href: 'https://github.com/portalen-io',
                            btnText: 'Github'
                        }
                    ],
                    createdAt: '2020-06-15',
                    updatedAt: '2020-09-28'
                },
                {
                    title: 'Ganska coolt 11',
                    paragraphs: ['Vet att vi kan göra många blog inlägg! 11']
                }
            ]
        },
        {
            id: '842d1d8d-5fef-49d5-a8a9-794b61f7d35e',
            path: '/project/spel-2',
            name: 'Spel 2',
            description: 'Det handlar om 2',
            fullWidth: true,
            thumbnailFile: {
                name: 'flying-robots',
                alt: 'flying-robots game',
                type: 'jpg'
            },
            iframe: {
                src: 'https://www.youtube.com/embed/GQ3cTuSH9zM'
            },
            blogs: [
                {
                    title: 'Du 2',
                    paragraphs: ['Vet att vi kan göra många blog inlägg! 2'],
                    createdAt: '2020-06-15',
                    updatedAt: '2020-09-28'

                },
                {
                    title: 'Ganska coolt 22',
                    paragraphs: ['Vet att vi kan göra många blog inlägg! 22']
                },
                {
                    title: 'Ganska coolt 222',
                    paragraphs: ['Vet att vi kan göra många blog inlägg! 222']
                }
            ]
        },
        {
            id: '677d7fd1-5928-453a-a3cc-79d015ec294c',
            path: '/project/spel-3',
            name: 'Spel 3',
            description: 'Det handlar om 3',
            thumbnailFile: {
                name: 'arrow',
                type: 'jpg',
                alt: 'arrow game'
            },
            iframeSrc: 'https://www.youtube.com/embed/GQ3cTuSH9zM',
            asides: [
                {
                    thumbnailFile: {
                        name: 'flying-robots',
                        alt: 'flying-robots game',
                        type: 'jpg'
                    },
                    links: [
                        {
                            href: 'https://github.com/portalen-io',
                            btnText: 'Github'
                        }
                    ],
                    createdAt: '2020-06-15',
                    updatedAt: '2020-09-28',
                    chatBubble: true
                },
                {
                    title: 'projectBlogs5412asdasdasd313',
                    paragraphs: ['VetprojectBlogsnlägg! 11231231'],
                    chatBubble: true
                }
            ],
            blogs: [
                {
                    title: 'Du 3',
                    paragraphs: ['Vet att vi kan göra många blog inlägg! 3']
                },
                {
                    title: 'Ganska coolt 33',
                    paragraphs: ['Vet att vi kan göra många blog inlägg! 33']
                },
                {
                    title: 'Ganska coolt 333',
                    paragraphs: ['Vet att vi kan göra många blog inlägg! 333']
                }
            ]
        },
        {
            id: '94170ad9-63c8-4513-b48c-1b19efc2c74a',
            path: '/project/spel-4',
            name: 'Spel 4',
            description: 'Det handlar om 4',
            iframeSrc: 'https://www.youtube.com/embed/GQ3cTuSH9zM'
        },
        {
            id: '94170ad9-63c8-4513-b48c-1b19efc2c74a',
            path: '/project/spel-5',
            name: 'Spel 5',
            description: 'Det handlar om 5',
            fullWidth: true,
            thumbnailFile: {
                name: 'flying-robots',
                alt: 'arrow game',
                type: 'jpg'
            }
        }
    ],
    socials: [
        {
            ikon: {
                name: 'github-brand',
                type: 'svg',
                alt: 'github'
            },
            href: 'https://github.com/portalen-io'
        }
    ],
    contactBlogs: [
        {
            title: 'Uno',
            paragraphs: [
                'Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqoUno oqinweoqe oqeqoUno oqinweoqe oqeqo Uno oqinweoqe oqeqo U öåöä åöäöå no oqinweoqe oqeqo'
            ]
        }
    ]
} as IData);

const App = (): JSX.Element => {
    return (
        <Fragment>
            <Header />

            <main className="flex-grow-1">
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/project/:projectName" component={Project} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Suspense>
            </main>

            <Footer />
        </Fragment>
    );
};

export default App;