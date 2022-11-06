import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import Layout from "../components/Layout"

function ProjectShow() {
    const [id, setId] = useState(useParams().id)
    const [project, setProject] = useState({name: '', description: ''})
    useEffect(() => {
        axios.get(`/api/incidentes/${id}`)
            .then(function (response) {
                setProject(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Visualizar Incidente</h2>
                <div className="card">
                    <div className="card-header">
                        <Link
                            className="btn btn-outline-info float-right"
                            to="/"> Visualizar todos os incidentes
                        </Link>
                    </div>
                    <div className="card-body">
                        <b className="text-muted">Título:</b>
                        <p>{project.nome}</p>
                        <b className="text-muted">Descrição:</b>
                        <p>{project.descricao}</p>
                        <b className="text-muted">Criticidade:</b>
                        <p>{project.criticidade}</p>
                        <b className="text-muted">Tipo:</b>
                        <p>{project.tipo}</p>
                        <b className="text-muted">Status:</b>
                        <p>{project.status == 0 ? <span className="text-success">Incidente ativo</span> :
                            <span className="text-success">Incidente ativo</span>}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProjectShow;
