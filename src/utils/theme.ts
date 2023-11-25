import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: 'red',
            main: '#24ccff',
            dark: '#00a4d6', // applied for css hovers and active events
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff7961',
            main: '#580909',
            dark: '#3c0202', // applied for css hovers and active events
            contrastText: '#000'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'outlined'
                    && ownerState.color === 'secondary' && {
                        color: '#fff'
                    }),
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    borderRadius: '.6rem'
                })
            }
        }
    }
});

export const textVariant = (delay: any) => {
    return {
        hidden: {
            y: -50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay
            }
        }
    };
};

export const fadeIn = (direction: string, type: any, delay: any, duration: any) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    };
};

export const zoomIn = (delay: any, duration: any) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay,
                duration,
                ease: "easeOut"
            }
        }
    };
};

export const slideIn = (direction: string, type: any, delay: any, duration: any) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    };
};

export const staggerContainer = (staggerChildren: any, delayChildren: any) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren: delayChildren ?? 0
            }
        }
    };
};
