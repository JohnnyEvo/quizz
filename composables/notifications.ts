import {CreateNotification} from "@/types/notification";
import {useNotificationStore} from "@/store/notifications";

function createUUID(): string {
    return `${Date.now()}`;
}

const defaultNotificationOptions = {
    type: "success",
    title: "",
    message: "",
    duration: 5000,
};

export default function useNotifications() {
    const notificationsStore = useNotificationStore();

    const createNotification: CreateNotification = (options) => {
        const _options = Object.assign({ ...defaultNotificationOptions }, options);

        let notification = {id: createUUID(),..._options,}

        notificationsStore.add(notification);
    };

    const createServerErrorNotification = () => {
        createNotification({
            type: "error",
            message: "Oops. Please refresh page.",
            duration: 8000,
        });
    };

    const createSuccessNotification: CreateNotification = (options) => {
        createNotification({ type: "success", ...options });
    };

    const createWarningNotification: CreateNotification = (options) => {
        createNotification({  type: "warning", ...options,});
    };

    return {
        createNotification,
        createSuccessNotification,
        createServerErrorNotification,
        createWarningNotification,
    };
}