import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePhotos } from "../hooks/usePhotos";

export const UnsplashApp = () => {
    const { images, page, totalPages, setPage, handleSearch, handleSelection, searchInput } = usePhotos();

    return (
        <>
            <div className="container mt-5">
                <h1 className="title mb-4 text-center">Buscar Imagen</h1>
                <div className="search-section mb-4">
                    <Form onSubmit={handleSearch}>
                        <Form.Control
                            type="search"
                            placeholder="Escriba algo para buscar..."
                            className="search-input p-3"
                            ref={searchInput}
                        />
                    </Form>
                </div>
                <div className="filters mb-4 d-flex justify-content-center">
                    <div onClick={() => handleSelection("nature")} className="filter-item mx-2">Naturaleza</div>
                    <div onClick={() => handleSelection("birds")} className="filter-item mx-2">Pájaros</div>
                    <div onClick={() => handleSelection("cats")} className="filter-item mx-2">Gatos</div>
                    <div onClick={() => handleSelection("shoes")} className="filter-item mx-2">Zapatos</div>
                </div>
                <div className="image-grid mt-4">
                    <Row>
                        {images.map((image) => (
                            <Col key={image.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                <img
                                    src={image.urls.small}
                                    alt={image.alt_description}
                                    className="img-fluid"
                                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="buttons mt-4 d-flex justify-content-center">
                    {page > 1 && <Button onClick={() => setPage(page - 1)} className="mx-2">Regresar</Button>}
                    {page < totalPages && <Button onClick={() => setPage(page + 1)} className="mx-2">Siguiente</Button>}
                </div>
            </div>
        </>
    );
};
