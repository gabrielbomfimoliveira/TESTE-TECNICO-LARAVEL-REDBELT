import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Layout from "../components/Layout"
import Swal from 'sweetalert2'

function ProjectList() {
    const [projectList, setProjectList] = useState([])

    useEffect(() => {
        fetchProjectList()
    }, [])

    const fetchProjectList = () => {
        axios.get('/api/incidentes')
            .then(function (response) {
                setProjectList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Tem certeza que deseja remover?',
            text: "Você não poderá reverter esta ação",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, remover!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/incidentes/${id}`)
                    .then(function (response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Incidente removido com sucesso!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        fetchProjectList()
                    })
                    .catch(function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Ops! Desculpe, ocorreu um erro!',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    });
            }
        })
    }

    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Listagem de incidentes</h2>
                <div className="card">
                    <div className="card-header">
                        <Link
                            className="btn btn-outline-primary"
                            to="/create">Criar novo incidente
                        </Link>
                    </div>
                    <div className="card-body">

                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descrição</th>
                                <th>Criticidade</th>
                                <th>Tipo</th>
                                <th>Status</th>
                                <th width="340px">Ação</th>
                            </tr>
                            </thead>
                            <tbody>
                            {projectList.map((project, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{project.nome}</td>
                                        <td>{project.descricao}</td>
                                        <td>{project.criticidade}</td>
                                        <td>{project.tipo}</td>
                                        <td>{project.status == 0 ? 'Inativo' : 'Ativo'}</td>
                                        <td>
                                            <Link
                                                to={`/show/${project.id}`}
                                                className="btn btn-outline-info mx-1">
                                                Visualizar
                                            </Link>
                                            <Link
                                                className="btn btn-outline-success mx-1"
                                                to={`/edit/${project.id}`}>
                                                Editar
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(project.id)}
                                                className="btn btn-outline-danger mx-1">
                                                Deletar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProjectList;
