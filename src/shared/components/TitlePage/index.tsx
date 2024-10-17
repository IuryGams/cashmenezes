import { FaAngleDown } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { HeaderDashboardContainer, ContainerIcons, Profile, StyledSection, Title, Icon, HeaderTrigger, ArrowTop } from "./styled";
import Image from "next/image";



export default function TitlePage() {
    return (
        <>
            <HeaderTrigger type="checkbox" id="header_trigger" />
            <HeaderDashboardContainer className="header_dashboard" >

                <Title className="title" >
                    <h1>Visão geral</h1>
                </Title>

                <StyledSection>
                    <ContainerIcons>
                        <Icon>
                            <FaGear size={24} />
                        </Icon>
                        <Icon>
                            <IoMdNotifications size={24} />
                        </Icon>
                    </ContainerIcons>
                    <Profile>
                        <Image src="https://github.com/iurygams.png" width={60} height={60} alt="foto do usuario" />
                        <b>{"Iury Gama"}</b>
                        <FaAngleDown size={24} />
                    </Profile>
                </StyledSection>



                <ArrowTop className="arrow_top">
                    <label htmlFor="header_trigger">
                        <i>
                            <FaAngleDown />
                        </i>
                    </label>
                </ArrowTop>
            </HeaderDashboardContainer>
        </>
    )
}