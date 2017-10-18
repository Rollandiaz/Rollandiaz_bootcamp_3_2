<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\transaction;

class HotelResv extends Controller
{
    function Booking(Request $request){
        DB::beginTransaction();
        try{
            $this->validate($request,[
                'customer_id' => 'required',
                'room_id' => 'required',
                'check_in' => 'required',
                'check_out' => 'required',
                'payment' => 'required'

            ]);

            $roomId = $req->input('room_id');

            $book = new Transaction;
            $book->customer_id = $req->input('customer_id');
            $book->room_id = $roomId;
            $book->check_in= $req->input('check_in_date');
            $book->check_out = $req->input('check_out_date');
            $book->payment = $req->input('payment');
           
            $book->save();
            DB::commit();
            return response()->json($book, 200);

        }
        catch(\Exception $e){
            DB::rollback();
            return response()->json(['message' => 'Failed to make book:' + $e], 500);
        }
    }
}
