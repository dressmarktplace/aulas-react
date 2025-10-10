import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { ContactPage } from "./pages/Contact"
import { AboutPage } from "./pages/About"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App