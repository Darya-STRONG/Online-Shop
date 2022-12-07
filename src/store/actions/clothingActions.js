import {createAction} from "@reduxjs/toolkit";

const clothingLoading = createAction('CLOTHING_LOADING')
const clothingLoadingSuccess = createAction('CLOTHING_LOADING_SUCCESS')
const clothingLoadingFailed = createAction('CLOTHING_LOADING_FAILED')

export {clothingLoading, clothingLoadingSuccess, clothingLoadingFailed}
