/**DTO : Data Transfer Object, the data object structure of the payload*/

export interface LoginDTO {
    email: string;
    password: string;
}

export interface SignupDTO {
    firstName: string;
    lastName: string;
    email: string;
    businessName: string;
	businessAddress: string;
    phoneNumber: string;
    password: string;
}

export interface CustomButtonProps {
    title: string;
    size?: "small" | "medium" | "large" | undefined;
    outlined?: boolean;
    onClick?: () => void
    color?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    className?: string | ''
    type?: "button" | "reset" | "submit"
    isLoading?: boolean
}
