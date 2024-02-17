import styles from "./page.module.scss";

// Components
import SideBar from "@/components/SideBar";
import { Box } from "@mui/material";


export default function Dashboard() {

    return (
        <main className={styles.dashboard} >
            <SideBar />
            <Box height="100vh" marginLeft={}>
                <h1>Eu sou um conteudo!</h1>
            </Box>
        </main>
    )
}