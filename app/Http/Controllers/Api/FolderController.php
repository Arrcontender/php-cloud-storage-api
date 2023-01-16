<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FolderStoreRequest;
use App\Models\Folder;
use App\Http\Resources\FolderResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FolderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FolderResource::collection(Folder::with('files')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FolderStoreRequest $request)
    {
        $created_folder = Folder::create($request->validated());

        return new FolderResource($created_folder);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new FolderResource(Folder::with('files')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FolderStoreRequest $request, Folder $folder)
    {
        $folder->update($request->validated());

        return new FolderResource($folder);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Folder $folder)
    {
        $folder->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
