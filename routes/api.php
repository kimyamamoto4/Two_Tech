<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\CustomBuildRequestController;
use Illuminate\Support\Facades\Route;

Route::post('/appointments', [AppointmentController::class, 'store']);
Route::post('/custom-builds', [CustomBuildRequestController::class, 'store']);
