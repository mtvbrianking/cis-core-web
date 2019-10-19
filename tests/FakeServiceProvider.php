<?php

namespace Tests;

use App\Http\Clients\PasswordClient;
use App\Providers\AppServiceProvider;
use App\Http\Clients\ClientCredentialsClient;
use App\Http\Clients\PasswordClientInterface;
use App\Http\Clients\ClientCredentialsClientInterface;

class FakeServiceProvider extends AppServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->bind(ClientCredentialsClientInterface::class, function () {
            return new ClientCredentialsClient([
                'base_uri' => 'Am here dot there',
            ]);
        });

        $this->app->bind(PasswordClientInterface::class, function () {
            return new PasswordClient();
        });
    }
}
