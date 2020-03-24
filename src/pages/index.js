import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import SEO from "../components/seo"
import { Section, Navbar, NavItem, TwoColumn, ScrollLink } from "../components"
import {Footer, Masthead, Contact, Crafts, Info} from '../containers';
import Register from '../register';

import './style.scss';
import {renderMarkdown} from '../utils';
import { ErrorAlert } from "../register/components"

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
                    <p>V současné situaci nejsme schopni zajistit, že se akce bude konat. Nechceme pořádat akci, která by mohla ohrozit
                        účastníky a jejich blízké. Proto ještě nespouštíme přihlašování.</p>
                    <p>Pokud víš, že bys na Řemesla jel/a, můžeš nám napsat a my ti nejpozději 14 dní dopředu
                        (tj. do 15.&nbsp;5.) dáme vědět, jestli se bude konat nebo ne a kdy zahájíme přihlašování.
                        Více viz <ScrollLink href="#register" to="register">předběžná přihláška</ScrollLink>.</p>
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
