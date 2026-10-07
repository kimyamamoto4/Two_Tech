<?php

namespace App\Http\Controllers;

use App\Models\CustomBuildRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomBuildRequestController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email'],
            'budget' => ['required', 'numeric', 'min:0'],
            'intended_use' => ['required', 'string', 'max:80'],
            'requirements' => ['nullable', 'string', 'max:3000'],
        ]);

        return response()->json(['request' => CustomBuildRequest::create($data)], 201);
    }
}
