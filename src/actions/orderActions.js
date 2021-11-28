
// JSON Headers
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
export const submitNewOrder = (formData) => {
    const body = JSON.stringify(formData);
    console.log(body, 'body')
    return async (dispatch) => {
        try {
            console.log(formData)
        } catch (err) {
            console.log('error')
        }
    }
}