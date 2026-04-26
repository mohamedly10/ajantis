<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestOrdersWidget extends BaseWidget
{
    protected static ?string $heading = 'أحدث الطلبات';
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Order::query()->latest()->limit(5)
            )
            ->columns([
                Tables\Columns\TextColumn::make('customer_name')->label('اسم العميل')->searchable(),
                Tables\Columns\TextColumn::make('total_price')->label('السعر الإجمالي')->money()->sortable(),
                Tables\Columns\TextColumn::make('status')->label('الحالة'),
                Tables\Columns\TextColumn::make('created_at')->label('تاريخ الإنشاء')->dateTime()->sortable(),
            ]);
    }
}
