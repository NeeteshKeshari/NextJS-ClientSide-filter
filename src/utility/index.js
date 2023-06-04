// Use dateFormatter util to format the date into "yyyy-MM-dd" format
export const dateFormatter = (date) => {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let formattedDate = year+'-'+month+'-'+day;
    return formattedDate;
}