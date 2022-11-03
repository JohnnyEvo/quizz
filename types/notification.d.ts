export type CreateNotification = {
    (options: {
        type?: TypeAlert;
        title?: string;
        message: string;
        duration?: number;
    }): void;
};

export type TypeAlert = 'error' | 'warning' | 'success'
