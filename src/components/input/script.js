export default {
    props: {
        ruleRequired: {
            type: Boolean,
            default: false
        },
        mask: {
            type: String
        },
        label: {
            type: String,
        },
        type: {
            type: String,
        },
    },
    data: () => ({
        value: null
    })
}