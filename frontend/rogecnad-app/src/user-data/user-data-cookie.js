import Cookies from 'js-cookie';

const USER_DATA_COOKIE_NAME = 'userData';

function getUserDataCookie() {
    const userData = Cookies.get(USER_DATA_COOKIE_NAME);

    if (userData) return JSON.parse(userData);

    return userData;
}

function setUserDataCookie(value) {
    Cookies.set(USER_DATA_COOKIE_NAME, JSON.stringify(value), { expires: 1 });
}

function removeUserDataCookie() {
    Cookies.remove(USER_DATA_COOKIE_NAME)
}

export { getUserDataCookie, setUserDataCookie, removeUserDataCookie };