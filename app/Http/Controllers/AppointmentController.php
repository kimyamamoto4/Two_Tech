<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email'],
            'service' => ['required', 'string', 'max:80'],
            'scheduled_at' => ['required', 'date'],
            'details' => ['nullable', 'string', 'max:2000'],
        ]);

        return response()->json(['appointment' => Appointment::create($data)], 201);
    }
}
