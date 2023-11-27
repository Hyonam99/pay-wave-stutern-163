
export const convertTimestamp = (timestamp: string) => {
    const dateObject = new Date(timestamp);
    const day = dateObject.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dateObject);
    const year = dateObject.getFullYear();

    return `${month}-${day}-${year}`;
}

export const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('en', { minimumFractionDigits: 2 })
}
