<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function registerform(){
        if(auth()->check()){
            return redirect('/');
        }
        return view('auth.register');
    }
    public function store(Request $request){
        $request->validate([
            'name' => 'required|max:100',
            'email'=>'required',
            'password' =>'required|min:6'
        ]);
        $user = User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> Hash::make($request->password),
        ]);
        return redirect('/');
    }
    public function loginform(){
        if(auth()->check()){
            return redirect('/');
        }
        return view('auth.login');
    }
    public function auth(Request $request){
         $request->validate([
        
            'email'=>'required',
            'password' =>'required|min:6'
        ]);
        if(auth()->attempt([
            'email'=> $request->email,
            'password'=> $request->password,
        ])){
            return redirect('/');
        }else{
            return redirect()->route('login')->with([
                 'error' => 'These Credentials do not match any of our records '
            ]);
        }
        
        
    }

    public function logout(){
        auth()->logout();
        return redirect()->route('login');
    }
}
