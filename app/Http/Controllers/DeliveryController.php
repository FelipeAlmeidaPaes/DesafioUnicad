<?php

namespace App\Http\Controllers;

use App\delivery;
use Illuminate\Http\Request;

class DeliveryController extends Controller
{

    public function index(){
        $deliveries = Delivery::orderBy('delivery_date')->get();

        return $deliveries->toJson();
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'client_name' => 'required',
            'from' => 'required',
            'destiny' => 'required',
        ]);

        $delivery = Delivery::create([
            'client_name' => $validatedData['client_name'],
            'from' => $validatedData['from'],
            'destiny' => $validatedData['destiny'],
        ]);

        return response()->json('Delivery created!');
    }

    public function show($id){
        $delivery = Delivery::find($id);
        return $delivery->toJson();
    }
}
