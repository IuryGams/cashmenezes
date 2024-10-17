
import { CSSProperties } from "styled-components";
import { ContainerSectionStyled, StyledLink, StyledTitle } from "./styled";

interface SectionTitleProps {
    title: string;
    path?: string;
    linkText?: string;
    children: React.ReactNode
    style?: CSSProperties;
}

export default function ContainerSection({title, path, linkText, children, style} : SectionTitleProps)
{
    return(
        <ContainerSectionStyled style={style} >
            <StyledTitle>
                <h2>{title}</h2>
                {path && linkText && (<StyledLink href={path}>{linkText}</StyledLink>)}
            </StyledTitle>
            {children}
        </ContainerSectionStyled>
    )
}