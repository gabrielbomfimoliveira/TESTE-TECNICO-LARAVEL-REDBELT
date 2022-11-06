<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Incidentes extends Model
{

    protected $fillable = [
        'nome', 'descricao', 'criticidade', 'tipo', 'status'
    ];
}
