import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import Layout from "../components/Layout"
import Swal from 'sweetalert2'

function ProjectEdit() {
    const [id, setId] = useState(useParams().id)
    const [nome, setName] = useState('');
    const [descricao, setDescription] = useState('')
    const [criticidade, setCriticidade] = useState('')
    const [tipo, setTipo] = useState('')
    const [isChecked, setIsChecked] = useState(false);
    const [isSaving, setIsSaving] = useState(false)

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };


    useEffect(() => {
        axios.get(`/api/incidentes/${id}`)
            .then(function (response) {
                let project = response.data
                setName(project.nome);
                setDescription(project.descricao);
                setCriticidade(project.criticidade);
                setTipo(project.tipo);
                project.status == 0 ? setIsChecked(false) : setIsChecked(true);
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ops! Ocorreu um erro...',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

    }, [])


    const handleSave = () => {
        if (nome == '' || descricao == '' || criticidade == '' || tipo == '') {
            Swal.fire({
                icon: 'error',
                title: 'Por favor, preencha todos os campos corretamente!',
                showConfirmButton: false,
                timer: 3000
            })
            return;
        }
        setIsSaving(true);
        axios.patch(`/api/incidentes/${id}`, {
            nome: nome,
            descricao: descricao,
            criticidade: criticidade,
            tipo: tipo,
            status: isChecked
        })
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Incidente atualizado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false);
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ops! Ocorreu um erro...',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false)
            });
    }


    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Editar Incidente</h2>
                <div className="card">
                    <div className="card-header">
                        <Link
                            className="btn btn-outline-info float-right"
                            to="/">Visualizar todos os incidentes
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nome">Titulo</label>
                                <input
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }}
                                    value={nome}
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    name="nome"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição</label>
                                <textarea
                                    value={descricao}
                                    onChange={(event) => {
                                        setDescription(event.target.value)
                                    }}
                                    className="form-control"
                                    id="descricao"
                                    rows="3"
                                    name="descricao"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="criticidade">Criticidade</label>
                                <select className="form-control"
                                        value={criticidade}
                                        onChange={(event) => {
                                            setCriticidade(event.target.value)
                                        }}
                                        id="criticidade"
                                        name="criticidade">
                                    <option value={''}>Selecione</option>
                                    <option value={'Alta'}>Alta</option>
                                    <option value={'Média'}>Média</option>
                                    <option value={'Baixa'}>Baixa</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipo">Tipo</label>
                                <select className="form-control"
                                        value={tipo}
                                        onChange={(event) => {
                                            setTipo(event.target.value)
                                        }}
                                        id="tipo"
                                        name="tipo">
                                    <option value={''}>Selecione</option>
                                    <option value={'Alarme'}>Alarme</option>
                                    <option value={'Incidente'}>Incidente</option>
                                    <option value={'Outros'}>Outros</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="status">Ativo</label>
                            </div>
                            <div className="form-group">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        className="form-control"
                                        id="status"
                                        name="status"
                                        value="S"
                                        checked={isChecked}
                                        onChange={handleOnChange}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className="result">
                                {isChecked ? <span className="text-success">Incidente ativo</span> :
                                    <span className="text-danger">Incidente inativo</span>}
                            </div>
                            <button
                                disabled={isSaving}
                                onClick={handleSave}
                                type="button"
                                className="btn btn-outline-success mt-3">
                                Atualizar Incidente
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProjectEdit;
