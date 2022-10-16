<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        return response()->json(User::get());
    }
    public function  store(Request $request){
      User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
        return response()->json();
    }
    public function edit($id){
        return response()->json(User::whereId($id)->first());
    }
    public function  update(Request $request,$id){
      $user=User::where('id',$id)->first();
      $user->update([
        'name'=>$request->name,
        'email'=>$request->email
      ]);
          return response()->json('success');
      }
      public function view($id){
        return response()->json(User::whereId($id)->first());
      }
      public function delete($id){
       $user=User::where('id',$id)->first();
       $user->delete();
       return response()->json('deleted');
      }
}
