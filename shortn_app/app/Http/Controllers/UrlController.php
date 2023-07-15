<?php

namespace App\Http\Controllers;
Use App\Models\Url;
use App\Http\Requests\StoreUrlRequest;
use App\Http\Requests\UpdateUrlRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UrlController extends Controller
{
    public function index($user_id){
        $userUrls = Url::where('user_id',$user_id)->latest()->paginate(4);
         return response()->json($userUrls);
    }
    public function cal_visits($user_id){
        $totalVisits = Url::where('user_id', $user_id)->sum('visits');

         return response()->json($totalVisits);
    }
    public function most_visits_urls($user_id)
{
    $mostVisitedUrls = Url::where('user_id', $user_id)
        ->orderByDesc('visits')
        ->take(3)
        ->get();

    return response()->json($mostVisitedUrls);
}
    //
    public function store(StoreUrlRequest $request){
          $url = Url::create([
            'f_url'  =>   $request -> f_url,
            's_url'  =>   Str::random(),
            'user_id'  => $request ->user_id,
            'visits'  =>  0  ,
          ]);
          return response()->json($url); 
    }
    public function show($s_url){
        $url = Url::where('s_url',$s_url)->first();
        $url -> increment('visits');
        return redirect($url->f_url);
    }
   
}
