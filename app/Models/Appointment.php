<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = ['name', 'email', 'service', 'scheduled_at', 'details'];
    protected $casts = ['scheduled_at' => 'datetime'];
}
