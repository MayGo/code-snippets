export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
    optimistic?: boolean;
}

export interface FormState {
    success: boolean;
    error: string | null;
}
