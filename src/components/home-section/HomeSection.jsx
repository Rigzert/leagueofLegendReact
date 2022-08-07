

import Section , {SectionContent} from '../section/Section'

const HomeSection = props => {
    return (
       <Section
        className = {props.className}
       >
        <SectionContent
            className={props.contentClassName}
            bgImage ={props.bgI}
        >
            {props.children}
        </SectionContent>

       </Section>
    )
}

export default HomeSection;