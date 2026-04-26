<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WebsiteContentResource\Pages;
use App\Filament\Resources\WebsiteContentResource\RelationManagers;
use App\Models\WebsiteContent;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class WebsiteContentResource extends Resource
{
    protected static ?string $model = WebsiteContent::class;

    protected static ?string $modelLabel = 'محتوى الموقع';
    protected static ?string $pluralModelLabel = 'محتويات الموقع';
    protected static ?string $navigationGroup = 'الإعدادات';

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('key')
                    ->label('المفتاح')
                    ->required(),
                Forms\Components\Textarea::make('value')
                    ->label('القيمة')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('key')
                    ->label('المفتاح')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('تاريخ الإنشاء')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('تاريخ التحديث')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageWebsiteContents::route('/'),
        ];
    }
}
