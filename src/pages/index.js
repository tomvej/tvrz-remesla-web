import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import SEO from '../components/seo';
import {Navbar, NavItem, Section, TwoColumn} from '../components';
import {Contact, Crafts, Footer, Info, Masthead} from '../containers';
import Register from '../register';

import './style.scss';
import {renderMarkdown} from '../utils';
import {ErrorAlert} from '../register/components';

export default () => {
    const {background, site, about, register} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            background: file(relativePath: {eq: "bg-info.jpg"}) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            about: file(relativePath: {eq: "about.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
            register: file(relativePath: {eq: "register.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);
    return (
        <>
            <SEO lang="cs" />
            <Navbar title={site.siteMetadata.title}>
                <NavItem target="about">O akci</NavItem>
                <NavItem target="info">Informace</NavItem>
                <NavItem target="crafts">Řemesla</NavItem>
                <NavItem target="register">Přihláška</NavItem>
                <NavItem target="contact">Kontakt</NavItem>
            </Navbar>
            <Masthead />
            <Section name="about">
                <ErrorAlert>
                    <p>Jakkoli se situace s koronavirem vyvíjí mírně pozitivně, není možné v tuto chvíli, i s ohledem na vládní nařízení, zajistit takovou bezpečnost a kvalitu akce,
                        jakou si přejeme. Z toho důvodu Řemesla přesouváme na jiný, zatím blíže nespecifikovaný termín, který zveřejníme zde a na <a href="https://www.facebook.com/events/568874620710092/">facebookové stránce akce</a>.</p>
                    <p>Doufáme v termín během letních prázdnin nebo podzimu, nemůžeme ale v tuto chvíli nic zaručit. Kdybyste měli zájem o jiný typ akce, v druhé polovině
                        srpna pořádáme desetidenní zážitkovku <a href="https://alchymista.instruktori.cz">Alchymistův učeň</a>.</p>
                    <p>Díky za Vaši důvěru a podporu</p>
                </ErrorAlert>
                {renderMarkdown(about.childMarkdownRemark.htmlAst)}
            </Section>
            <Section
                name="info"
                bgImage={background.childImageSharp.fluid}
            >
                <h2>Informace</h2>
                <TwoColumn>
                    <Info />
                </TwoColumn>
            </Section>
            <Section name="crafts">
                <Crafts />
            </Section>
            <Section name="register">
                <h2>Předběžná přihláška</h2>
                {renderMarkdown(register.childMarkdownRemark.htmlAst)}
                <Register />
            </Section>
            <Section name="contact">
                <Contact />
            </Section>
            <Footer />
        </>
    );
};
