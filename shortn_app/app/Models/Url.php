<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
    use HasFactory;

    protected $fillable =[
        'f_url' , 's_url','user_id','visits'   
    ];

    public function getCreatedAtAttribute($value){
        return Carbon::parse($value)->diffForHumans();
    }
    public function getRouteKeyName(){
        return 's_url';
    }
}
