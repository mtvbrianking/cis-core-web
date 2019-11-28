<?php

namespace App\Http\Controllers;

use App\Http\Clients\PasswordClientInterface;
use Illuminate\Http\Request;

class FacilityController extends Controller
{
    /**
     * Password client.
     *
     * @var \App\Http\Clients\PasswordClientInterface
     */
    protected $passwordClient;

    /**
     * Create a new controller instance.
     *
     * @param \App\Http\Clients\PasswordClientInterface $passwordClient
     *
     * @return void
     */
    public function __construct(PasswordClientInterface $passwordClient)
    {
        $this->middleware('auth');
        $this->passwordClient = $passwordClient;
    }

    /**
     * Show facilities.
     *
     * @param \Illuminate\http\Request $request
     *
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $apiResponse = $this->passwordClient->get('facilities', [
            'query' => [
                'paginate' => true,
                'limit' => 10,
                'page' => $request->page,
            ],
        ]);

        $body = json_decode($apiResponse->getBody(), false);

        $facilities = paginate($request, $body->facilities);

        return view('facilities.index', ['facilities' => $facilities]);
    }

    /**
     * Show facilities via datatables.
     *
     * @param \Illuminate\http\Request $request
     *
     * @return \Illuminate\View\View
     */
    public function showDatatables(Request $request)
    {
        return view('facilities.index-dt');
    }

    /**
     * Load facilities via datatables.
     *
     * @see http://docs.guzzlephp.org/en/5.3/quickstart.html#query-string-parameters Empty string vs. Null
     *
     * @param \Illuminate\http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function datatables(Request $request)
    {
        $apiResponse = $this->passwordClient->get('facilities/dt', [
            'query' => $request->query(),
        ]);

        $body = json_decode($apiResponse->getBody(), false);

        return response()->json($body);
    }

    /**
     * Show facility.
     *
     * @param string $facilityId
     *
     * @return \Illuminate\View\View
     */
    public function show($facilityId)
    {
        $apiResponse = $this->passwordClient->get("facilities/{$facilityId}");

        $facility = json_decode($apiResponse->getBody(), false);

        return view('facilities.show', ['facility' => $facility]);
    }

    /**
     * Show create facility.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('facilities.create');
    }

    /**
     * Create facility.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\View\View
     */
    public function store(Request $request)
    {
        $apiResponse = $this->passwordClient->post('facilities', [
            'json' => $request->all(),
        ]);

        $facility = json_decode($apiResponse->getBody(), false);

        flash("{$facility->name} created.")->success();

        return view('facilities.show', ['facility' => $facility]);
    }

    /**
     * Show edit facility.
     *
     * @param string $facilityId
     *
     * @return \Illuminate\View\View
     */
    public function edit($facilityId)
    {
        $apiResponse = $this->passwordClient->get("facilities/{$facilityId}");

        $facility = json_decode($apiResponse->getBody(), false);

        return view('facilities.edit', ['facility' => $facility]);
    }

    /**
     * Update facility.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $facilityId
     *
     * @return \Illuminate\View\View
     */
    public function update(Request $request, $facilityId)
    {
        $apiResponse = $this->passwordClient->put("facilities/{$facilityId}", [
            'json' => $request->all(),
        ]);

        $facility = json_decode($apiResponse->getBody(), false);

        flash("{$facility->name} updated.")->success();

        return view('facilities.show', ['facility' => $facility]);
    }

    /**
     * Revoke facility.
     *
     * @param string $facilityId
     *
     * @return \Illuminate\View\View
     */
    public function revoke($facilityId)
    {
        $apiResponse = $this->passwordClient->put("facilities/{$facilityId}/revoke");

        $facility = json_decode($apiResponse->getBody(), false);

        flash("{$facility->name} revoked.")->warning();

        return view('facilities.show', ['facility' => $facility]);
    }

    /**
     * Restore facility.
     *
     * @param string $facilityId
     *
     * @return \Illuminate\View\View
     */
    public function restore($facilityId)
    {
        $apiResponse = $this->passwordClient->put("facilities/{$facilityId}/restore");

        $facility = json_decode($apiResponse->getBody(), false);

        flash("{$facility->name} restored.")->success();

        return view('facilities.show', ['facility' => $facility]);
    }

    /**
     * Delete facility.
     *
     * @param string $facilityId
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($facilityId)
    {
        $this->passwordClient->delete("facilities/{$facilityId}");

        flash('Facility deleted.')->error();

        return redirect()->route('facilities.index');
    }
}
