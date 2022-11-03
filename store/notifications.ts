import {defineStore} from "pinia";
import {Notification} from "../interfaces/Notification";

export const useNotificationStore = defineStore('notifications', {
    state: () => {
        return {notifications: <Notification[]>[]}
    },
    actions: {
        add(notification: Notification) {
            this.notifications.push(notification);

            setTimeout(() => {
                this.remove(notification);
            }, notification.duration)
        },
        remove(notification: Notification) {
            this.notifications = this.notifications.filter(n => {
                if(n.id !== notification.id) {
                    return notification;
                }
            })
        }
    },
});