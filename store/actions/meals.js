export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTER';

export const toggleFavorite = (mealId) => {
    return {
        type: TOGGLE_FAVORITE,
        mealId: mealId
    }
}

export const setFilters = filterSettings => {
    return {
        type: SET_FILTERS,
        filters: filterSettings
    }
}