<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // الحقول المسموح إدخالها
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    // الحقول المخفية
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // تحويل نوع البيانات
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}