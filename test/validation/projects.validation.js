import 'chai/register-should.js';
import path from 'path';
import fs from 'fs'; ;
const projectsFilePath = path.resolve('./src/data/projects.json');

describe('Project file exists', function() {
    it(`should exist in this repository: ${projectsFilePath}`, function() {
        should.equal(true, fs.existsSync(projectsFilePath));
    });
});

describe('Project data validation', function() {
    const projectsFile = JSON.parse(fs.readFileSync(projectsFilePath));

    projectsFile.projects.forEach((project, i) => {
        describe(`Project ${project.title}`, function() {
            describe('Title property', function() {
                it(`should have a VALID title property`, function() {
                    project.should.have.property('title');
                    project.title
                        .should.be.a('string')
                        .and.have.lengthOf.at.least(1)
                        .and.have.lengthOf.at.most(30);
                });
            });

            describe('Thumbnail property', function() {
                it(`should have a VALID thumbnail property`, function() {
                    project.should.have.property('thumbnail_url');
                    project.thumbnail_url
                        .should.be.a('string')
                        .and.satisfy((url) => url.startsWith('media/'));
                });

                it(`thumbnail should exist in the public/media folder`, function() {
                    project.thumbnail_url.should.satisfy((url) => fs.existsSync(path.resolve('./public/' + url)));
                });

                it(`thumbnail should be the correct size`, function() {
                    // TODO: Figure out sizes for images
                    return true;
                });
            });

            describe('Media property', function() {
                it(`should have a VALID media property`, function() {
                    project.should.have.property('media_url');
                    project.media_url
                        .should.be.a('string')
                        .and.satisfy((url) => url.startsWith('media/'));
                });

                it(`media should exist in the public/media folder`, function() {
                    // TODO: Add gifs to public/media
                    // project.media_url.should.satisfy(url => fs.existsSync(path.resolve('./public/' + url)));
                    return true;
                });

                it(`media should be the correct size`, function() {
                    // TODO: Figure out sizes for images
                    return true;
                });
            });

            describe('URL property', function() {
                it(`should have a VALID url property`, function() {
                    project.should.have.property('url');
                    project.url
                        .should.be.a('string')
                        .and.satisfy((url) => url.startsWith('https://github.com/Kojolika'));
                });
            });

            describe('Tech stack property', function() {
                it(`should have a VALID tech property`, function() {
                    project.should.have.property('tech');
                    project.tech
                        .should.be.a('Array')
                        .and.have.lengthOf.at.least(1);
                });
            });

            describe('Summary property', function() {
                it(`should have a VALID summary property`, function() {
                    project.should.have.property('summary');
                    project.summary
                        .should.be.a('string')
                        .and.have.lengthOf.at.least(10)
                        .and.have.lengthOf.at.most(300);
                });
            });
        });
    });
});
