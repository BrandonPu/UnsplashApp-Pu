import { Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useRef } from "react"

export const UnsplashApp = () => {

    const searchInput = useRef();

    const handleSearch = (event) => {
        
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <h1 className="title mb-4">Buscar Imagen</h1>
                <div className="search-section w-50">
                    <Form onSubmit={handleSearch}>
                        <Form.Control
                            type="search"
                            placeholder="Escriba algo para buscar..."
                            className="search-input p-3"    
                            ref={searchInput}
                        />
                    </Form>
                </div>
            </div>
        </>
    )
}
