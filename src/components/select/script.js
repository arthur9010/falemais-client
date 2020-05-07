export default {
    props: {
        label: {
            type: String,
        },
        options: {
            type: Array,
            required: true
        },
        'option-label': {
            type: String
        }
    },
    data: () => ({
        value: null
    })
}