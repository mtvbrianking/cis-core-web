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
                // 'Authorization' => 'Bearer client_credentials_access_token',
                'Authorization' => 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyMmNhNTU3NTJiODg5YmI5M2ViZWViYTcxNTBhNjQzM2ExOWE5N2VhNGUxOTQ3ZTE4NDgzNGMxNTVmZWVjNzg5YThhNTI5MTgwNjZkZjRmIn0.eyJhdWQiOiIxYmYwYjAzZS0xYzYyLTQ1ZTMtYmYxOC1jNTk4OWNiNDNkZGUiLCJqdGkiOiJmMjJjYTU1NzUyYjg4OWJiOTNlYmVlYmE3MTUwYTY0MzNhMTlhOTdlYTRlMTk0N2UxODQ4MzRjMTU1ZmVlYzc4OWE4YTUyOTE4MDY2ZGY0ZiIsImlhdCI6MTU3MTQwMjU5NiwibmJmIjoxNTcxNDAyNTk2LCJleHAiOjE1NzI2OTg1OTYsInN1YiI6IiIsInNjb3BlcyI6WyJhdXRoZW50aWNhdGUtdXNlciJdfQ.UJOzNiMyQxNusH7RDUgT87yfTGkj-3ymQ5MHsEnUG0_KEJnQollnyUpp2U76wYgRE8rqlhopGpcllGTCrD-gMPNeYdwfhn1sRttqHILkT2Dc7wKuFlP_EoNzQhStMkT7QqJMKogePbE8wjPhSodY-72JTsgUVNpnxIv_jQV6o9C7EtTiiMxKgqUlQwDMtWVDbWwCNTR-Aj9W7C1BkYA__D_1D68yp2s6M8v7mpk06hyceAzOYw2pZX0Ij9AofSfdIdl6slIQXFknxoyFJVaRTHAUoiiXx2WEYHjdzPTP3zae_T3jRaK-gTZUsTXmwMwn4w3t_BOi8jimuAA-pztAXAaIAenO07Z5TTaUCOTofZtR84MtYgcXBohipt25_dxUqqHLJ02hqHQMfk9gJudJo16DTsZbekHuXfwHlEzHH3plmMAWGzk5G-HkaXozwfK-OyWN7nF6BNu2yeZ3WmMpLCk2WpARtuCR81cZaOiAG34L0LMhNFl7hUPzYv8E-6O7YBwqWXY0yqcUjYZd8APD-SX-1AQGmxzf5ckeQbU8zXUM9o5npmG1M5IWziRUsiWDQMYL2B2oNUa-ZIY7wzY3bPOP-IbOMbo2--D7jHGIFcgu6IENFEcM7l1eZjfaG6kfI5CKe8kV4Kc2kYTvZHvJkaV2viyOLYawzYhznlnGe0Y',
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
                // 'Authorization' => 'Bearer password_access_token',
                'Authorization' => 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjljMjViMTUwMTkwNzlmNWE0YjJlZjUwZTRlMTMwOTM5M2MxNDMxYjkzZTYxMGQ1Nzc2ODE0Njg3YTc0YWM4OTIyY2M5ZmFmODczMjMwM2I0In0.eyJhdWQiOiIxYmYwYjAzZS0xYzYyLTQ1ZTMtYmYxOC1jNTk4OWNiNDNkZGUiLCJqdGkiOiI5YzI1YjE1MDE5MDc5ZjVhNGIyZWY1MGU0ZTEzMDkzOTNjMTQzMWI5M2U2MTBkNTc3NjgxNDY4N2E3NGFjODkyMmNjOWZhZjg3MzIzMDNiNCIsImlhdCI6MTU3MTQwOTczNywibmJmIjoxNTcxNDA5NzM3LCJleHAiOjE1NzI3MDU3MzcsInN1YiI6IjIxNWJmMTBjLWFjZDYtNDY0My1hYWE3LWVjMTIwZGY3NGNjMyIsInNjb3BlcyI6W119.HcpZHK0jXZYFIqeU8DhSum9da52sGKgcRk9vySJYT1c-6mf1SYXBgqXZRt4CH7fqIjAYhUYHKNCSBZCHrZhIZd0D8Akz-84-vBbsKMtJ32wsJa3d-r9gmCDWjc4qwLt-DeTlhrNPU5Cr6Jro4pzPxYxoSa3hsnaQfxvtxLPDlA91hRJcI9s2oNOk6_G57zmlxmFtz738FYVIjXdD2_Qe4sBJAEVqJ9GEXdgPAtLuoedtUWOMk2gYpTTZrZC3JmWfuAApNXtstAlbn1Lm98XawWkLV0nAZ3kS9mf6riMrRvFxfELzeyEZc3zMWArePp33a0-zyMZd1d39ClHhfksXBTaqneOZD5N9GxQJxDikg_pKO8A8Bhk86tAXr51HxYdGBd98Av0-TRPVr--5Bt0hfA6aBDDevwSgw-RDtDvuM5IMXZNIThd7VXcATWnvpuJt_IDjXpspYw6QrIWcWyyEimyLAcEkbLCiWCU3KkaOV7VK0lUk4Qe1DKiTV0USNxlgOHbP5KHdA16TAdKcLqD10ttJFsiGeExzzdTRWMVrBdRD0sKPiS9IH2UFeOSJeJ7VzIFk0lbFyGBuytJkdawN0VZz0LmgoFAV7s2ngjZl6T_yRe-E3PX06z00T78dRL3-HfPqd-72Qtamzvk3KCQJLGq2-whaFTKkXRMb6gvc91Q',
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
