import { FiPlusCircle } from "react-icons/fi";
import { TbPigMoney } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import "./TitlePage.scss";


export default function TitlePage() {
    return (
        <>
            <input type="checkbox" id="header_trigger" />
            <header className="header_dashboard" >
                
                <div className="title" >
                    <h1>Titulo da página</h1>
                    <span>Descrição da página</span>
                </div>
       
                
                <div className="arrow_top">
                    <label htmlFor="header_trigger">
                        <i>
                            <FaAngleDown />
                        </i>
                    </label>
                </div>
            </header>
        </>
    )
}