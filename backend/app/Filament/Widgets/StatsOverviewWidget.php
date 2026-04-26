<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use App\Models\Product;
use App\Models\Visitor;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverviewWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('إجمالي المنتجات', Product::count()),
            Stat::make('إجمالي الطلبات', Order::count()),
            Stat::make('إجمالي الزوار', Visitor::count()),
        ];
    }
}
