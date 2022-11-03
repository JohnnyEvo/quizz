import useNotifications from "../notifications";

export let useApiError = (data: { statusCode: number }) => {
    const notifications = useNotifications();

    if (data.statusCode === 404) {
        notifications.createWarningNotification({message: '404 Not Found.'});
    } else if (data.statusCode === 401) {
        notifications.createWarningNotification({message: '401 Unauthorized.'});
    } else if (data.statusCode === 403) {
        notifications.createWarningNotification({message: '403 Forbidden.'});
    } else if (data.statusCode === 422) {
        notifications.createWarningNotification({message: '422 Bad parameters.'});
    } else {
        notifications.createServerErrorNotification();
    }
}
