<?php

namespace App\Providers;

use Monolog\Logger;
use GuzzleHttp\Middleware;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\MessageFormatter;
use Monolog\Handler\StreamHandler;
use App\Http\Clients\PasswordClient;
use Illuminate\Support\ServiceProvider;
use App\Http\Clients\ClientCredentialsClient;
use App\Http\Clients\PasswordClientInterface;
use App\Http\Clients\ClientCredentialsClientInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ClientCredentialsClientInterface::class, function () {
            return $this->createClientCredentialsClient();
        });

        $this->app->bind(PasswordClientInterface::class, function () {
            return $this->createPasswordClient();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Create client-credentials client.
     *
     * @throws \Exception
     *
     * @return \App\Http\Clients\ClientCredentialsClientInterface
     */
    protected function createClientCredentialsClient()
    {
        $handlerStack = HandlerStack::create();

        $handlerStack->push($this->getLogMiddleware());

        return new ClientCredentialsClient([
            'handler' => $handlerStack,
            'base_uri' => 'http://localhost:90/cis-core-api/public/api/v1/',
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer client-credentials-access-token',
            ],
        ]);
    }

    /**
     * Create password client.
     *
     * @throws \Exception
     *
     * @return \App\Http\Clients\PasswordClientInterface
     */
    protected function createPasswordClient()
    {
        return new PasswordClient([
            'base_uri' => 'http://localhost:90/cis-core-api/public/api/v1/',
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer password-access-token',
            ],
        ]);
    }

    /**
     * Get log middleware.
     *
     * @throws \Exception
     *
     * @return callable GuzzleHttp Middleware
     */
    protected function getLogMiddleware()
    {
        $logger = $this->app['log']->getLogger();
        $streamHandler = new StreamHandler(storage_path('logs/api-requests.log'));
        $logger->pushHandler($streamHandler, Logger::DEBUG);
        $messageFormatter = new MessageFormatter(MessageFormatter::DEBUG);

        return Middleware::log($logger, $messageFormatter);
    }
}
