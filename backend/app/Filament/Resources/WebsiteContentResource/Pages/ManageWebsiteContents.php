<?php

namespace App\Filament\Resources\WebsiteContentResource\Pages;

use App\Filament\Resources\WebsiteContentResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageWebsiteContents extends ManageRecords
{
    protected static string $resource = WebsiteContentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
