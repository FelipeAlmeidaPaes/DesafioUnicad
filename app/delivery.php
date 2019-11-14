<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class delivery extends Model
{
    public $timestamps = false;

    protected $fillable = ['client_name', 'from', 'destiny'];
}
