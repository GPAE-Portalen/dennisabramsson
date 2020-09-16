import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import {
    IData,
    IDataProject,
} from '../interfaces';

import { DataContext } from '../App';

export const FeaturedProjects = (): JSX.Element => {
    const data: IData = useContext(DataContext);

    const featuredProjectsQuantity: number = process.env.REACT_APP_FEATURED_PROJECTS_QUANTITY
        ? parseInt(process.env.REACT_APP_FEATURED_PROJECTS_QUANTITY, 10)
        : 3;

    return (
        <section className="FeaturedProjects">
            <div className="container p-3">
                <div className="d-flex justify-content-center mb-5">
                    <div className="triangle-bottomright"></div>

                    <div className="d-flex align-items-center">
                        <h1 className="text-center m-0 px-4">Featured projects</h1>
                    </div>

                    <div className="triangle-topleft"></div>
                </div>
                

                <div className="d-flex flex-column">
                    <div className="row justify-content-center">
                        {data.projects && mapFeaturedProjects(data.projects, featuredProjectsQuantity)}
                    </div>

                    <NavLink to="/projects" className="btn btn-lg btn-primary my-5 mx-auto font-weight-bold">
                        Browse all
                </NavLink>
                </div>
            </div>
        </section>
    );
};

const mapFeaturedProjects = (projects: IDataProject[], featuredProjectsQuantity: number): (JSX.Element | undefined)[] => {
    return projects.map((project: IDataProject): JSX.Element | undefined => {
        const { id, path, name, description, thumbnailFile } = project;

        while (projects.indexOf(project) < featuredProjectsQuantity) {
            return (
                <div key={id} className="col-xl-4 col-lg-6">
                    <div className="card">
                        {
                            thumbnailFile && <img src={`${process.env.PUBLIC_URL}/${thumbnailFile.name}.${thumbnailFile?.type}`} className="card-img-top" alt="..." />
                        }

                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>

                            {
                                description && <p className="card-text">{description}</p>
                            }

                            <NavLink to={path} className="btn btn-primary stretched-link">
                                Full details
                            </NavLink>
                        </div>
                    </div>
                </div>
            );
        }
    });
};
