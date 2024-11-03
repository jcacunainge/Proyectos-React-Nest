import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "../pages/IndexPage"
import PatientForm from "../pages/form/PatientFormPage"


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/patient-form" element={<PatientForm />} />

            </Routes>
        </BrowserRouter>
    )
}
