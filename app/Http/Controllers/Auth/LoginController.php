<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Handle a login request to the application.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @throws \Illuminate\Validation\ValidationException
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if (method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        // if ($this->attemptLogin($request)) {
        //     return $this->sendLoginResponse($request);
        // }

        $alien = $this->remoteAuth($request);

        if ($alien instanceof \Symfony\Component\HttpFoundation\Response) {
            return $alien;
        }

        $this->syncRemoteUser($alien, $request->password);

        // Attempt local login

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }

        ddd('EOF');
        // Send failed login response.
    }

    /**
     * Remote authentication.
     *
     * @param mixed $request
     */
    public function remoteAuth($request)
    {
        try {
            $client = new Client();

            $options = [
                'headers' => [
                    'Authorization' => 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAzNDBiZGJjOTg4ZTY3MThhYWEwM2Y0Y2EzZjkwZjE0NjIxZTEzMWZiNDM2MWMxNTYwOTAyNmI5ZDQ0NzRkMjk5MThhNGMxNjJmNGYyMWE3In0.eyJhdWQiOiIxYmYwYjAzZS0xYzYyLTQ1ZTMtYmYxOC1jNTk4OWNiNDNkZGUiLCJqdGkiOiIwMzQwYmRiYzk4OGU2NzE4YWFhMDNmNGNhM2Y5MGYxNDYyMWUxMzFmYjQzNjFjMTU2MDkwMjZiOWQ0NDc0ZDI5OTE4YTRjMTYyZjRmMjFhNyIsImlhdCI6MTU3MTMyODk2MywibmJmIjoxNTcxMzI4OTYzLCJleHAiOjE1NzI2MjQ5NjMsInN1YiI6IjIxNWJmMTBjLWFjZDYtNDY0My1hYWE3LWVjMTIwZGY3NGNjMyIsInNjb3BlcyI6W119.Npuur1z-fjsf4cDfrmfvRRmUllGGEJ0STH95U_0UWJMVJ-p5cWwx3uhO8q6qyZjfxy_CRV6hj89GUw0gvTgjoQXJ8Oy_vqLoJHQ8ruyJ6KXxHVAcBMPYXZNOYD68OgDhLCkA1LfLCEqqY0c6olV3nk2ffQkQg9nVA1A_mVfkbbVsTb00j4U8b4-ZqDpxJMAceLMGgUgtAAcSPcDcJHkX79o_1oy4cOn7DLrVB9UEXsv--T5Xkr7ygx7ES-88ooZJMnVWFEzOV0bS5Q6TuMsSjbEfxbmzlKN-Ff2rH-ppoo3kuGsgb6vjTx-rGZhSs4hGQgNAvBzz21exupTLtHJ87f8ClaXGN8_i1UWAqJXi1nSnoA_a6Jf83RkiJL_e63WQsxHaxwjkViqCkJ2dJpPZT8yoQOGRfnZO_fz82zrOnW7GXfVVbOHGB118vnhsZkQZAkV4iBp2MeRalOVmNUg8jjZx9StbR3l4ZPPZkONhh_4zADB_iaF_27uvqlIIn_fA9kRPTiuJSzK2TJ_O_M6bA9aC7jgavso4XRgxQkcIhflPwiiMfAfJ_Tm6q1dC7ap9cBRDz57zav7goWRq2jgK9OwzFZkeflQHcWhaFNGA3oJTyyMb5Wbr4KTIMbR43QaewSOm0pLjtMdftkdPx2iHN3vivAc0ABtWwSqayooL4ZU',
                    'Accept' => 'application/json',
                ],
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => '1bf0b03e-1c62-45e3-bf18-c5989cb43dde',
                    'client_secret' => 'S8xqNQxus0L4cCJA8lQ4nKLayIQjfc4YOXz9MSWp',
                    'email' => $request->email,
                    'password' => $request->password,
                ],
            ];

            $response = $client->post('http://localhost:90/cis-core-api/public/api/v1/oauth/token', $options);

            $api_response = json_decode($response->getBody());

            return $api_response->user;
        } catch (\GuzzleHttp\Exception\ClientException $ex) {
            // If the login attempt was unsuccessful we will increment the number of attempts
            // to login and redirect the user back to the login form. Of course, when this
            // user surpasses their maximum number of attempts they will get locked out.
            $this->incrementLoginAttempts($request);

            $status = $ex->getResponse()->getStatusCode();
            if ($status == 401) {
                $response = json_decode($ex->getResponse()->getBody(), true);

                flash($response['error'])->warning()->important();

                return redirect()->back();
            }
            if ($status == 422) {
                $response = json_decode($ex->getResponse()->getBody(), true);

                return redirect()->back()
                    ->withInput($request->only('email', 'remember'))
                    ->withErrors($response['errors']);
            }
        } catch (\GuzzleHttp\Exception\RequestException $ex) {
            Log::error(json_encode([$ex->getCode() => $ex->getMessage()]));
            flash('Something went terribly wrong')->warning()->important();

            return redirect()->back();
        } catch (\GuzzleHttp\Exception\ServerException $ex) {
            flash("Server can't process request.")->warning()->important();

            return redirect()->back();
        }
    }

    /**
     * Sync remote user to local storage.
     *
     * @param object $alien
     * @param string $secret
     *
     * @return App\Models\User
     */
    public function syncRemoteUser(object $alien, string $secret): User
    {
        // Prevent duplicate user accounts
        User::query()
            ->withTrashed()
            ->where(['id' => $alien->id])
            ->orWhere(['email' => $alien->email])
            ->forceDelete();

        // Mirror remote user.
        $user = new User();
        $user->id = $alien->id;
        $user->facility_id = $alien->facility_id;
        $user->role_id = $alien->role_id;
        $user->alias = $alien->alias;
        $user->name = $alien->name;
        $user->email = $alien->email;
        $user->email_verified_at = $alien->email_verified_at;
        $user->password = Hash::make($secret);
        $user->remember_token = null;
        $user->created_at = $alien->created_at;
        $user->updated_at = $alien->updated_at;
        $user->deleted_at = $alien->deleted_at;
        $user->save();

        return $user;
    }
}
