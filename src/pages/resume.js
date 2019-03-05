import React from "react"
import Resume from "../components/resume/Resume"
import SEO from '../components/seo'

const resume = require('../resume.json');
const Res = () => (
        <div>
        <SEO title="Currículum Vitae" />
        <Resume
            personal={resume.personal}
            experience={resume.experience}
            projects={resume.projects}
            education={resume.education}
        />
        </div>
    
)

export default Res