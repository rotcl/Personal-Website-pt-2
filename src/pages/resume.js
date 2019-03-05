import React from "react"
import Resume from "../components/resume/Resume"
import Layout from '../components/Layout'
import SEO from '../components/seo'

const resume = require('../resume.json');
const Res = () => (
    <Layout>
        <SEO title="CV" />
        <Resume
            personal={resume.personal}
            experience={resume.experience}
            projects={resume.projects}
            education={resume.education}
        />
    </Layout>
    
)

export default Res