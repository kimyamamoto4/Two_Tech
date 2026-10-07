<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomBuildRequest extends Model
{
    protected $fillable = ['name', 'email', 'budget', 'intended_use', 'requirements'];
}
