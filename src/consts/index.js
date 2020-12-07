export const DEFAULT_USER = 'artnightevents';
export const USERS = [DEFAULT_USER, 'shakenightevents', 'plantnightevents'];
// export const ENDPOINT = "https://www.instagram.com/:username/?__a=1";
export const ENDPOINT = "blabla";
export const MAX_CAPTION_LENGTH = 150;
export const FILTER_METHODS = {
    all: null,
    photos: (item) => !item.isVideo,
    videos: (item) => item.isVideo
}