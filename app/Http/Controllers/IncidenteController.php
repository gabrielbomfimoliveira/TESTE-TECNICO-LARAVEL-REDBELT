<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Incidentes;

class IncidenteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $incidentes = Incidentes::get();

        return response()->json($incidentes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $incidente = new Incidentes();
        $incidente->nome = $request->nome;
        $incidente->descricao = $request->descricao;
        $incidente->descricao = $request->descricao;
        $incidente->criticidade = $request->criticidade;
        $incidente->tipo = $request->tipo;
        $incidente->status = $request->status;
        $incidente->save();

        return response()->json($incidente);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $incidente = Incidentes::find($id);
        return response()->json($incidente);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $incidente = Incidentes::find($id);
        $incidente->nome = $request->nome;
        $incidente->descricao = $request->descricao;
        $incidente->descricao = $request->descricao;
        $incidente->criticidade = $request->criticidade;
        $incidente->tipo = $request->tipo;
        $incidente->status = $request->status;
        $incidente->save();

        return response()->json($incidente);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Incidentes::destroy($id);

        return response()->json(['message' => 'Deleted']);
    }
}
